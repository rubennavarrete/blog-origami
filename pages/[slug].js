import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../lib/mdx';
import MDXComponents from '../components/MDXComponents';

export default function Post({ source }) {
    return <MDXRemote {...source} components={MDXComponents} />
}

export async function getStaticProps({ params }) {
    const { source } = await getFileBySlug(params.slug);

    return {
        props: { source },
    };
}

export async function getStaticPaths() {
    const posts = await getFiles("posts");
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}