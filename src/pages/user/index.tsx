import React from 'react';

import Avatar from '@/components/Avatar/Avatar';
import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import IconButton from '@/components/IconButton/IconButton';
import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';

import { FaSave } from 'react-icons/fa';
import { RxLoop } from 'react-icons/rx';
import { MdDelete } from 'react-icons/md';
import { MdUnsubscribe } from 'react-icons/md';
import { GoSignOut } from 'react-icons/go';
import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';

function Profile() {
  return (
    <>
      <Head>
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=7'
        />
        <meta
          http-equiv='X-UA-Compatible'
          content='ie=edge'
        />
        <meta
          name='description'
          content=''
        />
        <meta
          http-equiv='Content-Type'
          content='text/html;charset=UTF-8'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
      </Head>
      <header>
        <Navigation />
      </header>
      <main className={'w-full h-fit min-h-screen'}>
        <section className={'w-full h-fit px-4'}>
          <Container>
            <div
              className={
                'w-full h-fit flex flex-row items-center justify-between'
              }>
              <h1>Profile</h1>
              <IconButton
                width={'fit'}
                height={'fit'}
                classes={
                  'flex flex-row items-center justify-center gap-2 bg-accent/90 text-white shadwo-md shadow-accent/30 '
                }>
                <FaSave />
                SAVE
              </IconButton>
            </div>
            <hr />
          </Container>
        </section>
        <section className={'w-full h-fit px-4 py-8'}>
          <Container>
            <div
              className={
                'w-full h-fit flex flex-row items-center justify-between md:justify-start gap-4'
              }>
              <Avatar
                image={''}
                size={'md'}
              />
              <IconButton
                width={'fit'}
                height={'fit'}
                classes={
                  'flex flex-row items-center justify-center gap-2 bg-accent/80 shadow-md shadow-accent/30 text-white'
                }>
                <RxLoop />
                Change
              </IconButton>
              <IconButton
                width={'fit'}
                height={'fit'}
                classes={
                  'flex flex-row items-center justify-center gap-2 bg-white border-2 border-secondary'
                }>
                <MdDelete />
                Delete
              </IconButton>
            </div>
            <hr />
          </Container>
        </section>
        <section className={'w-full h-fit px-4 py-8'}>
          <Container>
            <label htmlFor='user_name_input'>Your Name:</label>
            <br />
            <input
              type='text'
              name='user_name'
              id='user_name_input'
              className={
                'w-full h-fit px-2 py-2 border-b-2 border-accent bg-white'
              }
            />
            <br />
            <br />
            <label htmlFor='user_bio_input'>A Little Bit About You:</label>
            <br />
            <textarea
              name='user_bio'
              id='user_bio_input'
              cols={30}
              rows={10}
              className={
                'w-full h-fit p-2 border-2 border-accent rounded-md'
              }></textarea>
            <hr />
          </Container>
        </section>
        <section className={'w-full h-fit px-4 py-8'}>
          <Container>
            <p>
              <strong>Newsletter</strong>
              <br />
              You can unsubscribe if you want.
            </p>
            <IconButton
              width={'fit'}
              height={'fit'}
              classes={
                'flex flex-row items-center justify-center gap-2 text-black border-2 border-black'
              }>
              <MdUnsubscribe />
              Unsubscribe
            </IconButton>
            <hr />
          </Container>
        </section>
        <section className={'w-full h-fit px-4 py-8'}>
          <Container>
            <div
              className={
                'w-full h-fit flex flex-row items-center justify-between'
              }>
              <IconButton
                width={'fit'}
                height={'fit'}
                classes={
                  'flex flex-row items-center justify-center gap-2 text-black border-2 border-black'
                }>
                <GoSignOut />
                Signout
              </IconButton>
              <IconButton
                width={'fit'}
                height={'fit'}
                classes={'text-red-500'}>
                Delete Account
              </IconButton>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanenet: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}
