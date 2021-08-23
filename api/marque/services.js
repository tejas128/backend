const pool = require("../../config/db")

module.exports={

    update:(body,callback)=>{
        

        pool.query(`UPDATE marque SET text = ? WHERE  id = ?`,[
            body.text,
            body.id
            
        ],(err,results)=>{
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })

    },
    read:(callback)=>{
        pool.query(`select * from marque`,(err,results)=>{
            if(err){
                callback(err,null)

            }else{
                callback(null,results)
            }

        })
    }
}