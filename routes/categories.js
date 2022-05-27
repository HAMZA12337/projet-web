var express = require("express");
const bcrypt = require("bcrypt");
var router = express.Router();

const { PrismaClient } = require("@prisma/client");
const res = require("express/lib/response");
const prisma = new PrismaClient();

/* GET all Categories */

router.get('/',async (req,res)=>{

  var {skip,take}=req.query
  
  skip=skip || 0
  take =take || 6
   const categorie = await prisma.Categorie.findMany();
  
  const temp=[...categorie];
  
  res.send(temp.splice(skip,take))
  
  
  })
  

/* GET Ceategorie  by id . */

router.get("/:id", async function (req, res) {
  const user = await prisma.Categorie.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  })
  const resultat = user ? user : "Categorie  NOT FOUND";

  res.json(resultat);
});


/* Delete a Categorie by id . */

router.delete("/:id", async function (req, res) {

  try {
    const deleteUser = await prisma.Categorie.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
  } catch (e) {

    res.json(e);
  }
});

// update ou mettre a jour notre categorie

router.post("/", async function (req, res) {

try{
 const addCategorie = await prisma.Categorie.create({
      data:req.body
    });
      res.send(addCategorie );
  
  }catch(e){
    res.send(e);
  }


});


//update a categorie

router.patch("/", async function (req, res, next) {
try{
  const updateCategorie = await prisma.Categorie.update({
    where: {
      id: req.body.id

    },
    data:req.body
  })
}catch(e){
  res.send(e)
}

  
})










module.exports = router;
