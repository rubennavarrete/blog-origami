import Head from "next/head";

export const OpenGraph = ({ metadata = {} }) => {
  const SEO = {
    title: metadata.title || "Origami - Blog",
    description:
      metadata.description ||
      "El origen del Origami. Pensamos que es originario de Japón, y algunos lo definen como el arte japonés que se forma doblando hojas de papel.",
    slug: metadata.slug || "",
    date: metadata.date || new Date().toISOString(),
  };

  return (
    <Head>
      <title>{SEO.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={SEO.description} name="description" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Origami" />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:image" content={SEO.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@carlosazaustre" />
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:image" content={SEO.image} />
      <meta property="article:published_time" content={SEO.date} />
    </Head>
  );
};
