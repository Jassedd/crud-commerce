import express from "express";
import cors from 'cors';
import database from './database/database.js';

import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js'; 
import router from "./routes/commentRoutes.js";


export const app = express()
app.get('/', (_req, res) =>{
 res.send('Está vivaa')
})


app.use(cors())
app.use(express.json())

app.use('/users', userRoutes); // Rutas de usuarios
app.use('/products', productRoutes); // Rutas de productos
app.use('/categories', categoryRoutes); // Rutas de categorías
app.use('/comments', router); // Rutas de comentarios

try{
	await database.authenticate()
		console.log('conected to database')
	}catch{
		console.log(`error:' ${error}`)
	}

export const server = app.listen(9000,() =>{
console.log('server up in http://localhost:9000/')
})