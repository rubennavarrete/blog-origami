import { MDXRemote } from "next-mdx-remote";

import { MDXComponents, Layout } from "@/components";
import { getFiles, getFileBySlug } from "@/lib/mdx";

export default function Page({ source, frontmatter }) {
  return (
    <Layout type="page" metadata={frontmatter}>
      <MDXRemote {...source} components={MDXComponents} />
      <div
        id="html_embed_widget_11018"
        className="html_embed_widget embed_wrapper"
      >
        <div data-height="600" data-width="960" class="game_frame game_loaded">
          <iframe
            mozallowfullscreen="true"
            allow="autoplay; fullscreen; geolocation; microphone; camera; midi"
            src="/Museo-Origami-Juego-Html/index.html"
            msallowfullscreen="true"
            scrolling="no"
            allowfullscreen="true"
            webkitallowfullscreen="true"
            id="game_drop"
            allowtransparency="true"
            frameborder="0"
            style={{ width: "100%", height: "70vh" }}
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const pages = await getFiles("pages");
  const paths = pages.map((page) => ({
    params: {
      slug: page.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug("pages", params.slug);

  return {
    props: {
      source,
      frontmatter,
    },
  };
}
