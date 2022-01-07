import express from "express"
// import mongoose from "mongoose"
// import cors from "cors"
// import dotenv from "dotenv"
// import res from "express/lib/response"

const server = express()
const Port = process.env.SERVER_PORT || 4000
server.listen(Port, () => console.log("Server is running"))

// dotenv.config()

// const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
// mongoose.connect(connectionString)

// server.use(express.json())
// server.use(cors())

server.get("/api", (req, res) => {
    res.json({ message: " Hi, express here" })
})
