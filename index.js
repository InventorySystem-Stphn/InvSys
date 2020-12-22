const express = require("express")
const app = express()
const mongoose = require("mongoose")
const mongoDbConnectionString = require("./config/config")
const userRoutes = require("./routes/userRoutes")
const brandRoutes = require("./routes/brandRoutes")

mongoDbConnectionString.mongoConnect();

app.use(express.json()) 

app.use("/user", userRoutes)
app.use("/brand", brandRoutes)

app.listen(5000, () => {
	console.log("Server has started!")
})