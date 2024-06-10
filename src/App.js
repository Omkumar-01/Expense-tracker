// src/App.js
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filterCategory, setFilterCategory] = useState('');

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const removeExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== id));
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.category.toLowerCase().includes(filterCategory.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <Filter filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
      <ExpenseList expenses={filteredExpenses} removeExpense={removeExpense} />
    </div>
  );
};

export default App;
