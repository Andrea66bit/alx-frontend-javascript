import BudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp,capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const FullBudget = {
    ... budget,
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`,
};

return fullBudget;
}
