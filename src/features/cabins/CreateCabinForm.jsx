import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";


function CreateCabinForm({onCloseModal}) {
  
  const {isCreating,createCabin}=useCreateCabin()
  const {register,handleSubmit,reset,getValues,formState}=useForm()
  const {errors}=formState

  
  function onSubmit(data){
    
    createCabin({...data,image:data.image[0]},{
      onSuccess:(data)=>{
        reset()
        onCloseModal?.()
      },
    })
  }
  function onError(errors){
    console.log(errors);
  }
  return (
    <Form type={onCloseModal?'modal':'regular'} onSubmit={handleSubmit(onSubmit,onError)}>
      <FormRow label='Cabin name' error={errors?.name?.message}>
      <Input type="text" id="name" {...register('name',{
          required:"This field is required",
         
        })} />
      </FormRow>
      
      <FormRow label='Maximum Capacity' error={errors?.maxCapacity?.message}>
      <Input type="number"  {...register('maxCapacity',{
          required:"This field is required", 
          min:{
            value:1,
            message:'Capacity should be atleast 1'
          }
        })} id="maxCapacity" />
      </FormRow>
      
      
      <FormRow label='RegularPrice' error={errors?.regularPrice?.message}>
      <Input type="number" {...register('regularPrice',{
          required:"This field is required"
        })} id="regularPrice" />
      </FormRow>
      
      <FormRow label='Discount' error={errors?.discount?.message}>
      <Input type="number"  {...register('discount',{
          required:"This field is required",
          validate: (value)=>value<getValues().regularPrice || 'Discount should be less than the regularPrice'
        })} id="discount" defaultValue={0} />
      </FormRow>
      
      <FormRow label='Description' error={errors?.description?.message}>
      <Textarea type="number"  {...register('description',{
          required:"This field is required"
        })} id="description" defaultValue="" />
      </FormRow>
      
      <FormRow label='Cabin Photo' error={errors?.image?.message}>
      <FileInput id="image" accept="image/*" {...register('image',{
          required:"This field is required",
         
        })}/>
      </FormRow>
      
      
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" onClick={()=>onCloseModal?.()} type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Create new cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
