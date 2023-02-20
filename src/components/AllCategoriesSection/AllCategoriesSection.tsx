import React, { useState } from 'react';
import Container from '../Container/Container';
import CategoryCard from '../CategoryCard/CategoryCard';

type Category = { image: string; name: string; link: string };

const dummyContent: Array<Category> = [
  { image: '', name: 'Chicken', link: '' },
  { image: '', name: 'Salad', link: '' },
  { image: '', name: 'Green', link: '' },
  { image: '', name: 'Soup', link: '' },
  { image: '', name: 'Noodles', link: '' },
  { image: '', name: 'Bites', link: '' },
  { image: '', name: 'Pastry', link: '' },
  { image: '', name: 'Cakes', link: '' },
  { image: '', name: 'Muffins', link: '' },
  { image: '', name: 'Quick Snack', link: '' },
];

function AllCategoriesSection() {
  const [categories, setCategories] = useState<Array<Category>>(dummyContent);

  return (
    <section className={'px-4 pb-[4rem]'}>
      <Container>
        <div>
          <h2>Categories</h2>
          <ul className={'w-full h-fit grid grid-cols-3 auto-rows-fr gap-4'}>
            {categories.map((categoryObj) => {
              return (
                <li
                  key={`category_card_${Math.random()}`}
                  className={
                    'w-full h-full px-2 flex flex-row items-center rounded-md border-2'
                  }
                >
                  <CategoryCard
                    image={categoryObj.image}
                    category={categoryObj.name}
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
