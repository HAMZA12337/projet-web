var express = require("express");
var router = express.Router();

/* GET our articles */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/* GET categories of our products . */
router.get("/", async function (req, res, next) {
  const articles = await prisma.Article.findMany();

  res.json(articles);
});

// router.get("/:id", function (req, res, next) {
//   const user = users.find((u) => u.id === req.params.id);
//   const r = user ? user : "not found";
//   res.send(req.params);
// });
// module.exports = router;
