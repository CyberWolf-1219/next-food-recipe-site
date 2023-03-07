import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import CategoryCard from '../CategoryCard/CategoryCard';
import useFetch from '@/hooks/useFetch';

function AllCategoriesSection() {
  const execute = useFetch();
  const [result, setResult] = useState<{ categories: Array<Category> }>({
    categories: [],
  });

  useEffect(() => {
    (async () => {
      const fetchResult = await execute('/api/recipes/categories', {});
      setResult(fetchResult);
    })();
  }, [execute]);

  return (
    <section className={'px-4 pb-[4rem]'}>
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
