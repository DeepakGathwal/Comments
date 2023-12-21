import { instance } from "./URL";

export const register = async(formData) => {
    try{
     
        const {data} = await instance.post(`user/register`,formData);
        return data
    }catch(err){
      return err.message
    }
}
export const login =  async(inpots) => {
    try{
     
        const {data} = await  instance.post(`user/login`,{ email: inpots.email, password: inpots.password},{ withCredentials:true});
    return data
    }catch(err){
      return err.message
    }
}
export const allUsers = async() => {
    try{
      
        const {data} = await  instance.get(`user/getUsers`);
    
    return data
    }catch(err){
      return err.message
    }
}

export const getUser = async() => {
    try{
        const {data} = await  instance.get(`user`);
     return data
    }catch(err){
      return err.message
    }
}

export const createPost  =  async(inpots) => {
    try{
   
        const {data} = await instance.post(`post`, inpots);
    
    }catch(err){
    
    }
}

export const editPost  =  async(inpots) => {
    try{
   
    
        const {data} = await instance.put(`post`, inpots);
       
     return data
    }catch(err){
      return err.message
    }
}

export const getPosts = async() => {
    try{
      const {data} = await instance.get(`post`);

    
     return data
    }catch(err){
      return err.message
    }
}
export const logout = async() => {
    try{
      
        const {data} = await  instance.get(`user/login`);
      
     return data
    }catch(err){
      return err.message
    }
}
export const addCommentToDatabase  = (el, ab,giveComment ) =>  async(dispatch) => {
    try{
        console.log(el, ab,giveComment);
        let query = '';
        if(ab){
            query = `?commentId=${ab}`
        }
        console.log(el, giveComment);
    
        const {data} = await  instance.post(`comment${query}`,{postId :el, comment:giveComment} );
     
     return data
    }catch(err){
      return err.message
    }
}
