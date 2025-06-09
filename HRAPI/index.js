const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    res.json('WELCOME TO HR API');
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

//addresses table
app.get('/addresses', async (req, res) => {
  try {
    const result = await pool.query('select * from addresses');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});


//customers table
app.get('/customers', async (req, res) => {
  try {
    const result = await pool.query('select * from customers');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});


//deliveries table
app.get('/deliveries', async (req, res) => {
  try {
    const result = await pool.query('select * from deliveries');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});



//delivery_agents table
app.get('/delivery_agents', async (req, res) => {
  try {
    const result = await pool.query('select * from delivery_agents');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

//food_categories table
app.get('/food_categories', async (req, res) => {
  try {
    const result = await pool.query('select * from food_categories');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});


//menu_items table
app.get('/menu_items', async (req, res) => {
  try {
    const result = await pool.query('select * from menu_items');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});


//order_items table
app.get('/order_items', async (req, res) => {
  try {
    const result = await pool.query('select * from order_items');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

//orders table
app.get('/orders', async (req, res) => {
  try {
    const result = await pool.query('select * from orders');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});


//payments table
app.get('/payments', async (req, res) => {
  try {
    const result = await pool.query('select * from payments');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

//restaurant_categories table
app.get('/restaurant_categories', async (req, res) => {
  try {
    const result = await pool.query('select * from restaurant_categories');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});


//restaurants table
app.get('/restaurants', async (req, res) => {
  try {
    const result = await pool.query('select * from restaurants');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

//reviews table
app.get('/reviews', async (req, res) => {
  try {
    const result = await pool.query('select * from reviews');
    res.json(result.rows);
  }
  catch (err) {
    res.status(500).json({ Error: err.message });
  }
});




const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Connect Successfully.....on Port ${PORT}`);
});