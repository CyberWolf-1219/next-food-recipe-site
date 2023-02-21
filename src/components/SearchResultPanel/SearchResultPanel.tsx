import React from 'react';
import Container from '../Container/Container';
import RecipeCard from '../RecipeCard/RecipeCard';

type SearchResult = {
  image: string;
  name: string;
  likes: number;
  comments: number;
  createdDate: number;
  authorImage: string;
  authorName: string;
};

interface iSearchResultPanel {
  resultsArray: Array<SearchResult>;
}

function SearchResultPanel(props: iSearchResultPanel) {
  return (
    <section className={'w-full min-h-screen px-4'}>
      <Container>
        <div>
          <h2>Recipes</h2>
          <ul
            className={
              'w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:md:grid-cols-3 auto-rows-fr gap-4'
            }
          >
            {props.resultsArray.map((resultObj) => {
              return (
                <li key={`search_recipe_${Math.random()}`}>
                  <RecipeCard
                    image={resultObj.image}
                    name={resultObj.name}
                    likes={resultObj.likes}
                    comments={resultObj.comments}
                    createdDate={resultObj.createdDate}
                    authorImage={resultObj.image}
                    authorName={resultObj.authorName}
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

export default SearchResultPanel;
