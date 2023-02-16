const {City}=require('../models/index');

class CityRepository{
    async createCity({name}){
        try {
            const city=await City.create({
                name
            });
            return city;
        } catch (error) {
           
            throw {error};
        }
    }

    async deleteCity(cityid){
        try {
            await City.destroy({
                where: {
                    id: cityid
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repo");
            throw {error};
        }
    }

    async updateCity(cityid, data) {
        try {
            //the below approach also works but will not return updated obj if you are using pgsql, then returning : true can be used
            // const city=await City.update(data, {
            //     where: {
            //         id: cityid
            //     },
            //     returning: true,
            //     plain: true
            // });
            const city=await City.findByPk(cityid);
            city.name=data.name;
            await city.save();
            return city;
        } catch (error) {
             console.log("Something went wrong in the repo");
             throw {error};
        }
    }

    async getCity(cityid) {
        try {
            const city=await City.findByPk(cityid);
            return city;
        } catch (error) {
            console.log("Something went wrong in repo");
            throw {error};
        }
    }
}

module.exports=CityRepository;