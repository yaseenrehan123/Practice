import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { FormFields } from '../types';

const Form = () => {
  const { register, handleSubmit,reset, formState: { isSubmitting, errors } } = useForm<FormFields>();
  const submit:SubmitHandler<FormFields> = async (data)=> {
    try {
      const res = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      reset();
    }
    catch (e) {
      throw new Error(`${e}`);
    }

  };
  return (
    <form onSubmit={handleSubmit(submit)}
      className='text-white flex items-center flex-col gap-3'>
      <div className='w-60 sm:w-70 md:w-80 lg:w-[40rem] flex flex-col'>
        <input className='w-full h-10 bg-gray-900 text-center'
          placeholder='Name'
          {...register('name',{
            required:'Name is required'
          })} />
          <div className='text-red-500 text-left pl-2'>{errors.name?.message}</div>
      </div>

       <div className='w-60 sm:w-70 md:w-80 lg:w-[40rem] flex flex-col'>
        <input className='w-full h-10 bg-gray-900 text-center'
        placeholder='Email'
        {...register('email',{
          required:'Email is required'
        })} />
        <div className='text-red-500 text-left pl-2'>{errors.email?.message}</div>
       </div>
      
      <div className='w-64 sm:w-74 md:w-84 lg:w-[44rem]'>
          <textarea className='w-full h-40 bg-gray-900 text-center resize-none'
        placeholder='Message'
        {...register('message',{
          required:'Message is required'
        })}>
        </textarea>
        <div className='text-red-500 text-left pl-2'>{errors.message?.message}</div>
      </div>
    

      <button
        className='w-40 h-20 bg-gray-900 hover:cursor-pointer hover:bg-gray-800 hover:scale-98 active:scale-96 duration-150 transition-all'
        disabled={isSubmitting}>
        {isSubmitting ? 'Submitting' : 'Submit'}
      </button>
    </form>
  )
}

export default Form