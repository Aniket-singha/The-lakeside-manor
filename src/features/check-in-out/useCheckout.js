import { useMutation, useQueries, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";


export function useCheckout(){
    const queryClient=useQueryClient()
   
    const {mutate:checkout,isLoading:isCheckingout}=useMutation({
        mutationFn:(bookingId)=>updateBooking(bookingId,{
            status:'checked-out',
           
        }),
        onSuccess:(data)=>{
            toast.success(`Booking successfully checked out😊`)
            queryClient.invalidateQueries({active:true})
           
        },
        onError:()=>toast.error("There was an error checking out")
    })
    return {checkout,isCheckingout}
}