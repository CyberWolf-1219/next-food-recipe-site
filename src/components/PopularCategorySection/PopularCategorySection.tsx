import React, { useState } from 'react';
import Container from '../Container/Container';
import Link from 'next/link';
import CategoryCard from '../CategoryCard/CategoryCard';

type popularCategory = {
  category: string;
  iamge: string;
};

function PopularCategorySection() {
  const [categories, setCategories] = useState<Array<popularCategory>>([
    {
      category: 'Soup',
      iamge: '',
    },
    {
      category: 'Soup',
      iamge: '',
    },
    {
      category: 'Soup',
      iamge: '',
    },
    {
      category: 'Soup',
      iamge: '',
    },
    {
      category: 'Soup',
      iamge: '',
    },
    {
      category: 'Soup',
      iamge: '',
    },
  ]);

  return (
    <section className={'px-2'}>
      <Container>
        <div>
          <h2>Popular Categories</h2>
          <ul
            className={
              'w-full h-fit grid grid-cols-3 md:grid-cols-4 auto-cols-min gap-4 items-center justify-items-center'
            }
          >
            {categories.map((categoryObj) => {
              return (
                <li
                  key={`popular_category_${Math.random()}`}
                  className={`w-full h-fit`}
                >
                  <Link
                    href={'#'}
                    className={`w-full h-fit`}
                  >
                    <CategoryCard
                      category={categoryObj.category}
                      image={''}
                    />
                  </Link>
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
