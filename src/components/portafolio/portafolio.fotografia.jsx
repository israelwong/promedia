import * as React from "react";
import { Tabs, Tab } from "@nextui-org/react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import fotosCorporativas from "./galerias/fotos.corporativas";
import fotosGastronomicas from "./galerias/fotos.gastronomicas";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function Fotografia() {
  const [index, setIndex] = React.useState(-1);

  const categorias = [
    {
      label: "Corporativas",
      photos: fotosCorporativas,
    },
    {
      label: "Gastronómicas",
      photos: fotosGastronomicas,
    },
    // {
    //   label: "Retratos",
    //   photos: fotosRetratos,
    // },
  ];

  return (
    <>
      <div className="">
        <Tabs aria-label="Options" variant="underlined" radius="full">
          {categorias.map((categoria) => (
            <Tab key={categoria.label} title={categoria.label}>
              {/* <h3 className="py-5">{categoria.label}</h3> */}
              <div>
                <PhotoAlbum
                  index={1}
                  photos={categoria.photos}
                  layout="rows"
                  targetRowHeight={150}
                  onClick={({ index }) => setIndex(index)}
                />
                <Lightbox
                  slides={categoria.photos}
                  open={index >= 0}
                  index={index}
                  close={() => setIndex(-1)}
                  plugins={[Zoom]}
                />
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </>
  );
}

export default Fotografia;
