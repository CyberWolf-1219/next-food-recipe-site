import React, { useEffect, useRef } from 'react';
import Slider from '../Slider/Slider';
import Container from '../Container/Container';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function FeaturedRecipeSection() {
  const parentElement = useRef(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      const timeline = gsap
        .timeline({
          defaults: { duration: 0.5, ease: 'power3.out' },
          scrollTrigger: {
            trigger: parentElement.current,
            once: true,
            scrub: false,
            start: 'top 70%',
          },
        })
        .fromTo(
          '.featured_recipe_section__heading',
          { yPercent: 30, opacity: 0 },
          { yPercent: 0, opacity: 1 }
        );
    }, parentElement);

    return () => {
      gsapContext.revert();
    };
  });

  return (
    <section
      ref={parentElement}
      className={'w-full h-fit overflow-visible'}>
      <Container relative={true}>
        <h2 className={'featured_recipe_section__heading'}>Featured Recipes</h2>
      </Container>
      <Slider />
    </section>
  );
}

export default FeaturedRecipeSection;
