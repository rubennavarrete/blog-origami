import { DiscussionEmbed, CommentCount } from "disqus-react";

export const Disqus = ({ type = "embed", title, slug }) => {
  const disqusShortname = "rubenvalencia";
  const disqusConfig = {
    url: `blog-origami.rubenvn.com/${slug}`,
    identifier: slug,
    title,
    language: "es",
  };

  if (type === "embed") {
    return (
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    );
  }

  if (type === "count") {
    return <CommentCount shortname={disqusShortname} config={disqusConfig} />;
  }
};
