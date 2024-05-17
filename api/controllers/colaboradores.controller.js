import { pool } from "../db.js";

export const getColaboradorAuth = async (req, res) => {
  const { user, password } = req.body;
  console.log(user, password);
  try {
    const [rows] = await pool.query(
      "select id_colaborador, nombre, fk_rol from tb_colaboradores where correo=? and telefono = ? and estatus=1",
      [user, password]
    );

    const { fk_rol } = rows[0];
    const id_colaborador = rows[0].id_colaborador;
    const nombre = rows[0].nombre;

    if (rows.length <= 0) {
      res.json({
        estatus: 404,
      });
    } else {
      const [rows] = await pool.query(
        "select rol from tb_roles where id_rol=?",
        fk_rol
      );
      const rol = rows[0].rol;

      res.json({
        estatus: 200,
        id_colaborador,
        nombre,
        rol,
      });
    }
  } catch (error) {
    res.json({
      estatus: 500,
      error: error.message,
    });
  }
};

export const getColaboradores = async (req, res) => {
  try {
    // throw new Error('error')
    const [alumnos] = await pool.query("select * from tb_colaboradores");
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
