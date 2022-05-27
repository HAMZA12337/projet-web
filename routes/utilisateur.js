var express = require("express");
var router = express.Router();

const { PrismaClient } = require("@prisma/client");
const res = require("express/lib/response");
const prisma = new PrismaClient();

/* GET all user */
router.get("/", async function (req, res, next) {
  const users = await prisma.Utilisateur.findMany();

  res.json(users);
});

/* GET users by id . */

router.get("/:id", async function (req, res, next) {
  const user = await prisma.Utilisateur.findUnique({
    where: {
      id:parseInt(req.params.id),
    },
  })
  const resultat=user ? user:"USER NOT FOUND"  ;

  res.json(resultat);
});


/* Delete a user by id . */

router.delete("/:id", async function (req, res, next) {
  
  try {
  const deleteUser = await prisma.Utilisateur.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
 }catch(e){

 res.json(e);
 }
});

// 












module.exports = router;
