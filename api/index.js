const express = require("express");
const cors = require("cors");
const low = require("lowdb");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const loginRouter = require("./routes/login");
const usersRouter = require("./routes/users");

const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync(`${__dirname}/login_users.json`);
const login_users = low(adapter, {storage: { read: FileSync.read }});

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      version: '1.0.0',
    },
  },
  servers: [
    {
      url: process.env.BASE_URL,
    },
  ],
  apis: [`${__dirname}/routes/*.js`]
}

const specs = swaggerJsDoc(options);

const app = express();

app.login_users = login_users;

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use("/api", swaggerUI.serve, swaggerUI.setup(specs));

module.exports = app


if (require.main === module) {
  const port = process.env.PORT
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
