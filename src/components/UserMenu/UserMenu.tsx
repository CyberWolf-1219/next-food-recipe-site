import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';
import IconButton from '../IconButton/IconButton';

import { GoSignOut } from 'react-icons/go';
import { FaUser } from 'react-icons/fa';

function UserMenu() {
  const { data, status } = useSession();

  function logout() {
    signOut();
  }

  function login() {
    signIn('google');
  }

  if (status == 'authenticated') {
    return (
      <ul>
        <li>Profile</li>
        <hr className={'mt-1'} />
        <li>Favourites</li>
        <hr className={'mt-1'} />
        <li>
          <IconButton
            action={logout}
            classes={
              'mt-2 flex flex-row items-center justify-center gap-2 bg-accent text-white font-semibold'
            }>
            <GoSignOut /> Logout
          </IconButton>
        </li>
      </ul>
    );
  } else {
    return (
      <IconButton
        action={login}
        classes={
          'flex flex-row items-center justify-center gap-2 bg-accent text-white font-semibold'
        }>
        <FaUser />
        Sign In
      </IconButton>
    );
  }
}

export default UserMenu;
