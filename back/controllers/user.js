const user = require('../models/user')
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
    
    },
    login:async function(req,res,next){
        try{
            // let id=req.query.id
            // console.log(req.body);
            let token=132231
            let id=req.body.account
            let pwd=req.body.password
            // console.log(req.query.id)
            let userData= await User.inquire(id)
            let data=JSON.parse(JSON.stringify(userData))
            const newData={...data}['0']
            console.log(newData.id)
            
            if(id!=newData.id){
                res.json({
                    code:200,
                    message:'iderrow',
                    data:{
                    }
                })
            }
            else if (newData.password==pwd){
                res.json({
                    code:200,
                    message:"success",
                    data:{
                        token:`${token}`
                    }
                })
            }else{
                res.json({
                    code:200,
                    message:'pwderrow',
                    data:{

                    }
                })
            }
            
        }catch(e){
        res.json({code:0,message:"default",data:e})
    }
    }
}
module.exports=useController