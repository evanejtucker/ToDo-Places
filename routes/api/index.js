const router = require("express").Router();
const mapRoutes = require("./mapRoutes");

router.use("/map", mapRoutes);

module.exports = router;
