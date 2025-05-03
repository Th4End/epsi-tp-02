const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products');

// Charger les variables d'environnement
dotenv.config();

// Initialiser l'application Express
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Configuration CORS personnalisée
const corsOptions = {
  origin: 'http://localhost:4200',  // Remplace cette URL par celle de ton front-end
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Méthodes autorisées
  allowedHeaders: ['Content-Type', 'Authorization'],  // En-têtes autorisés
};

// Routes
app.use('/api/products', productRoutes);

// Route de base
app.get('/', (req, res) => {
  res.send('API TP02 - Gestion de produits avec OpenAI');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
