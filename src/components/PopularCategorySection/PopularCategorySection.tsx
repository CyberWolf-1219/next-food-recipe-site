import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';

import Container from '../Container/Container';
import CategoryCard from '../CategoryCard/CategoryCard';
import useFetch from '@/hooks/useFetch';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function PopularCategorySection() {
  const execute = useFetch();
  const [result, setResult] = useState<{ categories: Array<Category> }>({
    categories: [],
  });
  const parentElement = useRef(null);
  const timeline = useRef<GSAPTimeline>();

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      timeline.current = gsap
        .timeline({
          defaults: { duration: 0.5, stagger: 0.25, ease: 'power3.out' },
          scrollTrigger: {
            trigger: parentElement.current,
            markers: false,
            start: 'top 70%',
            scrub: false,
            once: true,
          },
        })
        .fromTo('h2', { yPercent: 30, opacity: 0 }, { yPercent: 0, opacity: 1 })
        .fromTo(
          '.category_card',
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1 }
        );
    }, parentElement);

    return () => {
      gsapContext.revert();
    };
  }, [result]);

  useEffect(() => {
    (async () => {
      const fetchResult = await execute('/api/recipes/trending_categories', {});
      setResult(fetchResult);
    })();
  }, [execute]);

  return (
    <section
      ref={parentElement}
      className={'px-2 lg:mb-[5rem]'}>
      <Container>
        <div className={'w-full h-fit'}>
          <h2>Popular Categories</h2>
          <ul
            className={
              'w-full h-fit grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-cols-min gap-4 items-center justify-items-center '
            }>
            {result.categories.map((categoryObj) => {
              return (
                <li
                  key={`popular_category_${Math.random()}`}
                  className={`w-full h-fit`}>
                  <CategoryCard
                    category={categoryObj.strCategory}
                    image={categoryObj.strCategoryThumb}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default PopularCategorySection;
