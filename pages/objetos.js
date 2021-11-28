import NextLink from "next/link";

import { Layout, ObjetoListItem } from "@/components";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Courses({ objetos }) {
    const metadata = {
        title: "Objetos 3D del Museo Virtual de Origami Y Kirigami",
    };

    return (
        <Layout type="post" metadata={metadata}>
            {objetos.map((objeto) => (
                <NextLink href={`/objetos/${objeto.slug}`} key={objeto.slug}>
                    <a>
                        <ObjetoListItem title={objeto.title} />
                    </a>
                </NextLink>
            ))}
        </Layout>
    );
}

export async function getStaticProps() {
    const objetos = await getAllFilesFrontMatter("objetos");

    return {
        props: { objetos },
    };
}