import {
  RecipeApiResponse,
  RecipeRequestParameters,
} from '@/Types/RecipeApiTypes';
import objectToUri from '@/utility/ObjectToUri';

export default async function getTrendingRecipes(endpoint: string) {
  const parameters: RecipeRequestParameters = {
    beta: false,
    type: 'public',
    random: true,
    imageSize: 'LARGE',
    field: ['image', 'label', 'url'],
    diet: ['balanced'],
  };

  const encodedParameters = objectToUri(parameters);
  const finalURI = endpoint + encodedParameters;
  console.log('ENCODED URL: ', finalURI);

  const requestConfig: RequestInit = {
    method: 'GET',
  };

  try {
    const response = await fetch(finalURI, requestConfig);
    const jsonObject: RecipeApiResponse = await response.json();
    return jsonObject.hits.slice(0, 5);
  } catch (error) {
    return error;
  }
}
