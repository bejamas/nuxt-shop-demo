// ./server/middleware/log.ts
export default defineEventHandler((event) => {
  console.log("New request: " + getRequestURL(event));
});
