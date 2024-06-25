
const User = require('../models/user');

exports.addUser = async (req,res,next) =>{
    const {name, email , password , contact} = req.body;
    try{
        const user = await  User.create({name , email , password , contact});
        res.status(201).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to add the data"});
    }
}

exports.getUser = async (req, res , next) =>{
    try{
        const user = await User.findAll();
        res.status(200).json(user);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to get the data"});
    }
}

exports.userDelete = async (req, res, next)=>{
    const userId = req.params.userId;
    try{
        const result = await User.destroy({where: {id: userId}});
        if(result){
            res.status(200).json("UserDeleted Successfully");
        }
        else{
            res.status(404).json("UserNot Found");
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Failed to delete the data"});
    }
}