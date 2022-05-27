var express = require("express");
var router = express.Router();

const { PrismaClient } = require("@prisma/client");
const res = require("express/lib/response");
const prisma = new PrismaClient();

/* GET all comments */

router.get('/',async (req,res)=>{

  var {skip,take}=req.query
  
  skip=skip || 0
  take =take || 6
   const Commentaire = await prisma.Commentaire.findMany();
  
  const temp=[...Commentaire];
  
  res.send(temp.splice(skip,take))
  
  
  })
  

/* GET Commentaire  by id . */

router.get("/:id", async function (req, res) {
  const Commentaire = await prisma.Commentaire.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  })
  const resultat = Commentaire ? Commentaire : "Commentaire NOT FOUND";

  res.json(resultat);
});


/* Delete Commentaire by id . */

router.delete("/:id", async function (req, res) {

  try {
    const deleteCommentaire = await prisma.Commentaire.delete({
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

    const addCommentaire = await prisma.Commentaire.create({
      data: req.body
    });
  
res.send(addCommentaire)


});





router.patch("/", async function (req, res, next) {

  const updateCommentaire = await prisma.Commentaire.update({
    where: {
      id: req.body.id

    },
    data:req.body
  })
  res.send(updateCommentaire)
})








module.exports = router;
