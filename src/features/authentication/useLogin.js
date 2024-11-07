import { useMutation } from "@tanstack/react-query"
import { login as loginApi } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export function useLogin() {
    const navigate=useNavigate()
const {mutate:login,isLoading}=useMutation({
    mutationFn:({email,password})=>loginApi({
        email,password
    }),
    onSuccess:(user)=>{
        console.log(user)
        toast.success("Logged in successfully 😊",{
            duration:2000
        })
        navigate('/dashboard',{replace:true});
    },
    onError:err=>{
        console.log("ERROR",err);
        toast.error("Provided email or password is incorrect",{
            duration:2000
        })
    }
})
    return {login,isLoading}
       
    
}


