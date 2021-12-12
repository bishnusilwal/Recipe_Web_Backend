 const express = require("express");
 const app = express();
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 require("./database/database");
 const userRoute = require("./router/userRoute");
 app.use(userRoute);

 const recipeRoute = require("./router/recipeRoute");
 app.use(recipeRoute);

 const directionRoute = require("./router/directionRoute");
 app.use(directionRoute);
 
 const ratingRoute = require("./router/ratingRoute");
 app.use(ratingRoute);


 const ingredientRoute = require("./router/ingredientRoute");
 app.use(ingredientRoute);

 const reviewRoute = require("./router/reviewRoute");
 app.use(reviewRoute);





// const mongoose = require("mongoose");

// const app = express();

// app.use(express.json());

// app.use(express.urlencoded({extended:true}));

// require("./database/db");
// const userRoute = require("./router/recipeRoute");
// // app.use(userRoute);


 app.listen(90);