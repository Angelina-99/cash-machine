const express = require("express");
const router = express.Router();

router.get("/get-money", async (req, res) => {
    if (!req.cashMachineMoney) {
        res.json({error: "Ошибка банкомата"});
        return;
    }
    if (!req.query || !req.query.sum) {
        res.json({error: "Не указана сумма"});
        return;
    }
    const sum = Number(req.query.sum);
    if (!sum || sum <= 0) {
        res.json({error: "Не корректно указана сумма"});
        return;
    }
    const cashToGive = req.cashMachineMoney(sum);
    res.json(cashToGive);
});

module.exports = router;