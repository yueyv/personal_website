const User=require('../models/user')
const useController={
    showUser:async function(req,res,next){
        try{
            let userData=await User.all()
            res.json({
                code:200,
                message:"success",
                data:userData
            })
        }catch(e){
            res.json({code:0,message:"default",data:e})
        }
    }
}
module.exports=useController