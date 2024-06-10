// src/components/ExpenseItem.js
import React from 'react';

const ExpenseItem = ({ expense, removeExpense }) => {
  if (!expense) {
    return null;
  }

  return (
    <li className="ExpenseItem">
      <div>
        <p>Description: {expense.description}</p>
        <p>Amount: ${expense.amount.toFixed(2)}</p>
        <p>Category: {expense.category}</p>
      </div>
      <button onClick={() => removeExpense(expense.id)}>Remove</button>
    </li>
  );
};

export default ExpenseItem;
