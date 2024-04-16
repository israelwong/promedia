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

export const createColaborador = async (req, res) => {
  const {
    fk_producto,
    fk_agente,
    fk_lead,
    nombre,
    telefono_1,
    correo,
    curp,
    fk_plan_pago,
    precio_certificado,
    monto_inscripcion,
    num_pagos,
    fk_progreso,
    estatus,
  } = req.body;

  try {
    const [rows] = await pool.query(
      "insert into tb_alumno (fk_producto,fk_agente,fk_lead,nombre,telefono_1,correo,curp,fk_plan_pago,precio_certificado,monto_inscripcion,num_pagos,fk_progreso,estatus) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        fk_producto,
        fk_agente,
        fk_lead,
        nombre,
        telefono_1,
        correo,
        curp,
        fk_plan_pago,
        precio_certificado,
        monto_inscripcion,
        num_pagos,
        fk_progreso,
        estatus,
      ]
    );

    res.send({ insertId: rows.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getColaborador = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await pool.query(
      "select * from tb_colaboradoe where id_colaborador=?",
      [id]
    );
    // const [estatusDocumentacion] = await pool.query('select * from tb_estatus_documentacion')

    if (rows.length <= 0)
      return res.status(404).json({
        message: "No se encontró el alumno",
      });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAlumno = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query("delete from tb_alumno where id_alumno=?", [
      id,
    ]);
    if (rows.affectedRows <= 0)
      return res.status(404).json({
        message: "No se encontró el alumno",
      });
    res.json({ message: "Alumno eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// documentacion
// 0 No requerido; 1 Requerido; 2 Pendiente de validacion; 3 Rechazada; 4 Validada

export const patchAlumno = async (req, res) => {
  const { id } = req.params;
  const {
    fk_institucion,
    fk_producto,
    fk_agente,
    fk_lead,
    nombre,
    telefono_principal,
    telefono_emergencias,
    correo,
    curp,
    fk_plan_pago,
    precio_producto,
    monto_inscripcion,
    num_pagos,
    fecha_registro,
    fk_progreso,
    calificacion,
    domicilio,
    doc_comprobante_domicilio,
    doc_ine,
    doc_acta,
    doc_certificado_secundaria,
    doc_titulo_bach,
    doc_titulo_universitario,
    doc_curp,
    doc_foto,
    fecha_termino,
    estatus,
  } = req.body;

  try {
    const [results] = await pool.query(
      `
        UPDATE tb_alumno SET 
            fk_institucion IFNULL(?, fk_institucion),
            fk_producto = IFNULL(?, fk_producto),
            fk_agente = IFNULL(?, fk_agente),
            fk_lead = IFNULL(?, fk_lead),
            nombre = IFNULL(?, nombre),
            telefono_principal = IFNULL(?, telefono_principal),
            telefono_emergenvias = IFNULL(?, telefono_emergenvias),
            correo  = IFNULL(?, correo),
            curp = IFNULL(?, curp),
            fk_plan_pago = IFNULL(?, fk_plan_pago),
            precio_producto = IFNULL(?, precio_producto),
            monto_inscripcion = IFNULL(?, monto_inscripcion),
            num_pagos = IFNULL(?, num_pagos),
            fecha_registro = IFNULL(?, fecha_registro),
            fk_progreso = IFNULL(?, fk_progreso),
            calificacion =IFNULL(?, calificacion),
            domicilio =IFNULL(?, domicilio),
            doc_comprobante_domicilio=IFNULL(?, doc_comprobante_domicilio),
            doc_ine =IFNULL(?, doc_ine),
            doc_acta =IFNULL(?, doc_acta),
            doc_certificado_secundaria = IFNULL(?, doc_certificado_secundaria),
            doc_titulo_bach = IFNULL(?, doc_titulo_bach),
            doc_titulo_universitario = IFNULL(?, doc_titulo_universitario),
            doc_curp = IFNULL(?, doc_curp),
            doc_foto = IFNULL(?, doc_foto),
            fecha_termino = IFNULL(?, fecha_termino),
            estatus =IFNULL(?, estatus),
        WHERE 
            id_alumno=?`,
      [
        fk_institucion,
        fk_producto,
        fk_agente,
        fk_lead,
        nombre,
        telefono_principal,
        telefono_emergencias,
        correo,
        curp,
        fk_plan_pago,
        precio_producto,
        monto_inscripcion,
        num_pagos,
        fecha_registro,
        fk_progreso,
        calificacion,
        domicilio,
        doc_comprobante_domicilio,
        doc_ine,
        doc_acta,
        doc_certificado_secundaria,
        doc_titulo_bach,
        doc_titulo_universitario,
        doc_curp,
        doc_foto,
        fecha_termino,
        estatus,
        id,
      ]
    );

    if (results.affectedRows <= 0) {
      return res.status(404).json({
        message: "No se encontró el alumno",
      });
    }

    res.json({ affectedRows: results.affectedRows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAlumnoProducto = async (req, res) => {
  const { id } = req.params;

  try {
    //!Obtener datos del alumno
    const [rs_alumno] = await pool.query(
      "select * from tb_alumno where id_alumno = ?",
      [id]
    );
    const {
      id_alumno,
      fk_institucion,
      fk_producto,
      fk_agente,
      fk_lead,
      nombre,
      telefono_principal,
      telefono_emergencias,
      correo,
      curp,
      fk_plan_pago,
      precio_producto,
      monto_inscripcion,
      num_pagos,
      fecha_registro,
      fk_progreso,
      calificacion,
      domicilio,
      doc_comprobante_domicilio,
      doc_ine,
      doc_acta,
      doc_certificado_secundaria,
      doc_titulo_bach,
      doc_titulo_universitario,
      doc_curp,
      doc_foto,
      fecha_termino,
      estatus,
    } = rs_alumno[0];

    //!obtener datos del producto
    const [rs_producto] = await pool.query(
      "select * from tb_producto where id_producto = ?",
      [fk_producto]
    );
    const { producto } = rs_producto[0];

    const [rs_plan_pago] = await pool.query(
      "select * from tb_plan_pago where id_plan_pago = ?",
      [fk_plan_pago]
    );
    const { id_plan_pago, plan_pago } = rs_plan_pago[0];

    const [rs_progreso] = await pool.query(
      "select * from tb_progreso where id_progreso = ?",
      [fk_progreso]
    );
    const { id_progreso, progreso } = rs_progreso[0];

    const [pagos] = await pool.query(
      "select * from tb_pagos where fk_alumno = ?",
      [id]
    );

    const response = {
      id_alumno,
      fk_institucion,
      fk_producto,
      fk_agente,
      fk_lead,
      nombre,
      telefono_principal,
      telefono_emergencias,
      correo,
      curp,
      fk_plan_pago,
      precio_producto,
      monto_inscripcion,
      num_pagos,
      fecha_registro,
      fk_progreso,
      calificacion,
      domicilio,
      doc_comprobante_domicilio,
      doc_ine,
      doc_acta,
      doc_certificado_secundaria,
      doc_titulo_bach,
      doc_titulo_universitario,
      doc_curp,
      doc_foto,
      fecha_termino,
      estatus,

      producto,
      id_plan_pago,
      plan_pago,
      id_progreso,
      progreso,
      pagos,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
