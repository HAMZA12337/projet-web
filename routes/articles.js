var express = require("express");
const bcrypt = require("bcrypt");
var router = express.Router();

const { PrismaClient } = require("@prisma/client");
const res = require("express/lib/response");
const prisma = new PrismaClient();

/* GET all articles */

router.get('/',async (req,res)=>{

  var {skip,take}=req.query
  
  skip=skip || 0
  take =take || 6
   const article = await prisma.Article.findMany();
  
  const temp=[...article];
  
  res.send(temp.splice(skip,take))
  
  
  })
  

/* GET article  by id . */

router.get("/:id", async function (req, res) {
  const article = await prisma.Article.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  })
  const resultat = article ? article : "Article NOT FOUND";

  res.json(resultat);
});


/* Delete article by id . */

router.delete("/:id", async function (req, res) {

  try {
    const deleteArticle = await prisma.Article.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
  } catch (e) {

    res.json(e);
  }
});

// update ou mettre a jour notre utilsateur

router.post("/", async function (req, res) {




   

    const addArticle = await prisma.Article.create({
      data: req.body
    });
  
res.send(addArticle)


});





router.patch("/", async function (req, res, next) {

  const updatearticle = await prisma.Article.update({
    where: {
      id: req.body.id

    },
    data:req.body
  })
  res.send(updatearticle)
})








module.exports = router;
