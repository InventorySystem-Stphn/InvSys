const express = require("express")
const app = express()
const mongoose = require("mongoose")
const mongoDbConnectionString = require("./config/config")
const userRoutes = require("./routes/userRoutes")
const brandRoutes = require("./routes/brandRoutes")
const groupRoutes = require("./routes/groupRoutes")
const categoryRoutes = require("./routes/categoryRoutes");
const attributeRoutes = require("./routes/attributeRoutes")
const attributeValueRoutes = require("./routes/attributeValueRoutes")
const productRoutes = require("./routes/productRoutes")
const orderRoutes = require("./routes/orderRoutes")
const companyRoutes = require("./routes/companyRoutes")
const profileRoutes = require("./routes/profileRoutes")

mongoDbConnectionString.mongoConnect();

app.use(express.json()) 

app.use("/user", userRoutes);
app.use("/brand", brandRoutes);
app.use("/group", groupRoutes);
app.use("/category", categoryRoutes)
app.use("/attribute", attributeRoutes)
app.use("/attributevalue",attributeValueRoutes)
app.use("/product",productRoutes)
app.use("/order",orderRoutes)
app.use("/company",companyRoutes)
app.use("/profile",profileRoutes)

app.listen(5000, () => {
	console.log("Server has started!")
})