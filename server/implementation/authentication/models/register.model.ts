import * as mongoose from 'mongoose';
export class UserModel {
  private static userModel = null;
  constructor(dbConn){
    let userSchema =  new mongoose.Schema({
      username:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      },
      verified:{
        type:Boolean,
        required:true,
        default:false
      },
      resettoken:{
        type:String
      },
      timestamp:{
        type:String,
        required:true
      },
      profile:{
        mobile:Number,
        otp:String,
        fullname:String,
        gender:Number
      },
      status:{}
    });
    UserModel.userModel = dbConn.model('user',userSchema);
  }
  static usermodel(){
    return UserModel.userModel;
  }
}
