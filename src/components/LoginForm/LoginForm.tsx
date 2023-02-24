import React from 'react';
import Link from 'next/link';
import IconButton from '../IconButton/IconButton';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

function LoginForm() {
  return (
    <form
      action=''
      className={'w-[90%] h-fit mx-auto p-8 bg-white rounded-md'}>
      <h2 className={'m-0 mb-4'}>Log In</h2>
      <div
        className={
          'w-full h-fit p-2 flex flex-row items-center justify-start gap-2 border-b-2 border-secondary'
        }>
        <MdEmail size={'1.5rem'} />
        <input
          type='email'
          name='user_email'
          id='user_email_input'
          className={'w-full h-fit px-2'}
        />
      </div>
      <div
        className={
          'w-full h-fit p-2 mt-4 flex flex-row items-center justify-start gap-2 border-b-2 border-secondary'
        }>
        <RiLockPasswordFill size={'1.5rem'} />
        <input
          type='password'
          name='user_password'
          id='user_password_input'
          className={'w-full h-fit px-2'}
        />
      </div>
      <Link
        href={'/'}
        className={
          'inline-block w-full h-fit text-right font-semibold text-sm text-accent'
        }>
        Forgot Password?
      </Link>
      <IconButton classes={'mt-4 bg-accent font-semibold text-white'}>
        Login
      </IconButton>
      <span className={'inline-block w-full text-center'}>or</span>
      <IconButton classes={'bg-gray-100 font-semibold'}>Google</IconButton>
      <p className={'mt-4'}>
        Dont&apos;t have an account?&nbsp;
        <Link
          href={'/'}
          className={'text-accent'}>
          Sign Up
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;
