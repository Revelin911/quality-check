import express from 'express';
import path from 'path';
import db from './config/connection.js';
import routes from './routes/index.js';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static files in the entire client's dist folder
app.use(express.static(path.join(__dirname, '../client')));

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
