import * as React from "react";
import { useState, useEffect } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import fotosCorporativas from "./galerias/fotos.corporativas";
// import fotosGastronomicas from "./galerias/fotos.gastronomicas";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import axios from "axios";

function Fotografia() {
  const [index, setIndex] = React.useState(-1);
  const [json, setJson] = useState();

  useEffect(() => {
    getFotos("Corporativo");
  }, []);

  async function getFotos(folder) {
    const { data } = await axios({
      method: "post",
      url: "http://localhost:3306/api/galeria/",
      data: {
        galeria: folder,
      },
    });
    setJson(data);
  }

  function handleTab(carpeta) {
    getFotos(carpeta);
  }

  const categorias = [
    {
      label: "Corporativas",
      carpeta: "Corporativo",
    },
    {
      label: "Gastronómicas",
      carpeta: "Gastronomica",
    },
    // {
    //   label: "Retratos",
    //   photos: fotosRetratos,
    // },
  ];

  return (
    <>
      <div className="">
        <Tabs
          aria-label="Options"
          variant="underlined"
          radius="full"
          className="mb-5"
        >
          {categorias.map((categoria) => (
            <Tab
              key={categoria.label}
              title={categoria.label}
              onFocus={() => handleTab(categoria.carpeta)}
            ></Tab>
          ))}
        </Tabs>
        <PhotoAlbum
          index={1}
          photos={json}
          layout="rows"
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
          plugins={[Zoom]}
          loading="lazy"
        />
        <Lightbox
          slides={json}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // plugins={[Zoom]}
        />
      </div>
    </>
  );
}

export default Fotografia;
