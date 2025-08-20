/*"use client";
import React from 'react'
import type { FormFields } from '@/types';
import { useForm, type SubmitHandler } from 'react-hook-form';
const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting }
    } = useForm<FormFields>({
        defaultValues:{
            email:"test@gmail.com",
            password:'testPassword001',
            message:'test message'
        }
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await new Promise((resolve)=>setTimeout(resolve,1000));
        console.log(data);
    }
    return (
        <form className='flex flex-col pt-12 gap-3' onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder='Email' {...register("email", {
                required: "Email is required"
            })}
                className='w-xl h-11 rounded-[8px] bg-neutral-800 text-center text-gray-400' />
            {errors.email &&
                (<div className='text-red-500 text-left'>{errors.email.message}</div>)}
            <input type="text" placeholder='Password' {...register("password", {
                required: "Password is required",
                minLength:{
                    value:8,
                    message:"Password must have atleast 8 letters"
                }
            })}
                className='w-xl h-11 rounded-[8px] bg-neutral-800 text-center text-gray-400' />
            {errors.password &&
                (<div className='text-red-500 text-left'>{errors.password.message}</div>)}
            <textarea className='w-xl h-44 overflow-auto rounded-[8px] bg-neutral-800 text-center text-gray-400 resize-none'
            placeholder='Your Message'
            {...register("message",{
                required:"Message cant be empty"
            })}></textarea>
            {errors.message && (
                <div className='text-red-500 text-left'>{errors.message.message}</div> )}

            <button type='submit'
                className='w-xl h-11 bg-amber-400 rounded-[8px] text-center text-black hover:cursor-pointer hover:scale-99
            hover:bg-amber-400/85 transition-all duration-150'
            disabled={isSubmitting}>
                {isSubmitting ? 'Loading' : 'Submit'}
            </button>
            
        </form>
    )
}

export default Form
*/