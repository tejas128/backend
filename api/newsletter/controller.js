const { create, Update, Read } = require("./services")

exports.createnewsletter = (req, res) => {
    const { email } = req.body
    if (email) {
        Read(email, (err, results) => {
            if (results.length == 1) {
               if(results[0].subscribe === 0){
                Update({email,subscribe:true}, (err, results) => {


                    if (err) {
                        return res.status(500).json({
                            sucess: 0,
                            message: "internal server error"
                        })
        
                    }
                    if (results) {
                        return res.status(200).json({
                            sucess: 1,
                            message: "you are subscribed"
                        })
        
                    }
        
                })

               }else{
                res.status(400).json({
                    sucess:0,
                    message:"email address aleardy subscribed"
                })

               }

              



            }
            if (results.length === 0) {
                create(email, (err, results) => {
                    
    
                    if (err) {
                        return res.status(500).json({
                            sucess: 0,
                            message: "internal server error"
                        })
    
                    }
                    if (results) {
                        return res.status(200).json({
                            sucess: 1,
                            message: "Thanks for subscribing us"
                        })
    
                    }
    
                })
    
            } 



        })
           


    } else {
        res.status(400).json({
            sucess: 0,
            message: "provide email"
        })
    }





}
exports.unsuscribe = (req, res) => {
    const { email } = req.body
    
    console.log(email)
    if (email) {
        Update({email,subscribe:false}, (err, results) => {


            if (err) {
                return res.status(500).json({
                    sucess: 0,
                    message: "internal server error"
                })

            }
            if (results) {
                return res.status(200).json({
                    sucess: 1,
                    message: "you are unsubscribed"
                })

            }

        })



    } else {
        res.status(400).json({
            sucess: 0,
            message: "provide email"
        })
    }

}