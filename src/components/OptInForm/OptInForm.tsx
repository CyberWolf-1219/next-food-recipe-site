import Link from 'next/link';
import React from 'react';
import { FaMailBulk } from 'react-icons/fa';

import styleClasses from './style.module.css';

function OptInForm() {
  return (
    <form
      action=''
      method={'POST'}
      className={`${styleClasses.optin_form} aspect-[16/5] w-full h-fit py-[2rem] flex flex-col items-center justify-center`}>
      <h2 className={'w-full max-w-[8em] mx-auto text-center lg:text-7xl'}>
        Deliciousness to your inbox.
      </h2>

      <p className={'font-normal text-center'}>
        Enjoy weekly handpicked recipes and recommendations.
      </p>

      <div
        className={
          'w-[80%] lg:w-[50%] max-w-[500px] h-fit mx-auto p-2 flex flex-row items-center justify-center gap-2 bg-white rounded-md'
        }>
        <span className={'aspect-[1/1] w-[2rem] h-auto'}>
          <FaMailBulk
            size={'2rem'}
            color={'var(--clr-accent)'}
          />
        </span>
        <input
          type='email'
          name='user_email'
          id='user_email_input'
          placeholder={'Adde your email here...'}
          className={
            'inline-block w-full h-fit mx-auto p-0 font-base text-lg bg-transparent'
          }
        />
      </div>

      <div className={'w-[80%] lg:w-[50%] max-w-[500px] h-fit mx-auto mt-4'}>
        <button
          className={
            'w-full h-fit px-[2em] py-[0.5em] mx-auto bg-accent font-semibold text-white'
          }>
          JOIN
        </button>
      </div>

      <small className={'block max-w-[40ch] mx-auto mt-2 text-center'}>
        By joining our newsletter you are aggreeing to our{' '}
        <Link
          href={'#'}
          className={'underline'}>
          Terms & Services
        </Link>
      </small>
    </form>
  );
}

export default OptInForm;
