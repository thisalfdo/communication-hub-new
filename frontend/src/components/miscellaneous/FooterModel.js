import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#EEF7FF" color={useColorModeValue("gray.700", "gray.200")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Call us</Link>
          <Link href={"mailto:support@example.com"}>Email</Link>
          <Text>+123 456 7890</Text>
        </Stack>
        <Text>© 2024 ArcTec Corporation. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
