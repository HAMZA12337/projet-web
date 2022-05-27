var express = require("express");
var router = express.Router();

const { PrismaClient } = require("@prisma/client");
const res = require("express/lib/response");
const prisma = new PrismaClient();

/* GET categories of our products . */
router.get("/", async function (req, res, next) {
  const articles = await prisma.Categorie.findMany();

  res.json(articles);
});

router.get("/:id", async function (req, res, next) {
  const articles = await prisma.Categorie.findMany();

  res.json(articles);
});

module.exports = router;
