const pool=require("../../config/db")
const { v4: uuidv4 } = require('uuid');


module.exports={
    Read:(email,callback)=>{
      
        pool.query(`select * from newsletter where email = ?`,[
         
            email
            

          

        ],(err,results)=>{
          
            if(err){
                console.log(err)
                return callback(err,null)
            }else{
                console.log(results)
                return callback(null,results)

            }

        })


    },
   create:(email,callback)=>{
      
        pool.query(`insert into newsletter(id,email,subscribe)value(?,?,?)`,[
            uuidv4(),
            email,
            true,

          

        ],(err,results)=>{
          
            if(err){
                console.log(err)
                return callback(err,null)
            }else{
                console.log(results[0])
                return callback(null,results)

            }

        })


    },
    Update:(data,callback)=>{
      
        pool.query(`UPDATE newsletter SET subscribe = ? WHERE  email = ?`,[
            data.subscribe,
            data.email,
            new Date()

          

        ],(err,results)=>{
          
            if(err){
                console.log(err)
                return callback(err,null)
            }else{
                console.log(results[0])
                return callback(null,results)

            }

        })


    },
}
