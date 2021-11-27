import NextLink from "next/link";

import { Card } from "./_Card";
import { Text, Link, Box } from "../elements";

export const BlogCardHome = ({ posts }) => {
  return (
    <Card type="home" headerTitle="Contenido">
      {posts.map((post) => (
        <NextLink href={post.slug} key={post.slug}>
          <a>
            <Box my={2}>
              <Text isTruncated>{post.title}</Text>
              <Text fontSize="xs" color="grayblue.900">
                {post.date}
              </Text>
            </Box>
          </a>
        </NextLink>
      ))}
      <NextLink href="/blog">
        <Link color="brand.900">Todo el Contenido →</Link>
      </NextLink>
    </Card>
  );
};
