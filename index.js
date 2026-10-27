import "dotenv/config";
import express, { json } from 'express';
import pg from "pg";
import Joi from "joi";

const app = express()
const port = process.env.PORT
const { Pool } = pg

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Middleware Logging
app.user((req, res, next) =>{
    const start = Date.now() - start
    console.log({
        method: req.method,
        url: req.originalUrl,
        statusCode: req.StatusCode,
        duration: "${duration} ms"
    })
})

// Response Envelope
function successResponse(res, message, data, status = 200){
    return res.status(status).json({
        success: true, message, data, error: null,
    })
}
