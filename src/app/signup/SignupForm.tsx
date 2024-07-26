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
  confirmPassword: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required("Can't be empty"),
  password: yup.string().min(8, 'check agian').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Passwords must match'),
});

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<IFormInputs> = async ({ email, password }) => {
    setLoading(true);
    setError(null);

    const res = await fetch('/api/auth/signup', {
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
    <div className="w-full flex-col md:p-10 flex gap-[32px]  max-w-[496px] md:gap-10 bg-white rounded-lg">
      <div className="flex flex-col gap-2">
        <h3 className="text-[24px] text-heading-m text-black font-bold">Create account</h3>
        <p>Let&apos;s get you started sharing your links!</p>
      </div>
      <form
        className="flex w-full flex-col gap-6 rounded-lg bg-white"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email address</label>
          <div className="relative">
            <PiEnvelopeSimpleFill size={20} color="#737373" className="absolute inset-x-1 left-4 bottom-[16px]" />
            <input
              className={`w-full ${errors?.email ? "border-red" : "border-gray-300"} text-[1rem] py-[.75rem] pl-[45px] outline-none max-w-[496px] border-[1px] rounded-[8px] hover:border-primary hover:shadow-Inputshadow`}
              placeholder="eg. alex@email.com"
              type="email"
              {...register('email')}
            />
            {errors.email && <div className="text-red text-[.75rem] absolute right-3 bottom-[13px]">{errors.email.message}</div>}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Create password</label>
          <div className="relative">
            <PiLockKeyFill size={20} color="#737373" className="absolute inset-x-1 left-4 bottom-[16px]" />
            <input
              className={`w-full ${errors.password ? "border-red" : "border-gray-300"} text-[1rem] py-[.75rem] pl-[45px] outline-none max-w-[496px] border-[1px] rounded-[8px] hover:border-primary hover:shadow-Inputshadow`}
              type="password"
              placeholder="At least 8 characters"
              {...register('password')}
            />
            {errors.password && <div className="text-red text-[.75rem] absolute right-3 bottom-[13px]">{errors.password.message}</div>}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword">Confirm password</label>
          <div
            className="relative"
          >
            <div className='flex items-center gap-2'>
              <div>
                <PiLockKeyFill size={20} color="#737373" className="absolute inset-x-1 left-4 bottom-[16px]" />
              </div>
              <input
                className={`w-full ${errors.password ? "border-red" : "border-gray-300"} text-[1rem] py-[.75rem] pl-[45px] outline-none max-w-[496px] border-[1px] rounded-[8px] hover:border-primary hover:shadow-Inputshadow`}
                type="password"
                placeholder="At least 8 characters"
                {...register('password')}
              />
            </div>
            {errors.confirmPassword && <div className="text-red text-[.75rem] absolute right-3 bottom-[13px]">{errors.confirmPassword.message}</div>}
          </div>
        </div>
        <p className="text-gray-500 text-[.875rem]">Password must contain at least 8 characters</p>
        <button type="submit" className="bg-primary w-full hover:bg-primary-light hover:shadow-btnshadow max-w-[396px] p-[11px] rounded-lg text-[18px] text-white" disabled={loading}>
          {loading ? 'Creating account...' : 'Create new account'}
        </button>
        <Link href="/">
          <p className="text-center md:justify-center flex flex-col md:flex-row font-normal gap-[2px] leading-[1.5rem] text-[1rem]">Already have an account? <span className="text-primary">Login</span></p>
        </Link>
      </form>
    </div>
  );
};

