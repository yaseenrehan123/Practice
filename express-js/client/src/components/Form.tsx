import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from "zod";
import type { FormFields } from '../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';

const schema = z.object({
  name: z.string().min(8),
  email: z.email(),
  message: z.string().min(8)
});

const Form = () => {
  const { register, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });
  const mutation = useMutation({
    mutationKey:['submitForm'],
    mutationFn:async (data:FormFields)=>{
      const res = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      if(!res.ok)
        throw new Error("RESPONSE FAILED!");
    },
    onSuccess:()=> {
      reset();
    }
  })
  const onSubmit: SubmitHandler<FormFields> = (data:FormFields) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className='text-white flex items-center flex-col gap-3'>
      <div className='w-60 sm:w-70 md:w-80 lg:w-[40rem] flex flex-col'>
        <input className='w-full h-10 bg-gray-900 text-center'
          placeholder='Name'
          {...register('name')} />
        <div className='text-red-500 text-left pl-2'>{errors.name?.message}</div>
      </div>

      <div className='w-60 sm:w-70 md:w-80 lg:w-[40rem] flex flex-col'>
        <input className='w-full h-10 bg-gray-900 text-center'
          placeholder='Email'
          {...register('email')} />
        <div className='text-red-500 text-left pl-2'>{errors.email?.message}</div>
      </div>

      <div className='w-64 sm:w-74 md:w-84 lg:w-[44rem]'>
        <textarea className='w-full h-40 bg-gray-900 text-center resize-none'
          placeholder='Message'
          {...register('message')}>
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