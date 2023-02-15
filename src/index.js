const express= require('express');
const bodyParser=require("body-parser");

// const {City} = require('./models/index');
const CityRepository=require('./repository/city-repository');
const {PORT}=require('./config/serverConfig');
const ApiRoutes=require('./routes/index');

const setupAndStartServer=async()=>{
    //create the express obj
    const app=express();
     
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
    

    app.listen(PORT, async()=>{
        console.log(`Server started at ${PORT}`);
        // await City.create({
        //     name: "New Delhi"
        // });

        const repo=new CityRepository();
        // repo.createCity({name: "Indore"});
        repo.deleteCity(1);
    });
}

setupAndStartServer();