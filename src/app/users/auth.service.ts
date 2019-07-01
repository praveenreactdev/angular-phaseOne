import {Injectable} from '@angular/core'
import {IUser} from './user.model'
@Injectable()
export class AuthService{
    currentUser:IUser
    loginUser(userName:String,password:String){
        this.currentUser={
            id:1,
            userName:'Sam',
            firstName:'Praveen',
            lastName:''
        }
    }
    isAuthenticated(){
        return !!this.currentUser
    }
}