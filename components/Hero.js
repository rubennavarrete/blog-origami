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
        El origen del <strong>Origami</strong>, Pensamos que es originario de {" "}
        <strong>Japón</strong>, y algunos lo definen como el arte japonés que se forma doblando hojas de papel.
        <br />
        <br />
        En realidad, no se originó en <strong>Japón</strong> sino en <strong>China</strong> alrededor del siglo primero o segundo y no fue sino hasta el siglo sexto que llegó a <strong>Japón</strong> llevado ahí por los monjes.
      </Text>
      {/* /cursos/programacion-javascript */}
      <Link href="/">
        <a><ButtonCTA>¡Conocer mas!</ButtonCTA></a>
      </Link>
      {/* <Box mx={"auto"}>
        <Image
          layout="fixed"
          width={400}
          height={150}
          src="/assets/company-logos.png"
          alt="Google, IBM, Eventbrite. Chefly"
        />
      </Box> */}
    </Fragment>
  );
};
