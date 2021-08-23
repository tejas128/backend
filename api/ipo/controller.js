const { create, readAll, read, update, deleteitem } = require("./services")


// exports.createipo=(req,res)=>{
//     const {name,pdf,video,status}=req.body
  
//     const file=req.file
//     var logo=`${file.destination.substr(1)}${file.filename}`
   
//     if(name && pdf && video && logo && status){
//         create({...req.body,logo},(err,results)=>{
//             if(err){
//                return res.status(500).json(
//                     {
//                         success:0,
//                         message:"internal server error"
//                     }
//                 )
//             }else{
//                return  res.status(200).json({
//                     success:1,
//                     message:"ipo created sucessfully"
//                 })
//             }
//         })

//     }else{
//         return res.status(400).json({
//             success:0,
//             message:"provided valid inputs"
//         })
//     }

// }
exports.createipo=(req,res)=>{
    const {position,name,pdf,video,status,img}=req.body
    
   
   
    if(name && position && pdf && video && img && status){
        create(req.body,(err,results)=>{
            if(err){
               return res.status(500).json(
                    {
                        success:0,
                        message:"internal server error"
                    }
                )
            }else{
               return  res.status(200).json({
                    success:1,
                    message:"ipo created sucessfully"
                })
            }
        })

    }else{
        return res.status(400).json({
            success:0,
            message:"provided valid inputs"
        })
    }

}
exports.getipo=(req,res)=>{
    const { id}=req.params

    if(id){
        read(id,(err,results)=>{
            if(err){
                res.status(500).json({
                    success:0,
                    message:"internal server error"
                })
            }else{
                res.status(200).json({
                    success:0,
                    data:results
                })
            }
         })
    }else{
        res.status(400).json({
            success:0,
            message:"provide id"
            
        })
    }


}

exports.updateipo=(req,res)=>{
    const { name ,pdf, video,logo,status}=req.body
    const {id}=req.params
    if( name &&  pdf && video && logo && status){
        update({id, ...req.body},(err,results)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:"internal server error"
                })

            }else{
                return res.status(200).json({
                    success:1,
                    message:"updated sucessfully"
                })
            }

        })

    }else{
        return res.status(400).json({
            success:0,
            message:"provide valid inputs"
        })
    }

}
exports.deleteipo=(req,res)=>{
    const {id}=req.params
    if(id){
      deleteitem(id,(err,results)=>{
        if(err){
            res.status(500).json({
                success:0,
                message:"internal server error."
            })
            
        }
        else{
            res.status(200).json({
                success:1,
                message:"ipo deleted sucessfully."
            })
        }
      })

    }else{
        res.status(400).json({
            success: 0,
            message: "provide id"
        })

    }
}

exports.getallipo=(req,res)=>{
     readAll((err,results)=>{
         if(err){
            return res.status(500).json({
                success:0,
                message:"internal server error."
            })

         }else{
             return res.status(200).json({
                 success:1,
                 results:results
             })
         }
     })
}