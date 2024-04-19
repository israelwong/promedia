import { pool } from "../db.js";

export const getColaboradorAuth = async (req, res) => {
  const { user, password } = req.body;
  try {
    const [rows] = await pool.query(
      "select id_colaborador, nombre, rol from tb_colaboradores where correo=? and telefono = ?",
      [user, password]
    );
    if (rows.length <= 0) {
      res.json({
        estatus: 404,
      });
    } else {
      res.json({
        estatus: 200,
        id_colaborador: rows[0].id_colaborador,
        nombre: rows[0].nombre,
        rol: rows[0].rol,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
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
