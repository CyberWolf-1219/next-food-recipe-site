import React, { useEffect, useState, useRef } from 'react';
import Container from '../Container/Container';
import CategoryCard from '../CategoryCard/CategoryCard';
import useFetch from '@/hooks/useFetch';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function AllCategoriesSection() {
  const execute = useFetch();
  const [result, setResult] = useState<{ categories: Array<Category> }>({
    categories: [],
  });

  const parentElement = useRef(null);
  const timeline = useRef<GSAPTimeline>();

  // MOVE IN ANIMATION
  useEffect(() => {
    const gsapContext = gsap.context(() => {
      timeline.current = gsap
        .timeline({
          defaults: { duration: 0.5, ease: 'power3.out', stagger: 0.2 },
        })
        .fromTo(
          'h2',
          { opacity: 0, yPercent: 100 },
          { opacity: 1, yPercent: 0 }
        )
        .fromTo(
          '.category_card_image',
          { rotateZ: 360, scale: 1.2, opacity: 0 },
          { rotateZ: 0, scale: 1, opacity: 1 }
        )
        .fromTo(
          '.category_card_title',
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1 },
          '<'
        );
    }, parentElement);

    return () => {
      gsapContext.revert();
    };
  }, [result]);

  useEffect(() => {
    (async () => {
      const fetchResult = await execute('/api/recipes/categories', {});
      setResult(fetchResult);
    })();
  }, [execute]);

  return (
    <section
      ref={parentElement}
      className={'px-4 pb-[4rem]'}>
      <Container>
        <div>
          <h2>Categories</h2>
          <ul
            className={
              'w-full h-fit grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-fr gap-4'
            }>
            {result.categories.map((categoryObj) => {
              return (
                <li
                  key={`category_card_${Math.random()}`}
                  className={'w-full h-full px-2 flex flex-row items-center'}>
                  <CategoryCard
                    image={categoryObj.strCategoryThumb}
                    category={categoryObj.strCategory}
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

export default AllCategoriesSection;
