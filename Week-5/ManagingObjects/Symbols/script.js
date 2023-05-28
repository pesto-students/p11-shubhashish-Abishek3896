function generateId() {
  let Id = 0;
  return function () {
    Id += 1;
    const value = `TRANSACTION_ID_${Id}`;
    return Symbol(value);
  };
}

const generateTransactionId = generateId();
const transaction1 = generateTransactionId();
console.log(transaction1);
const transaction2 = generateTransactionId();
console.log(transaction2); // Symbol(TRANSACTION_ID_2)
const transaction3 = generateTransactionId();
console.log(transaction3); // Symbol(TRANSACTION_ID_3)
