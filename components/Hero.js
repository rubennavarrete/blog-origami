import { Fragment } from "react";
// import Image from "next/image";
import Link from "next/link";

import { Text, Box } from "./elements";
import { ButtonCTA } from "./ButtonCTA";

export const Hero = () => {
  return (
    <Fragment>
      <Text
        fontFamily="heading"
        fontWeight="normal"
        fontSize={["4xl", "5xl"]}
        lineHeight={1.1}
        textAlign={["center", "center", "center", "left"]}
      >
        Hola 👋🏼, Bienvenidos
      </Text>{" "}
      <Text
        as="h2"
        fontFamily="heading"
        fontSize={["4xl", "5xl"]}
        fontWeight="black"
        lineHeight={1.1}
        textAlign={["center", "center", "center", "left"]}
      >
        Al mundo del Origami y Kirigami
      </Text>
      <Text
        as="h3"
        fontFamily="heading"
        fontWeight="normal"
        fontSize={["sm", "md"]}
        textAlign={["center", "center", "center", "left"]}
        my={4}
      >

        El origen del <strong>Origami</strong>, comúnmente pensado, suscitado en Japón, es una falacia ad populum, en realidad, se remonta a la creación del papel mismo (el cual es una invención china) alrededor del siglo I o II d. C. El papel no llegó a Japón hasta el siglo sexto, siendo allí cuando se integró a la cultura japonesa.

      </Text>
      <Link href="/historia-origami">
        <a><ButtonCTA>¡Conocer mas!</ButtonCTA></a>
      </Link>
    </Fragment>
  );
};
