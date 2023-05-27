import ChartContainer from "../ChartContainer/ChartContainer";
import ExpenseList from "../ExpenseList/ExpenseList";
import FormFilterYear from "../FormFilterYear/FormFilterYear";
import "./ExpenseContainer.css"

const ExpenseContainer = (props) => {
    const { expenseList, currentYear, setCurrentYear, filtered, setFiltered, filteredMonthJan, setFilteredMonthJan, filteredMonthFeb, setFilteredMonthFeb, filteredMonthMar, setFilteredMonthMar, filteredMonthApr, setFilteredMonthApr, filteredMonthMay, setFilteredMonthMay, filteredMonthJun, setFilteredMonthJun, filteredMonthJul, setFilteredMonthJul, filteredMonthAug, setFilteredMonthAug, filteredMonthSep, setFilteredMonthSep, filteredMonthOct, setFilteredMonthOct, filteredMonthNov, setFilteredMonthNov, filteredMonthDec, setFilteredMonthDec, onUpdateName, onUpdateAmount, onDeleteExpense } = props

    return <div className="expense-container">
        <FormFilterYear setCurrentYear={setCurrentYear} />
        <ChartContainer filtered={filtered} filteredMonthJan={filteredMonthJan} setFilteredMonthJan={setFilteredMonthJan} filteredMonthFeb={filteredMonthFeb} setFilteredMonthFeb={setFilteredMonthFeb} filteredMonthMar={filteredMonthMar} setFilteredMonthMar={setFilteredMonthMar} filteredMonthApr={filteredMonthApr} setFilteredMonthApr={setFilteredMonthApr} filteredMonthMay={filteredMonthMay} setFilteredMonthMay={setFilteredMonthMay} filteredMonthJun={filteredMonthJun} setFilteredMonthJun={setFilteredMonthJun} filteredMonthJul={filteredMonthJul} setFilteredMonthJul={setFilteredMonthJul}
            filteredMonthAug={filteredMonthAug} setFilteredMonthAug={setFilteredMonthAug} filteredMonthSep={filteredMonthSep} setFilteredMonthSep={setFilteredMonthSep} filteredMonthOct={filteredMonthOct}
            setFilteredMonthOct={setFilteredMonthOct} filteredMonthNov={filteredMonthNov} setFilteredMonthNov={setFilteredMonthNov} filteredMonthDec={filteredMonthDec} setFilteredMonthDec={setFilteredMonthDec} />
        <ExpenseList expenseList={expenseList} currentYear={currentYear} filtered={filtered} setFiltered={setFiltered} onUpdateName={onUpdateName} onUpdateAmount={onUpdateAmount} onDeleteExpense={onDeleteExpense} />
    </div>
}

export default ExpenseContainer;