const express = require("express");
var router = express.Router();

/* GET comments of our users */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* GET categories of our products . */
router.get("/", async function (req, res, next) {
  const articles = await prisma.Commentaire.findMany();

  res.json(articles);
});
module.exports = router;
