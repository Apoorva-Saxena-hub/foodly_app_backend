const Restaurant = require('../models/Restaurant');
module.exports = {

    addRestaurant : async(req,res) => {

        const {title,time,imageUrl, owner, code, logoUrl,coords} = req.body;
        if(!title || !time || !imageUrl || !owner || !code || !logoUrl 
            || !coords || !coords.latitude || !coords.longitude || !coords.address || !coords.title){
                return res.status(400).json({status:false, messgae: "You have a missing field"});

            }
        try{
            const newRestaurant = new Restaurant(req.body);

            await newRestaurant.save();
            res.status(200).json({status:true, message: "Restaurant has been successfully saved"});
        }
        catch(error)

        {

           res.status(500).json({status:false, message:error.message});
        }
    },

    getRestaurantById: async(req,res) => {
        const id = req.params.id;
        try{
            const restaurant = await Restaurant.findById(id);

            res.status(200).json(restaurant);

        }
        catch(error)
        {
            res.status(500).json({status:false, message:error.message})
        }

    },

    getRandomRestaurants : async(req,res) => {
        const code = req.params.code;
        try{
            let randomRestaurants = [];
            if(code){
                randomRestaurants = Restaurant.aggregate([
                    {$match: {code:code, iSAvailable: true}},
                    {$sample: {siez: 5}},
                    {$project: {__v: 0}}

                ]);

            }

            if(randomRestaurants.length == 0 ){
                     randomRestaurants = Restaurant.aggregate([
                    {$match: {code:code, iSAvailable: true}},
                    {$sample: {siez: 5}},
                    {$project: {__v: 0}}

                ]);
            }
            res.status(200).json(randomRestaurants);
        }
        catch(error){
              res.status(500).json({status:false, message:error.message});
        }

    },
    getAllNearByRestaurants: async(req,res) => {
        try{
              let allNearBy = [];
            if(code){
                allNearBy = Restaurant.aggregate([
                    {$match: {code:code, iSAvailable: true}},
                    {$sample: {siez: 5}},
                    {$project: {__v: 0}}

                ]);

            }

            if(allNearBy.length == 0 ){
                     allNearBy = Restaurant.aggregate([
                    {$match: {code:code, iSAvailable: true}},
                    {$sample: {size: 5}},
                    {$project: {__v: 0}}

                ]);
            }
            res.status(200).json(allNearBy);
        }
        catch(error){
            res.status(500).json({status:false, message:error.message});

        }

    },

}