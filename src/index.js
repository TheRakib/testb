const app = require('./app');

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`😵 Server is listening on port http://localhost:${port}`);
});
