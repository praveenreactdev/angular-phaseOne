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
            lastName:'Kumar'
        }
    }
    isAuthenticated(){
        return !!this.currentUser
    }
    updateCurrentUser(firstName:string,lastName:string){
        this.currentUser.firstName=firstName
        this.currentUser.lastName=lastName
    }
}