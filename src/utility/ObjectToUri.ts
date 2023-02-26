export default function objectToUri(parametersObj: RecipeRequestParameters) {
  console.log('Object', parametersObj, '\n');

  let uri: Array<string> = [];

  //   LOOP THORUGH EACH PROPERTY IN THE PARAMETERS OBJECT
  Object.keys(parametersObj).forEach((key) => {
    let value = parametersObj[key as keyof typeof parametersObj];

    // HANDLE IF VALUE IS A STRING OR BOOLEAN
    if (typeof value == 'string' || typeof value == 'boolean') {
      let encodedParameter = `${encodeURI(key)}=${value}`;
      console.log('PARAMETER: ', encodedParameter);
      uri.push(encodedParameter);
    }
    // HANDLE IF VALUE IS AN ARRAY
    else if (typeof value == 'object') {
      let encodedArray: Array<string> = [];

      for (let item of value) {
        let encodedItem = `${encodeURI(key)}=${encodeURI(item)}`;
        encodedArray.push(encodedItem);
      }
      console.log('ARRAY: ', encodedArray);
      uri.push(encodedArray.join('&'));
    }
  });

  return uri.join('&');
}
