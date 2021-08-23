const { update, read } = require("./services")

exports.updatemarque=(req,res)=>{
    const{id}=req.params
    const{text}=req.body
  
    update({id,text},(err,results)=>{
        
       if(err){
           return res.status(500).json({
               success:0,
               message:"internal server error"
           })

       }else{
           return res.status(200).json({
               success:1,
               message:"marque updated sucessfully"
           })
       }
    })

}

exports.getmarque=(req,res)=>{
     
    read((err,results)=>{
        if(err){
            return res.status(500).json({
                success:0,
                message:"internal server error"
            })
 
        }else{
            return res.status(200).json({
                success:1,
               results:results
            })
        }
    })
}