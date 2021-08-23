const pool=require("../../../config/db")
const { v4: uuidv4 } = require('uuid');

module.exports={
    create:({body,file},callback)=>{
        var filename=`${file.destination.substr(1)}${file.filename}`
        console.log(body.name)
        pool.query(
            `insert into story(story_id,story_name,story_desc,story_image)values(?,?,?,?)`,[
                uuidv4(),
                body.name,
                body.desc,
                filename
            ],(err,results,fields)=>{ 
                if(err){
                  return callback(err,null)
                }
                console.log(results)
                 return callback(null,results)

            }
        )
    },
    getaallpost:(callback)=>{
        pool.query(
            `SELECT * FROM story`,(err,results,fields)=>{ 
                if(err){
                  return callback(err,null)
                }
                console.log(results)
                 return callback(null,results)

            }
        )

    }
    
}