import { Box, Flex, HStack, Link } from "./elements";
// import { IconTwitch, IconYoutube } from "./icons";
import { Logo } from "./Logo";
import { SectionLinks } from "./SectionLinks";

export const Header = () => {
  return (
    <Box as="header" py="10" px={[0, 0, 0, 8]}>
      <Flex
        as="header"
        fontWeight="bold"
        direction={["column", "column", "column", "row"]}
        justify="space-between"
        align="center"
      >
        <h1 title="Origami - Blog">
          <Logo />
        </h1>
        <SectionLinks />
      </Flex>
    </Box>
  );
};
