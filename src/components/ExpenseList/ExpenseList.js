import { useEffect} from "react"
import ExpenseItem from "../ExpenseItem/ExpenseItem"
import "./ExpenseList.css"

const ExpenseList = (props) => {
    const { expenseList, currentYear, filtered, setFiltered, onUpdateName, onUpdateAmount, onDeleteExpense } = props

    useEffect(() => {
        const filteredList = expenseList.filter((expenseItem) =>
            new Date(expenseItem.createTime).getFullYear() === (+currentYear)
        )
        setFiltered(filteredList)
    }, [currentYear])

    const listExpense = filtered.map((expenseItem) => {
        const { name, amount, createTime, id } = expenseItem;

        return (
            <ExpenseItem
                name={name}
                amount={amount}
                createTime={createTime}
                key={id}
                id={id}
                onUpdateName={onUpdateName}
                onUpdateAmount={onUpdateAmount}
                onDeleteExpense={onDeleteExpense}
            />
        )
    })

    return <div className="expense-list">
        {listExpense}
    </div>
}

export default ExpenseList;