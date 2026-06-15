const express = require('express');
const cors = require('cors');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(serviceRoutes);

app.get('/', (req, res) => {
  res.json({ success: true, message: 'OneCreativity Platform Backend is running' });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
