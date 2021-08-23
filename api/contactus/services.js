const pool=require("../../config/db")
const { v4: uuidv4 } = require('uuid');


module.exports={
    create:(data,callback)=>{
        console.log(data)
        pool.query(`insert into contactus(id,name,email,phoneno,message)value(?,?,?,?,?)`,[
            uuidv4(),
            data.name,
            data.email,
            data.phoneno,
            data.message,
            
        ],(err,results)=>{
            if(err){
                console.log(err)
                return callback(err,null)
            }else{
                console.log(results)
                return callback(null,results)

            }

        })


    }
}