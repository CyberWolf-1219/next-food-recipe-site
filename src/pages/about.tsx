import Avatar from '@/components/Avatar/Avatar';
import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

function About() {
  return (
    <>
      <Head>
        <meta
          http-equiv='Content-Type'
          content='text/html;charset=UTF-8'
        />
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=7'
        />
        <meta
          name='description'
          content='About tastebite.'
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
      <main className={'w-full min-h-screen'}>
        <section className={'px-4 pb-[5rem]'}>
          <Container>
            <h2>About</h2>
            <hr className={'border-[1px] border-secondary/50'} />
            <h1>
              We&apos;re group of foodies who love cooking and the internet
            </h1>
            <Image
              src={''}
              alt={''}
              className={
                'aspect-[1/1] sm:aspect-[16/6] w-full h-auto object-cover border-2'
              }
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              atque magnam unde ipsam odio placeat impedit, a consequuntur
              nesciunt ex eum dolore amet in provident neque laborum laboriosam
              vitae iste quisquam! Enim labore corporis esse illo atque
              repellat, cupiditate quod maxime in corrupti libero quisquam rem
              dolorem dolore cumque, rerum molestiae voluptate laudantium
              blanditiis distinctio. Corporis nesciunt debitis suscipit, quod
              reiciendis, doloribus unde adipisci sapiente repellendus et facere
              dolorem incidunt ipsa aut voluptatem! Cum deleniti consequuntur
              molestiae rem neque. Distinctio, iure consequatur! Consequuntur
              quia nostrum id. Molestiae, aspernatur. Eos quod aliquam placeat
              alias? Ad harum laboriosam enim suscipit saepe sed?
            </p>
          </Container>
        </section>
        <section className={'px-4 pb-[5rem]'}>
          <Container>
            <div
              className={
                'w-full h-fit flex flex-col md:flex-row items-start justify-start gap-8'
              }
            >
              <article className={'order-2 md:order-1 w-full h-auto'}>
                <h2 className={'md:m-0'}>Simple, Easy Recipes for All</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ipsam voluptates facere enim reprehenderit! Voluptatem maiores
                  deleniti quo? Eligendi quo ad vero laudantium eveniet
                  voluptatibus iusto, saepe obcaecati quaerat labore quibusdam
                  impedit earum laboriosam, sit harum, dolore eaque excepturi
                  optio ullam! Fuga dolor eos cupiditate temporibus sint maiores
                  laboriosam magni nemo nihil sunt dicta totam tempore ipsa
                  optio natus quae autem officia ipsum, accusamus earum modi
                  quia animi omnis ad? Quisquam corporis quasi numquam
                  perferendis cum, saepe est, praesentium suscipit, recusandae
                  rerum totam! Nisi, molestias suscipit debitis quibusdam dolor
                  exercitationem, atque alias, illum natus sequi expedita eius
                  repellendus quasi facilis.
                </p>
              </article>
              <Image
                src={''}
                alt={''}
                className={
                  'order-1 md:order-2 aspect-[1/1] sm:aspect-[16/6] w-full h-auto object-cover border-2'
                }
              />
            </div>
          </Container>
        </section>
        <section className={'px-4 pb-[5rem]'}>
          <Container>
            <h2>An Incredible Group of Foodies</h2>
            <ul
              className={
                'w-full h-fit grid grid-cols-3 md:grid-cols-6 auto-rows-fr gap-4'
              }
            >
              {[...Array(12)].map((_) => {
                return (
                  <li
                    key={`team_member_${Math.random()}`}
                    className={
                      'w-full h-fit flex flex-col items-center justify-start gap-1'
                    }
                  >
                    <Avatar
                      image={''}
                      size={'lg'}
                    />
                    <strong>Person ##</strong>
                    <small>This Ones Role</small>
                  </li>
                );
              })}
            </ul>
            <article className={'mt-[3rem]'}>
              <strong className={'block mb-[1rem]'}>
                Operating from NYC, Dubai & London
              </strong>
              <p className={'text-sm'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                minima unde rem consequatur esse alias neque vero, voluptate ea,
                corporis delectus ad soluta sint. Aspernatur molestiae ad
                accusamus. Cum reprehenderit eveniet voluptatum nisi suscipit
                laudantium nostrum, qui nemo quasi. In beatae optio cupiditate
                impedit facere quo repudiandae aliquid accusamus modi?
              </p>
            </article>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
