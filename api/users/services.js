const pool=require("../../config/db")
const { v4: uuidv4 } = require('uuid');

module.exports={
    create:(data , callback)=>{
        
        pool.query(
            `insert into users(user_id,email,name,password,phone)values(?,?,?,?,?)`,[
                uuidv4(),
                data.email,
                data.name,
                data.hashedPassword,
                data.phoneno
            ],(err,results,fields)=>{ 
                if(err){
                  return callback(err,null)
                }
                console.log(results)
                 return callback(null,results)

            }
        )
    },
    
     


    login:(data,callback)=>{
        pool.query(
            `select user_id, password, name,email,role from users where email = ?`,[data.email],
            (err,results,fields)=>{ 
                if(err){
                  return callback(err,null)
                }
                
                 
                 return callback(null,results[0])

            }
        )

    }
}
