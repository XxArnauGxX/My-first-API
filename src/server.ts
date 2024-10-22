import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import express from 'express';
import configViewEngine from './web/config/configViewEngine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await import(pathToFileURL(path.join(__dirname, 'loadEnvironment.js')).href);

const app = express();
const port = process.env.PORT || 3000;

// Configurar el motor de vistas
configViewEngine(app);

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la API. Visita /api/info para obtener información.');
});

app.get('/api/info', (req, res) => {
  const response = {
    classMembers: [
      "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack",
      "Kathy", "Leo", "Mona", "Nina", "Oscar", "Paul", "Quincy", "Rachel", "Steve", "Tina",
      "Uma", "Victor", "Wendy", "Xander", "Yara", "Zane", "Aaron", "Bella", "Cody", "Diana",
      "Ethan", "Fiona", "George", "Holly", "Ian", "Jill", "Kyle", "Luna", "Mason", "Nora",
      "Owen", "Piper", "Quinn", "Riley", "Sam", "Tara", "Ulysses", "Violet", "Will", "Xena",
      "Yvonne", "Zach", "Amber", "Blake", "Carmen", "Derek", "Elena", "Felix", "Gina", "Harry",
      "Isla", "Jake", "Kara", "Liam", "Mia", "Noah", "Olivia", "Pete", "Quentin", "Rose",
      "Sophie", "Tom", "Ursula", "Vince", "Wade", "Ximena", "Yosef", "Zara"
    ],
    totalStudents: 80,
    resources: [
      { name: "Hosting", url: "RenderURL", icon: "IconURL" },
      { name: "Testing framework", url: "JestURL", icon: "IconURL" },
      { name: "HTTP tests", url: "SupertestURL", icon: "IconURL" }
    ]
  };
  res.json(response);
});

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export { app, server };
