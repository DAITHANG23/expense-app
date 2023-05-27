import './App.css';
import Header from './components/Header/Header';
import ExpenseContainer from './components/ExpenseContainer/ExpenseContainer';
import FormModal from './components/FormModal/FormModal';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

function App() {

  const [expenseList, setExpenseList] = useState([])
  const [currentYear, setCurrentYear] = useState("")
  const [filtered, setFiltered] = useState([]);
  const [filteredMonthJan, setFilteredMonthJan] = useState([]);
  const [filteredMonthFeb, setFilteredMonthFeb] = useState([]);
  const [filteredMonthMar, setFilteredMonthMar] = useState([]);
  const [filteredMonthApr, setFilteredMonthApr] = useState([]);
  const [filteredMonthMay, setFilteredMonthMay] = useState([]);
  const [filteredMonthJun, setFilteredMonthJun] = useState([]);
  const [filteredMonthJul, setFilteredMonthJul] = useState([]);
  const [filteredMonthAug, setFilteredMonthAug] = useState([]);
  const [filteredMonthSep, setFilteredMonthSep] = useState([]);
  const [filteredMonthOct, setFilteredMonthOct] = useState([]);
  const [filteredMonthNov, setFilteredMonthNov] = useState([]);
  const [filteredMonthDec, setFilteredMonthDec] = useState([]);

  const onAddNewExpenseList = (expenseItem) => {
    const newExpense = {
      ...expenseItem,
      id: uuidv4(),
    };

    const newExpenseList = [...expenseList, newExpense]
    setExpenseList(newExpenseList)

  }

  const onUpdateName = (updateName, id) =>{
    const todoIndex = expenseList.findIndex((itemId) =>{
      return itemId.id === id
    })

    const updateNameItem = [...expenseList]
    updateNameItem[todoIndex]={
      ...updateNameItem[todoIndex],
      name: updateName
    }

    setExpenseList(updateNameItem)
    setFiltered(updateNameItem)
  }

  const onUpdateAmount = (updateAmount, id) =>{
    const todoIndex = expenseList.findIndex((itemId) =>{
      return itemId.id === id
    })

    const updateAmountItem = [...expenseList]
    updateAmountItem[todoIndex]={
      ...updateAmountItem[todoIndex],
      amount: updateAmount
    }

    // setExpenseList(updateAmountItem)
    setFiltered(updateAmountItem)
  }

  const onDeleteExpense = (expenseId) => {
    const expenseItem = filtered.filter((itemId) =>{
      return itemId.id !== expenseId
    })
    setExpenseList(expenseItem)
    setFiltered(expenseItem)
  }

  return (
    <div className="App">
      <main>
        <Header />
        <ExpenseContainer expenseList={expenseList} currentYear={currentYear} setCurrentYear={setCurrentYear} filtered={filtered} setFiltered={setFiltered} filteredMonthJan={filteredMonthJan} setFilteredMonthJan={setFilteredMonthJan} filteredMonthFeb={filteredMonthFeb} setFilteredMonthFeb={setFilteredMonthFeb} filteredMonthMar={filteredMonthMar} setFilteredMonthMar={setFilteredMonthMar} filteredMonthApr={filteredMonthApr} setFilteredMonthApr={setFilteredMonthApr} filteredMonthMay={filteredMonthMay} setFilteredMonthMay={setFilteredMonthMay} filteredMonthJun={filteredMonthJun} setFilteredMonthJun={setFilteredMonthJun} filteredMonthJul={filteredMonthJul} setFilteredMonthJul={setFilteredMonthJul}
        filteredMonthAug={filteredMonthAug} setFilteredMonthAug={setFilteredMonthAug} filteredMonthSep={filteredMonthSep} setFilteredMonthSep={setFilteredMonthSep} filteredMonthOct={filteredMonthOct} 
        setFilteredMonthOct={setFilteredMonthOct} filteredMonthNov={filteredMonthNov} setFilteredMonthNov={setFilteredMonthNov} filteredMonthDec={filteredMonthDec} setFilteredMonthDec={setFilteredMonthDec}
        onUpdateName={onUpdateName} onUpdateAmount={onUpdateAmount} onDeleteExpense={onDeleteExpense}/>
      </main>

      <FormModal onAddExpense={onAddNewExpenseList} />
    </div>
  );
}

export default App;
