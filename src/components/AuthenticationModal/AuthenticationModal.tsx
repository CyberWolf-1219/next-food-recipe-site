import React from 'react';
import Portal from '@/components/Portal/Portal';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';

function AuthenticationModal() {
  return (
    <Portal selector={'#modal_mount_point'}>
      <div
        className={
          'absolute inset-0 flex flex-col items-center justify-center bg-accent/5 backdrop-blur-sm'
        }>
        <LoginForm />
        <SignupForm />
      </div>
    </Portal>
  );
}

export default AuthenticationModal;
