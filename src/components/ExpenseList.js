// src/components/ExpenseList.js
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, removeExpense }) => {
  if (!expenses || expenses.length === 0) {
    return <p>No expenses to display</p>;
  }

  return (
    <ul className="ExpenseList">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} removeExpense={removeExpense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
