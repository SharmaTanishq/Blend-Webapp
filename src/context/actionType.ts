
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};



export enum Types{
 
  AddUser='ADD_USER',
  RemoveUser='REMOVE_USER',
  
}

export type UserPayload ={
  [Types.AddUser]:{
    name:string
    email:string,
    spotifyId:string,
    _id:string
  };
  [Types.RemoveUser]:{
    name:string
  }
}
export type USER_ACTIONS = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];
