const express= require('express');
const bodyParser=require("body-parser");

// const {City} = require('./models/index');
// const CityRepository=require('./repository/city-repository');
const {PORT}=require('./config/serverConfig');
const ApiRoutes=require('./routes/index');

const setupAndStartServer=async()=>{
    //create the express obj
    const app=express();
     
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);
    
    // const {Airport, City } =require('./models/index');
    const db=require('./models/index');
    const sequelize=require('sequelize');

    app.listen(PORT, async()=>{
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter : true});
       }
        // await City.create({
        //     name: "New Delhi"
        // });

        // const repo=new CityRepository();
        // // repo.createCity({name: "Indore"});
        // repo.deleteCity(1);
        
        //48
        // const airports=await Airport.findAll({
        //     // include: City
        //     //or
        //     include: [{
        //         model: City
        //     }]
        // });
        // console.log(airports);


        
        // const city=await City.findOne({
        //     where: {
        //         id: 5
        //     }
        // });
        // const airports=await city.getAirports();
        // // const newAirport=await Airport.create({
        // //     name: 'Jindal Vijaynagar Airport',
        // //     cityId: 5
        // // })
        // const newAirport=await Airport.findOne({
        //     where: {
        //         id: 4
        //     }
        // });
        // //  await city.addAirport(newAirport);
        // console.log(city, airports);
        // console.log(city);
    });
}

setupAndStartServer();