import fastify from "fastify";

const app = fastify();

const PORT: number = Number(process.env.PORT) || 3333;

app.get("/tst", () => {
  return "Tst";
});

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`HTTP server running in the PORT: ${PORT}`);
  });
