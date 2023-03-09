import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Avatar from '@/components/Avatar/Avatar';
import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';

import heroImage from './../assets/about_us_hero.jpg';
import sectionTwoImage from './../assets/about_us_image_2.jpg';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
  const timeline = useRef<GSAPTimeline>();
  const parentElement = useRef(null);

  // MOVE IN ANIMATION
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      const timeline_1 = gsap
        .timeline({
          defaults: { duration: 0.5, stagger: 0.3, ease: 'power3.out' },
        })
        .fromTo('h1', { opacity: 0, yPercent: 50 }, { opacity: 1, yPercent: 0 })
        .fromTo(
          '.about_section_one__image',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0 }
        )
        .fromTo(
          '.about_section_one__text',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0 }
        );

      const timeline_2 = gsap
        .timeline({
          defaults: { duration: 0.5, ease: 'power3.out' },
          scrollTrigger: {
            trigger: '.about_section_two',
            scrub: false,
            once: true,
            start: 'top 50%',
          },
        })
        .fromTo(
          '.about_section_two__heading',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0 }
        )
        .fromTo(
          '.about_section_two__text',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0 }
        )
        .fromTo(
          '.about_section_two__image',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0 }
        );

      const timeline_3 = gsap
        .timeline({
          defaults: { duration: 0.5, ease: 'power3.out' },
          scrollTrigger: {
            trigger: '.about_section_three',
            scrub: false,
            once: true,
            start: 'top 50%',
          },
        })
        .fromTo(
          '.about_section_three__heading',
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0 }
        )
        .fromTo(
          '.about_section_three li',
          { yPercent: 30, opacity: 0 },
          { yPercent: 0, opacity: 1, stagger: 0.3 }
        )
        .fromTo(
          '.about_section_three__subheading',
          { yPercent: 50, opacity: 0 },
          { yPercent: 0, opacity: 1, stagger: 0.3 }
        )
        .fromTo(
          '.about_section_three__subtext',
          { yPercent: 30, opacity: 0 },
          { yPercent: 0, opacity: 1, stagger: 0.3 }
        );
    }, parentElement);

    return () => {
      gsapContext.revert();
    };
  });

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
      <main
        ref={parentElement}
        className={'w-full min-h-screen'}>
        <section className={'px-4 mb-[5rem]'}>
          <Container>
            <h2>About</h2>
            <hr className={'border-[1px] border-secondary/50'} />
            <h1>
              We&apos;re group of foodies who love cooking and the internet
            </h1>
            <div
              className={
                'about_section_one__image relative aspect-[1/1] sm:aspect-[16/6] w-full h-auto mb-[1rem]'
              }>
              <Image
                src={heroImage.src}
                alt={''}
                fill={true}
                className={'object-cover object-left'}
              />
            </div>
            <p className={'about_section_one__text'}>
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
        <section className={'about_section_two px-4 mb-[5rem]'}>
          <Container>
            <div
              className={
                'w-full h-fit flex flex-col md:flex-row items-start justify-start gap-8'
              }>
              <article className={'order-2 md:order-1 w-full h-auto'}>
                <h2 className={'about_section_two__heading md:m-0'}>
                  Simple, Easy Recipes for All
                </h2>
                <p className={'about_section_two__text'}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ipsam voluptates facere enim reprehenderit! Voluptatem maiores
                  deleniti quo? Eligendi quo ad vero laudantium eveniet
                  voluptatibus iusto, saepe obcaecati quaerat labore quibusdam
                  impedit earum laboriosam, sit harum, dolore eaque excepturi
                  optio ullam! Fuga dolor eos cupiditate temporibus sint maiores
                  laboriosam magni nemo nihil sunt dicta totam tempore ipsa
                  optio natus quae autem officia ipsum, accusamus earum modi
                  quia animi omnis ad? Quisquam corporis quasi numquam
                  perferendis cum, saepe est
                </p>
              </article>
              <div
                className={
                  'about_section_two__image relative order-1 md:order-2 aspect-[1/1] sm:aspect-[4/3] w-full h-full md:mt-[1.5rem]'
                }>
                <Image
                  src={sectionTwoImage.src}
                  alt={''}
                  fill={true}
                  className={'object-cover'}
                />
              </div>
            </div>
          </Container>
        </section>
        <section className={'about_section_three px-4 pb-[5rem]'}>
          <Container>
            <h2 className={'about_section_three__heading'}>
              An Incredible Group of Foodies
            </h2>
            <ul
              className={
                'w-full h-fit grid grid-cols-3 md:grid-cols-6 auto-rows-fr gap-4'
              }>
              {[...Array(12)].map((_) => {
                return (
                  <li
                    key={`team_member_${Math.random()}`}
                    className={
                      'w-full h-fit flex flex-col items-center justify-start gap-1'
                    }>
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
            <article className={' mt-[3rem]'}>
              <strong
                className={'about_section_three__subheading block mb-[1rem]'}>
                Operating from NYC, Dubai & London
              </strong>
              <p className={'about_section_three__subtext text-sm'}>
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
