import { MDXRemote } from "next-mdx-remote";

import { MDXComponents, Layout, ScrollToTop } from "@/components";
import { getFiles, getFileBySlug } from "@/lib/mdx";

export default function Objetos({ source, frontmatter }) {
    return (
        <Layout type="page" metadata={frontmatter}>
            <MDXRemote {...source} components={MDXComponents} />
            <ScrollToTop />
        </Layout>
    );
}

export async function getStaticPaths() {
    const objetos = await getFiles("objetos");
    const paths = objetos.map((objeto) => ({
        params: {
            slug: objeto.replace(/\.mdx/, ""),
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug("objetos", params.slug);

    return {
        props: {
            source,
            frontmatter,
        },
    };
}