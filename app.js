const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require("./utils/database");
const userRoutes = require("./routes/userRoutes");

const app = express();
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/api',userRoutes);

    sequelize.sync().then(result =>{
        console.log(result);
        app.listen(5000 ,()=>{
            console.log("Server is running on port 5000");
        })
    })
    .catch(err =>{
        console.log(err);
    });

