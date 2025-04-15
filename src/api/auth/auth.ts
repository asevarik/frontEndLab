import { UserLoginObject, UserSignUpObject } from "@/Pages/Auth/zodvalidations";
import { api } from "../client";
import { BaseResponse } from "../types";
import { SignInResponse } from "./types";
import { AxiosError } from "axios";

export const userSignIn = async(userObject:UserLoginObject)=>{
    try{
        const response = await api.post<BaseResponse<SignInResponse>>('/auth/signin',userObject,{credentials:true})
        return response.data
    }catch(err){
        throw err
    }
}


export const userSignUp = async(userObject:UserSignUpObject)=>{
    try{
        const response = await api.post<BaseResponse<SignInResponse>>('/auth/signup',userObject,{credentials:true})
        console.log("response from the signUp",response);
        
        return response.data
    }catch(err:any){
        if(err instanceof AxiosError){
            if(err.status==409){
                throw new Error(err?.response?.data.message)
            }
        }
    }
}