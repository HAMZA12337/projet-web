const{ faker } =require ('@faker-js/faker');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

 
//----------------------facker users 

const fakerUser = ()=> ({
   email: faker.internet.email(),
   nom: faker.name.firstName() + faker.name.lastName(),
   password: faker.internet.password(),
  });

  //----------------------faker admin user
  const fakerUser_ad = ()=> ({
    email: faker.internet.email(),
    nom: faker.name.firstName() + faker.name.lastName(),
    password: faker.internet.password(),
    role:"ADMIN"
   });

/// facker categories

const fakerCategories= ()=> ({
  label: faker.lorem.sentence(),
 
 });
 

// //---------- faker articles

const fakerarticles= ()=> ({
   published:Boolean(Math.round(Math.random())),
    titre: faker.random.words(),
    authorId: parseInt(faker.random.numeric(1, 4)),
    categorieId:parseInt(faker.random.numeric(1, 10)),
    contenu:faker.lorem.text()
 });
 
//-------- FAKER COMMENTS 





 async  function apply() {
try{
  const deleteUsers = await prisma.Categorie.deleteMany({})
  
  const deleteCategories= await prisma.Utilisateur .deleteMany({});
  
  const deleteArticles = await prisma.Article.deleteMany({})
  const deleteComments = await prisma.Commentaire.deleteMany({})
}catch(e){
  console.log(e)
}




//   //------------------------ numbers====================
  const fakerRounds_user = 10;
  const fakerRounds_comments=10;
  const fakerRounds_articles=100;
  const fakerRounds_Comments=20 ;
  

  console.log('Seeding...');
  /// --------- 10 Users Author ---------------
  for (let i = 0; i < fakerRounds_user; i++) {
  await prisma.Utilisateur.create({ data: fakerUser() });
  }
  //------------1 USER ADMIN-------------
  await prisma.Utilisateur.create({ data: fakerUser_ad() });
//-------------- Categories-----------------------
  for (let i = 0; i < fakerRounds_comments; i++) {
    await prisma.Categorie.create({ data: fakerCategories() });
    }
//--------------Articles--------------
// for (let i = 0; i < fakerRounds_articles; i++) {
//     await prisma.Article.create({ data: fakerarticles() });
//     }


// //--------------- Comments
// const fakerComments='';

// for (let i = 0; i < fakerRounds_articles; i++) {
//    fakerComments= ({
//     contenu: faker.name.title(),
//     authorId:faker.random.number(1, 10) ,
//     articleId:i
 
//  });
//   for (let j = 0; j < fakerRounds_Comments; i++) {
  
//   await prisma.Commentaire.create({ data: fakerarticles() });
//   }


// }


};

// yeah so let's go to apply our function
apply()
// Export it to make it available outside

