const pool = require("../../config/db")
const { v4: uuidv4 } = require('uuid');
module.exports={
    readAll:(callback)=>{
        pool.query('select * from ipo',(err,results)=>{
            if(err){
                callback(err,null)
            }else{
                callback(null,results)
            }
        })


    }, 
    read:(id,callback)=>{
        pool.query(`select * from  ipo where id = ?`,[
            id
        ],(err,results)=>{
            if(err){
 
                
                callback(err,null)
            }
            else{
                callback(null,results)
            }
        })

    },
    create:(body,callback)=>{
        var p=parseInt(body.position)
        pool.query('insert into ipo (id,position,name,pdf,video,logo,status) value(?,?,?,?,?,?,?)',[
         uuidv4(),
         p,
         body.name,
         body.pdf,
         body.video,
         body.img,
         body.status

        ],(err,results)=>{
            if(err){
                console.log(err)
                callback(err,null)
            }else{
                
                callback(null,results)
            }

        })
    },
    update:(body,callback)=>{
        pool.query(`UPDATE ipo SET name= ? ,pdf = ?,video = ?,status = ?,logo = ? WHERE  id = ?`,[
         body.name,
         body.pdf,
         body.video,
         body.status,
         body.logo,
         body.id
 
        ],(err,results)=>{
            if(err){
 
                console.log(err)
                callback(err,null)
            }
            else{
                callback(null,results)
            }
        })
 
 
     },
     deleteitem:(id,callback)=>{
        pool.query(`delete from  ipo where id = ?`,[
            id
    
           ],(err,results)=>{
                if(err){
    
     console.log(err)
                   callback(err,null)
               }
               else{
                   callback(null,results)
               }
           })

    }

}
