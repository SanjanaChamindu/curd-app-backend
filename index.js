const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json());

app.use('/api/products', require('./routes/product.route'))


mongoose.connect("mongodb+srv://chamindusanjanakyc:1Y7q0vngUwDjNJs0@cluster0.gbok5hj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000')
    });
    
})
.catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});

