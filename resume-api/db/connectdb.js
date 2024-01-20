import mongoose from 'mongoose'
const connnectdb= async()=>{
    try{

        const db_options={
            dbname:"resumeuploader"
        }
        mongoose.connect("your_url",db_options)
       console.log("connected sucessfully..")
    }catch(err){
        console.log(err)
    }
}
 
export default connnectdb;