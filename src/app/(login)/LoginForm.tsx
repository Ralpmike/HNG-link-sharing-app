"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import { PiEnvelopeSimpleFill, PiLockKeyFill } from 'react-icons/pi';

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required("Can't be empty"),
  password: yup.string().min(8, 'Please check again').required('Please check again'),
});

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<IFormInputs> = async ({ email, password }) => {
    setLoading(true);
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.error) {
      setError(data.error);
      setLoading(false);
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="w-full flex-col md:p-10 flex gap-[32px] md:gap-10 bg-white rounded-lg">
      <div className="flex flex-col gap-2">
        <h3 className="text-[24px] text-heading-m text-black font-bold">Login</h3>
        <p>Add your details below to get back into the app</p>
      </div>
      <form
        className="flex w-full flex-col gap-6 rounded-lg bg-white"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className={errors.password ? 'text-red' : ''}>Email address</label>
          <div className="relative">
            <PiEnvelopeSimpleFill size={20} color="#737373" className="absolute inset-x-1 left-4 bottom-[16px]" />
            <input
              className={`w-full ${errors.email ? "border-re" : "border-gray-300"} text-[1rem] py-[.75rem] pl-[45px] outline-none max-w-[396px] border-[1px] rounded-[8px] hover:border-primary hover:shadow-Inputshadow`}
              placeholder="eg.alex@email.com"
              type="email"
              {...register('email')}
            />
            {errors.email && <div className=" text-red text-[.75rem] absolute right-3 bottom-[13px]">{errors.email.message}</div>}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className={errors.password ? 'text-red' : ''}>Password</label>
          <div className="relative">
            <PiLockKeyFill size={20} color="#737373" className="absolute inset-x-1 left-4 bottom-[16px]" />
            <input
              className={`w-full ${errors.password ? "border-red" : "border-gray-300"} text-[1rem] py-[.75rem] pl-[45px] outline-none max-w-[396px] border-[1px] rounded-[8px] hover:border-primary hover:shadow-Inputshadow`}
              type="password"
              placeholder="Enter your password"
              {...register('password')}
            />
            {errors.password && <div className="text-red text-[.75rem] absolute right-3 bottom-[13px]">{errors.password.message}</div>}
          </div>
        </div>
        <button type="submit" className="bg-primary hover:bg-primary-light hover:shadow-btnshadow p-[11px] rounded-lg text-[18px] text-white" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <Link href="/signup">
          <p className="text-center md:justify-center flex flex-col md:flex-row font-normal gap-[2px] leading-[1.5rem] text-[1rem]">Don&apos;t have an account? <span className="text-primary"> Create account</span></p>
        </Link>
      </form>
    </div>
  );
};



