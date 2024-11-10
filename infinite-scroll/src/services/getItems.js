const API_URL = '';

const fromApiResponseToItem = apiResponse => {
  const { pages, data = [] } = apiResponse
  if (Array.isArray(data)) {
    const item = { pages, data };
    return item
  }
  return []
}

const getItemsAsync = async (limit, page, keyword) => {
  const apiURL = `http://localhost:3000/items?_page=${page}&_per_page=${limit}&title=${keyword}`
  try{
    const response = await fetch(apiURL); 
    if(response.ok){
      const data = await response.json();
      return fromApiResponseToItem(data);
    } 
    console.log('Promise resolved but HTTP status failed')
  } catch {
    console.log('Promise rejected')
  }
  return [];
}

const getItems = async({
  limit = 10,
  keyword = "",
  page = 1
} = {}) => {
  const response = await getItemsAsync(limit, page, keyword)
  return response;
}

export default getItems;

// TODO: funcion usando el fetch + then;
// export default function getItems({
//   limit = 10,
//   keyword = "",
//   page = 1
// } = {}) {
//   return getItemsThen(limit, page, keyword);
// }

// const getItemsThen = (limit, page, keyword) => {
//   const apiURL = `http://localhost:3000/items?_page=${page}&_per_page=${limit}&title=${keyword}`
//   return fetch(apiURL).then((res) => res.json()).then(fromApiResponseToItem)
// }