const { create, login } = require("../users/services")
const bcrypt = require('bcrypt')


const jwt = require('jsonwebtoken')
require("dotenv").config()

exports.createuser = (req, res) => {
    try {
        let saltRounds = process.env.SALTROUNDS
        saltRounds = Number.parseInt(saltRounds)
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (salt) {

                const { name, password,phoneno,email } = req.body;
                if (name && password && phoneno && email) {
                    bcrypt.hash(password, salt, (err, hashedPassword) => {
                        if (err) {
                            return res.send(500).send({
                                success: false,
                                message: "Can't hash Password",
                                error: err.message,
                                token: null
                            })
                        }
                        create({ name, hashedPassword,phoneno,email }, (err, results) => {

                            if (err) {
                                
                                console.log(err)
                                if (err.errno === 1062) {
                    
                                    return res.status(400).json({
                                        success: 0,
                                        error:"email address is already registered."
                                       
                                    })
                    
                                }
                                if(err.errno === 1264){
                                    return res.status(400).json({
                                        success: 0,
                                        message: "phone no must be 10 digit."
                                    })
                                }
                                return res.status(500).json({
                                    sucess: 0,
                                    message: "server internal error."
                                })
                            }
                            if (results) {
                                res.status(200).json({
                                    success: 1,
                                    message: "register Sucessful"
                                })
                            }


                        })
                    })
                } else {
                    res.status(400).json({
                        success: 0,
                        message: "all fields are required",
                      
                    })

                }


            }
        })
    } catch (error) {

        res.status(500).send({
            message: "An error ocurred",
            error: error.message,
            token: null,
            success: false
        })

    }




}
exports.loginuser = (req, res) => {
    const {email,password}=req.body
    if(email && password){
        login(req.body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    sucess: 0,
                    message: "internal db error."
                })
            }
            if (results) {
                const { user_id, email, password, role } = results
               
                bcrypt.compare(req.body.password, password, (err, result) => {
                     console.log(result)
    
                    if (result) {
                        var token = jwt.sign({
                            user: { user_id, email, role }
                        }, process.env.SECRET, {
                            expiresIn: '1d'
                        });
    
                        return res.status(200).send({
                            success: true,
                            mesage: "Enjoy your token",
                            token: token,
                            user: user_id,
                            access: role,
    
                            error: null
                        });
    
                    }
                    else {
    
                        res.status(400).json({
                            sucess: 0,
                            message: "password does not match"
                        })
    
                    }
                })
            } else {
                return res.status(400).json({
                    sucess: 0,
                    message: "user does not exist"
                })
            }
    
        })
    

    }else{
        return res.status(400).json({
            sucess: 0,
            message: "provide email and password"
        })

    }
    

}

