import React, { useEffect } from 'react';
import Container from '../Container/Container';
import Link from 'next/link';
import CategoryCard from '../CategoryCard/CategoryCard';
import useFetch from '@/hooks/useFetch';

function PopularCategorySection() {
  const [execute, result] = useFetch();

  useEffect(() => {
    execute('/api/recipes/trending_categories', {});
  }, [execute]);

  return (
    <section className={'px-2 lg:pb-[8rem]'}>
      <Container>
        <div className={'w-full h-fit'}>
          <h2>Popular Categories</h2>
          <ul
            className={
              'w-full h-fit grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-cols-min gap-4 items-center justify-items-center '
            }>
            {(result as { categories: Array<Category> })?.categories.map(
              (categoryObj) => {
                return (
                  <li
                    key={`popular_category_${Math.random()}`}
                    className={`w-full h-fit`}>
                    <Link
                      href={'#'}
                      className={`w-full h-fit`}>
                      <CategoryCard
                        category={categoryObj.strCategory}
                        image={categoryObj.strCategoryThumb}
                      />
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default PopularCategorySection;
