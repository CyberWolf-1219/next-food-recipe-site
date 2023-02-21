import Avatar from '@/components/Avatar/Avatar';
import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import IconButton from '@/components/IconButton/IconButton';
import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import {
  FaBookmark,
  FaCalendarDay,
  FaComment,
  FaDownload,
} from 'react-icons/fa';

function BlogPost() {
  return (
    <>
      <Head>
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=7'
        />
        <meta
          name='description'
          content=''
        />
        <meta
          http-equiv='X-UA-Compatible'
          content='ie=edge'
        />
        <meta
          http-equiv='Content-Type'
          content='text/html;charset=UTF-8'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <title>Post Title</title>
      </Head>
      <header>
        <Navigation />
      </header>
      <main className={'w-full min-h-screen'}>
        <section className={'w-full h-fit px-4'}>
          <Container>
            <div
              className={
                'w-full h-fit mb-[2rem] grid grid-cols-6 auto-rows-auto gap-4 items-stretch justify-items-stretch'
              }>
              <h1 className={'col-start-1 col-end-7'}>Post Title Goes Here</h1>
              <div
                className={
                  'col-start-1 col-end-5 w-full h-fit flex flex-row items-center justify-between gap-4'
                }>
                <div
                  className={
                    'grow shink basis-[50%] w-fit h-fit flex flex-row items-center justify-start gap-2'
                  }>
                  <Avatar
                    image={''}
                    size={'sm'}
                  />
                  <span>Author Name Here</span>
                </div>
                <div
                  className={
                    'grow shink basis-[20%] w-fit h-fit flex flex-row items-center justify-start gap-2'
                  }>
                  <FaCalendarDay />
                  <span>2023/01/01</span>
                </div>
                <div
                  className={
                    'grow shink basis-[20%] w-fit h-fit flex flex-row items-center justify-start gap-2'
                  }>
                  <FaComment />
                  <span>389</span>
                </div>
              </div>
              <IconButton
                width={'full'}
                height={'fit'}
                classes={'col-start-5 col-end-6'}>
                <FaDownload
                  size={'2rem'}
                  className={'mx-auto'}
                />
              </IconButton>
              <IconButton
                width={'full'}
                height={'fit'}
                classes={'col-start-6 col-end-7'}>
                <FaBookmark
                  size={'2rem'}
                  className={'mx-auto'}
                />
              </IconButton>
            </div>
            <hr />
          </Container>
        </section>
        <section className={'w-full h-fit px-4'}>
          <Container>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                excepturi nobis rem obcaecati perspiciatis facere, similique
                voluptas voluptatum optio quia ea fugit deserunt inventore ipsam
                necessitatibus, ex illo eaque dolores deleniti? Porro officia
                obcaecati voluptate quia tempore, iusto suscipit optio impedit
                ad dolores esse facere sequi corrupti. Corporis, dolore ab?
              </p>
              <Image
                src={''}
                alt={''}
                className={
                  'aspect-[1/1] w-full h-auto object-cover rounded-lg overflow-hidden border-2'
                }
              />
            </div>
          </Container>
        </section>
        <section className={'w-full h-fit px-4'}>
          <Container>
            <div>
              <h2>Sub Title Goes Here...</h2>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BlogPost;
