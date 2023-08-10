// ./server/api/getProduct.ts

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  console.log("id", id);

  try {
    const data = await $fetch(`https://dummyjson.com/product/${id}`);
    return data;
  } catch (error) {
    console.log("error", error);
    return {};
  }
});
