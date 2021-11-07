import NextLink from "next/link";

import { Card } from "./_Card";
import { Text, Link } from "../elements";

export const AboutCardHome = () => {
  return (
    <Card type="home" headerTitle="About">
      <Text py="2">
        ¡Hola! Somos estudiantes de la Escuela Superior Politecnica de Chimborazo.
      </Text>
      <Text py="2">
        Estamos curzando la materia de nombre Interacción Hombre Maquina.
      </Text>
      <Text py="2">
        La presente es un Proyecto orientado al conocimiento del Origami, nos centraremos en conocer su historia, impacto en el mundo y la importancia de trasmitir este conocimiento, por la cual desarrollaremos un museo virtual del Origami
      </Text>
      {/* /p/sobre-mi */}
      <NextLink href="/">
        <Link py={4} color="brand.900">
          Más sobre nosotros →
        </Link>
      </NextLink>
    </Card>
  );
};
