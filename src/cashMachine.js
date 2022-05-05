// Номиналы купюр с их количеством
const cashMachineMoney = [
    {
        rating: 1,
        count: 10,
    },
    {
        rating: 3,
        count: 10,
    },
    {
        rating: 5,
        count: 10,
    },
    {
        rating: 10,
        count: 10,
    },
    {
        rating: 50,
        count: 10,
    },
    {
        rating: 100,
        count: 10,
    },
    {
        rating: 500,
        count: 10,
    },
    {
        rating: 1000,
        count: 10,
    },
]

const cashMachine = () => {
    let money = cashMachineMoney.sort((a, b) => {
        if (a.rating > b.rating) {
            return -1;
          }
          if (a.rating < b.rating) {
            return 1;
          }
          return 0;
    })
    return (sum) => {
        let newCash = [];
        let cashToGive = {};
        let notCalculated = sum;
        money.forEach(item => {
            if (notCalculated >= item.rating && item.count !== 0) {
                const shouldGive = Math.floor(notCalculated / item.rating);
                const countToGive = shouldGive <= item.count ? shouldGive : item.count;
                notCalculated -= countToGive * item.rating;
                cashToGive[item.rating] = countToGive;
                newCash.push({
                    rating: item.rating,
                    count: item.count - countToGive
                });
            } else {
                newCash.push(item);
            }
        });
        if (notCalculated !== 0) {
            return { error: "Невозможно выдать данную сумму - нет нужных купюр" }
        }
        money = newCash;
        return cashToGive;
    }
}

module.exports = {
    cashMachine,
};
  