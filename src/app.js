//const express = require('express')
import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import path from 'path'
import router from './router'
import dotenv from 'dotenv'

dotenv.config()
class App {
    constructor() {
        this .server = express()
        mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        this.middlewares()
        this.router()
    }

    middlewares(){
        this.server.use(cors())
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads'))
        )
        this.server.use(express.json())
    }

    router(){
        this.server.use(router)
    }
}

export default new App().server