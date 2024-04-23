import * as fs from "node:fs";
import path from "node:path";
import sizeOfImage from "image-size";

export const getGaleria = async (req, res) => {
  const ruta = "./public/images/galeria/";
  const nombre_galeria = req.body.galeria;
  const EXTENSION = ".jpg";

  try {
    const folder = fs.readdirSync(`${ruta}${nombre_galeria}`);
    const archivos = folder.filter(
      (file) => path.extname(file).toLowerCase() == EXTENSION
    );

    const galeria = archivos.map((foto) => {
      const size = sizeOfImage(`${ruta}${nombre_galeria}/${foto}`);
      return {
        src: `/images/galeria/${nombre_galeria}/${foto}`,
        width: size.width,
        height: size.height,
      };
    });

    res.json(galeria);
  } catch (err) {
    console.error(err);
  }
};
