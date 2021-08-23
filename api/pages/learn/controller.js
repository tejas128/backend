const {create,getall}=require("./services")


exports.createlearn=(req,res)=>{
    create(req.body,(err,results)=>{
        console.log(res.body)
        if( err){
            return res.status(500).json({
                success:0,
                message:'servers error'
            })
        }
        res.status(200).json({
            success:1,
            message:"learn card created"
        })
    })
}
exports.getlearns=(req,res)=>{
    getall((err,results)=>{
        if(err){
            return res.status("500").json({
                success:0,
                message:'server error'
            })
        }
        res.status(200).json({
            success:1,
            results
        })
    })
}