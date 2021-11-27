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
        El <strong>Origami</strong>, se pensaba que es originario de Japón, pero en los registros de este arte en realidad, no se originó en Japón sino en China a finales del siglo primero y no fue sino hasta el siglo sexto que llegó a Japón llevado ahí por los monjes, y se lo definió <strong> como el arte de doblar hojas de papel</strong> sin tener la intervención de una tijera en el momento de plegar.

      </Text>
      <Link href="/historia-origami">
        <a><ButtonCTA>¡Conocer mas!</ButtonCTA></a>
      </Link>
    </Fragment>
  );
};
