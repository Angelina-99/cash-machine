const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cashMachine = require("./src/cashMachine");
const routes = require("./src/routes");

let cashMachineMoney = cashMachine.cashMachine();

app.use((req, res, next) => {
    req.cashMachineMoney = cashMachineMoney;
    next();
});

app.use(routes);

app.listen(port);