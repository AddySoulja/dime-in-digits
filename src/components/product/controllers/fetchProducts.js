export const fetchProducts = async () => {
  let data = await fetch("https://fakestoreapi.com/products");
  data = await data.json();
  return data;
};
