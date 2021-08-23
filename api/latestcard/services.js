const pool=require("../../config/db")
const { v4: uuidv4 } = require('uuid');
module.exports={
    readall:(callback)=>{
        pool.query(`select * from  latest`,(err,results)=>{
               if(err){
    
                   
                   callback(err,null)
               }
               else{
                   callback(null,results)
               }
           })
    

    },
    read:(id,callback)=>{
        pool.query(`select * from  latest where id = ?`,[
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
       pool.query(`insert into latest(id,link,title,descp)value(?,?,?,?)`,[
        uuidv4(),
        body.link,
        body.title,
        body.descp

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
    update:(body,callback)=>{
        pool.query(`UPDATE latest SET title = ? , link=? ,descp =? WHERE  id = ?`,[
         body.title,
         body.link,
         body.descp,
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
        pool.query(`delete from  latest where id = ?`,[
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