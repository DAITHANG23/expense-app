import ChartContainer from "../ChartContainer/ChartContainer";
import ExpenseList from "../ExpenseList/ExpenseList";
import FormFilterYear from "../FormFilterYear/FormFilterYear";
import "./ExpenseContainer.css";

const ExpenseContainer = (props) => {
  const {
    expenseList,
    currentYear,
    setCurrentYear,
    filtered,
    setFiltered,

    onUpdateName,
    onUpdateAmount,
    onDeleteExpense,
  } = props;

  return (
    <div className="expense-container">
      <FormFilterYear setCurrentYear={setCurrentYear} />
      <ChartContainer filtered={filtered} />
      {filtered.length === 0 && (
        <p style={{ color: "white", fontSize: "20px", paddingTop: "50px" }}>
          No have expense
        </p>
      )}
      <ExpenseList
        expenseList={expenseList}
        currentYear={currentYear}
        filtered={filtered}
        setFiltered={setFiltered}
        onUpdateName={onUpdateName}
        onUpdateAmount={onUpdateAmount}
        onDeleteExpense={onDeleteExpense}
      />
    </div>
  );
};

export default ExpenseContainer;
