
import express, { json } from 'express';
const app = express();
app.use(json());

// 🔹 Arrays simulando tus tablas SQL
let modelos = [
  { id: 1, nombre: "Modelo Básico", descripcion: "Maniquí estándar" },
  { id: 2, nombre: "Modelo Premium", descripcion: "Maniquí articulado" }
];

let piezas = [
  { id: 1, tipo: "Cabeza", numero_serie: "P001", color: "Beige", material: "Plástico", fecha_fabricacion: "2026-05-01", costo: 50.00 },
  { id: 2, tipo: "Torso", numero_serie: "P002", color: "Beige", material: "Plástico", fecha_fabricacion: "2026-05-01", costo: 100.00 }
];

let maniquies = [
  { id: 1, numero_serie: "M001", modelo_id: 1, fecha_fabricacion: "2026-05-02", costo_total: 290.00, observaciones: "Primera unidad" }
];

let ensamblajes = [
  { id: 1, maniqui_id: 1, pieza_id: 1 },
  { id: 2, maniqui_id: 1, pieza_id: 2 }
];

// 🔹 Endpoints CRUD para cada "tabla"

// --- MODELOS ---
app.get('/modelos', (req, res) => res.json(modelos));
app.post('/modelos', (req, res) => {
  const nuevo = { id: modelos.length + 1, ...req.body };
  modelos.push(nuevo);
  res.status(201).json(nuevo);
});

// --- PIEZAS ---
app.get('/piezas', (req, res) => res.json(piezas));
app.post('/piezas', (req, res) => {
  const nueva = { id: piezas.length + 1, ...req.body };
  piezas.push(nueva);
  res.status(201).json(nueva);
});

// --- MANIQUIES TERMINADOS ---
app.get('/maniquies', (req, res) => res.json(maniquies));
app.post('/maniquies', (req, res) => {
  const nuevo = { id: maniquies.length + 1, ...req.body };
  maniquies.push(nuevo);
  res.status(201).json(nuevo);
});

// --- ENSAMBLAJE ---
app.get('/ensamblajes', (req, res) => res.json(ensamblajes));
app.post('/ensamblajes', (req, res) => {
  const nuevo = { id: ensamblajes.length + 1, ...req.body };
  ensamblajes.push(nuevo);
  res.status(201).json(nuevo);
});

// 🔹 Arrancar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
