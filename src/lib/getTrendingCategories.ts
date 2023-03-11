import { CategoriesResponse, Category } from '@/Types/RecipeApiTypes';

const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export default async function getTrendingCategories() {
  try {
    const response = await fetch(ENDPOINT);
    const jsonResult: CategoriesResponse = await response.json();
    const trendingCategories: Array<Category> = [];

    const chosed: Array<number> = [];
    for (let i = 0; i < 6; i++) {
      let index = 0;
      do {
        index = Math.floor(Math.random() * jsonResult.categories.length);
      } while (chosed.includes(index));
      chosed.push(index);

      const category = {
        idCategory: jsonResult.categories[index].idCategory,
        strCategory: jsonResult.categories[index].strCategory,
        strCategoryThumb: jsonResult.categories[index].strCategoryThumb,
      };

      trendingCategories.push(category);
    }
    return trendingCategories;
  } catch (error) {
    console.log(error);
    return [];
  }
}
