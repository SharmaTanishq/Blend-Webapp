import {  USER_ACTIONS } from "./actionType";
import {  UserType } from ".";



  export const userReducer =(state:UserType,action:USER_ACTIONS)=>{
    switch(action.type){
      case "ADD_USER":
        
        return {
          name:action.payload.name,
          email:action.payload.email,
          spotifyId:action.payload.spotifyId,
          _id:action.payload._id
        }
        case "REMOVE_USER":
        return {
          name:"",
          email:"",
          spotifyId:"",
          _id:""
        }
      default:
        return state
    }

  }