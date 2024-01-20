import stumodel from "../models/profile.js"

class stucontroller{

   
 static saveprofile= async(req,res)=>{
  
  //  req.body//for form data
  //  req.files//for file data
   
  try{
const {name,email,dob,st,gender,pjl}=req.body
const pimage=req.files['pimage'][0].filename
const rdoc=req.files['rdoc'][0].filename
if(name && email && rdoc)
{
  const doc= new stumodel({
    name:name,
    email:email,
    dob:dob,
    state:st,
    gender:gender,
    location:pjl,
    pimage:pimage,
    rdoc:rdoc

  })
  const cand=await doc.save()
  res.status(201).send({"status":"success","message":"profile uploaded","candidate":cand})
 } else{
    res.send({"status":"failed","message":"all field req"})
  }
  
   
  }catch(err){
    console.log(err)
  }
 }

  
 static show= async(req,res)=>{
  try{
    const candi= await stumodel.find()
    res.status(201).send({"status":"success","message":"profile showed","candidate":candi})

  }catch(err){
    console.log(err);
  }
 }

} 



export default stucontroller   