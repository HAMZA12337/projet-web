var express = require("express");
const bcrypt = require("bcrypt");
var router = express.Router();

const { PrismaClient } = require("@prisma/client");
const res = require("express/lib/response");
const prisma = new PrismaClient();

/* GET all user */

router.get('/',async (req,res)=>{

  var {skip,take}=req.query
  
  skip=skip || 4
  take =take || 6
   const users = await prisma.Utilisateur.findMany();
  
  const temp=[...users];
  
  res.send(temp.splice(skip,take))
  
  
  })
  

/* GET users by id . */

router.get("/:id", async function (req, res) {
  const user = await prisma.Utilisateur.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  })
  const resultat = user ? user : "USER NOT FOUND";

  res.json(resultat);
});


/* Delete a user by id . */

router.delete("/:id", async function (req, res) {

  try {
    const deleteUser = await prisma.Utilisateur.delete({
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



  try {

    // now we set user password to hashed password
    const password = await HashFunct(req.body.password);


    const addUser = await prisma.Utilisateur.create({
      data: {
        email: req.body.email,
        nom: req.body.nom,
        password: password
      },
    });
  } catch (e) {

    res.send({ "prob": e });
  }



});



// j'ai encore le temps je via simplementer cette methode 

// router.post("/login", async function (req, res) => {

// //   const body = req.body;
// //   const user = await User.findOne({ email: body.email });
// //   if (user) {
// //     // check user password with hashed password stored in the database
// //     const validPassword = await bcrypt.compare(body.password, user.password);
// //     if (validPassword) {
// //       res.status(200).json({ message: "Valid password" });
// //     } else {
// //       res.status(400).json({ error: "Invalid Password" });
// //     }
// //   } else {
// //     res.status(401).json({ error: "User does not exist" });
// //   }
// // });


// update a user

router.patch("/", async function (req, res, next) {

  const updateUser = await prisma.Utilisateur.update({
    where: {
      id: req.body.id

    },
    data: {
      nom: req.body.nom,
      password: await HashFunct(req.body.password)
    }
  })
  res.send(updateUser)
})

// get limit list of users 








async function HashFunct(password) {
  const salt = await bcrypt.genSalt(10);

  const pass = await bcrypt.hash(password, salt);

  return pass;
}
module.exports = router;
