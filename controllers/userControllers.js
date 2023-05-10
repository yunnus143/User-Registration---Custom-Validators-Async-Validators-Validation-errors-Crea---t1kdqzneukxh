const users   =require("../models/user.js");

/*
Post request json file structure


    obj =  {
        "name":name,
        "email":email,
        "password": password
    }

 */

//You need to complete the route of user register
//you need to register the user and return the id assign to the user.
//you will get error if user mail allready exist in that case you need to return 404 status with err message that you get.
//to look the user schema look ../models/user.js

const registerUser =async (req, res) => {

    //Write you code here
    const {name, email, password} =req.body
    const users=new users
    name=name,
    email=email,
    password=password
    

}

module.exports = { registerUser };
