import { get } from "./api";

export const getSearchBarang = async (url) => {      
  return await get(url);
}