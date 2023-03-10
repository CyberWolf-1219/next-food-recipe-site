import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import heroImage from '../../assets/home_hero.jpeg';
import heroIcon from '../../assets/hero_icon.png';

function HomeHeroSection() {
  const timeline = useRef<GSAPTimeline>();
  const parentElement = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      timeline.current = gsap
        .timeline({ defaults: { duration: 0.5, ease: 'power3.out' } })
        .fromTo(
          '.hero_section__image',
          { yPercent: -20, opacity: 0 },
          { yPercent: 0, opacity: 1, delay: 0.2 }
        )
        .fromTo(
          '.hero_section__heading',
          { yPercent: -50, opacity: 0 },
          { yPercent: 0, opacity: 1, delay: 2 }
        )
        .fromTo('hr', { scaleX: 0 }, { scaleX: 1 })
        .fromTo(
          '.hero_section__icon',
          { yPercent: 30, opacity: 0 },
          { yPercent: 0, opacity: 1 }
        );
    }, parentElement);

    return () => {
      gsapContext.revert();
    };
  }, []);

  return (
    <section
      ref={parentElement}
      className={`relative z-[2] aspect-[16/9] w-full h-auto mb-[5rem]`}>
      <Image
        src={heroImage.src}
        alt={''}
        fill={true}
        className={'hero_section__image brightness-50'}
      />
      <h1
        className={
          'hero_section__heading absolute top-[50%] left-[50%] translate-x-[-50%] mx-auto text-center text-white'
        }>
        We Sure Love Food!
      </h1>
      <hr
        className={
          'absolute top-[57%] left-[50%] translate-x-[-50%] w-[50%] border-white border-[2px]'
        }
      />
      <Image
        src={heroIcon.src}
        alt={''}
        width={100}
        height={100}
        className={
          'hero_section__icon absolute top-[35%] left-[50%] translate-x-[-50%]'
        }
      />
    </section>
  );
}

export default HomeHeroSection;
