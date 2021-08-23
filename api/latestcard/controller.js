const { create,  readall, deleteitem, read, update  } = require("./services")

exports.createlatest = (req, res) => {
    if (req.body) {

        const {  link, title,descp } = req.body
        if ( link && title && descp) {
            create(req.body,(err,results)=>{
                if(err){
                    res.status(500).json({
                        success:0,
                        message:"internal server error."
                    })
                    
                }
                else{
                    res.status(200).json({
                        success:1,
                        message:"latest post created sucessfully."
                    })
                }

            })

        } else {
            res.status(400).json({
                success: 0,
                message: "invalid inputes"
            })
        }
    } else {
        res.status(400).json({
            success: 0,
            message: "provide all fields"
        })
    }

}
exports.fetchAllLatest=(req,res)=>{
    readall((err,results)=>{
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

}
exports.fetchLatest=(req,res)=>{
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

exports.updatelatest=(req,res)=>{
    if (req.body) {
        const {id}=req.params
        const {link, title,descp } = req.body
        if ( id && link && title && descp) {
            update({id, ...req.body},(err,results)=>{
                if(err){
                    res.status(500).json({
                        success:0,
                        message:"internal server error."
                    })
                    
                }
                else{
                    res.status(200).json({
                        success:1,
                        message:"latest post updated sucessfully."
                    })
                }

            })

        } else {
            res.status(400).json({
                success: 0,
                message: "invalid inputes"
            })
        }
    } else {
        res.status(400).json({
            success: 0,
            message: "provide all fields"
        })
    }

}
exports.deletelatest=(req,res)=>{
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
                message:"latest deleted sucessfully."
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