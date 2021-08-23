const pool=require("../../../config/db")
const { v4: uuidv4 } = require('uuid');

module.exports={
    create:(data,callback)=>{
        console.log(data.name)
        pool.query(
            `insert into learn(learn_id,learn_name,learn_desc)values(?,?,?)`,[
                uuidv4(),
                data.name,
                data.desc
            ],(err,results,fields)=>{ 
                if(err){
                    console.log(err)
                  return callback(err,null)
                }
                console.log(results)
                 return callback(null,results)

            }
        )
    },
    getall:(callback)=>{
        pool.query(
            `SELECT * FROM learn`,(err,results,fields)=>{ 
                if(err){
                  return callback(err,null)
                }
                console.log(results)
                 return callback(null,results)

            }
        )

    }
    
}