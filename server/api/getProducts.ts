// ./server/api/getProducts.ts

export default defineEventHandler(async (event) => {
  try {
    const data = await $fetch("https://dummyjson.com/products/");
    return data;
  } catch (error) {
    console.log("error", error);

    return {
      products: [],
    };
  }
});
