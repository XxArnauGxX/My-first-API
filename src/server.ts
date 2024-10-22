import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

await import(pathToFileURL(path.join(__dirname, 'loadEnvironment.js')).href);
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/info', (req, res) => {
  const response = {
    classMembers: ["Alice", "Bob", "Charlie"],
    totalStudents: 3,
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
