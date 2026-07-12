const express = require('express');
const db = require('./database/db');
const categoriesRouter = require('./routes/categories');
const sizesRouter = require('./routes/sizes');
const productsRouter = require('./routes/products');
const variantsRouter = require('./routes/variants');
const stockEntriesRouter = require('./routes/stockEntries')

const app = express();
const port = 3000;

app.use(express.json());
app.use('/sizes', sizesRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/variants', variantsRouter);
app.use('/stock-entries', stockEntriesRouter)

app.get('/', (req, res) => {
    res.json({ message: 'Klliao server running' });
});

app.listen(port, () => {
    console.log(`Klliao server running at http://localhost:${port}`);
});