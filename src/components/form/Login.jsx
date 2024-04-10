import React from "react";
import { useForm } from "react-hook-form";
import { Axios } from "axios";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data)=>{
     
    const body = {
        email:data.email,
        name:data.name,
        password:data.password
    }
    console.log(body);
     
    try {
        const res = await Axios.post('http://localhost:3000/login', body);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
};

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div>
        <label>Name</label>
        <input name="name" {...register('name')} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" {...register('email')} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" {...register('password')} />
      </div>
      <button>Submit</button>
    </form>
  );
};