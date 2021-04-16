const express = require("express");
const cors = require("cors");
const low = require("lowdb");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const loginRouter = require("./routes/login");
const usersRouter = require("./routes/users");

const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync('./login_users.json');
const login_users = low(adapter);

login_users.defaults({ users: [] }).write();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js']
}

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.login_users = login_users;

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

module.exports = app


if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
