const Restaurant = require('../models/Restaurant');
module.exports = {

    addRestaurant : async(req,res) => {
        try{
            
        }
        catch(error)
        {

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

    getAllNearByRestaurants: async(req,res) => {
        try{

        }
        catch(error){

        }

    },
    getRandomRestaurants: async(req,res) => {
        try{

        }
        catch(error){

        }

    },

}