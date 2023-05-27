import { useState, useEffect, useRef } from "react";
import "./ExpenseItem.css"
import { FaEdit } from "react-icons/fa";
const ExpenseItem = (props) => {
    const { name, amount, createTime, onUpdateName, id, onUpdateAmount, onDeleteExpense } = props;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const year = new Date(createTime).getFullYear();
    const month = months[new Date(createTime).getMonth()];
    const date = new Date(createTime).getDate();

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingAmount, setIsEditingAmount] = useState(false);
    const [isEditingValue, setIsEditingValue] = useState(name);
    const [isEditingValueAmount, setisEditingValueAmount] = useState(amount)

    const todoInputNameRef = useRef(null)
    const todoInputAmountRef = useRef(null)

    const onEditingName = () => {
        setIsEditingName(true);

    }

    const onEditingAmount = () => {
        setIsEditingAmount(true);
    }

    const onChangeEditName = (e) => {
        setIsEditingValue(e.target.value);
    }

    const onChangeEditAmount = (e) => {
        setisEditingValueAmount(e.target.value)
    }

    const onUpdatingHandleName = () => {
        onUpdateName(isEditingValue, id)
        setIsEditingName(false)
    }

    const onUpdatingHandleAmount = () => {
        onUpdateAmount(isEditingValueAmount, id)
        setIsEditingAmount(false)
    }

    useEffect(() => {
        if (isEditingName && todoInputNameRef) {
            todoInputNameRef && todoInputNameRef.current.focus();
        }

        if (isEditingAmount && todoInputAmountRef) {
            todoInputAmountRef && todoInputAmountRef.current.focus();
        }
    }, [isEditingName, isEditingAmount]);

    const onKeyDownHandlerName = (e) => {
        if (e.key === 'Enter') {
            onUpdatingHandleName();
            
        }
        if (e.key === 'Escape') {
            setIsEditingValue(name)
            // setIsEditing(false);
        }
    }

        const onKeyDownHandlerAmount = (e) => {
            if (e.key === 'Enter') {
                onUpdatingHandleAmount();
            }
            if (e.key === 'Escape') {
                setisEditingValueAmount(amount)
                
            }
        }

        return <div className="expense-item" >
            <div className="expense-date">
                <p>{month}</p>
                <p>{year}</p>
                <p>{date}</p>
            </div>

            <div style={{ width: "50%", display: "flex" }}>
                {
                    isEditingName ? (
                        <input
                            onChange={onChangeEditName}
                            name={name}
                            value={isEditingValue}
                            onBlur={onUpdatingHandleName}
                            onKeyDown={onKeyDownHandlerName}
                            ref={todoInputNameRef}
                        />
                    ) : (<p className="expense-title">{name}</p>)
                }
                <div style={{
                    width: "30px",
                    fontSize: "30px",
                    cursor: "pointer",
                    marginTop: "35px",
                    marginLeft: "10px",
                    color: "greenyellow"
                }}>
                    <FaEdit onClick={onEditingName} />
                </div>

            </div>

            <div style={{ marginLeft: "30px" }}>
                {
                    isEditingAmount ? (
                        <input
                            onChange={onChangeEditAmount}
                            name={amount}
                            value={isEditingValueAmount}
                            onBlur={onUpdatingHandleAmount}
                            onKeyDown={onKeyDownHandlerAmount}
                            ref={todoInputAmountRef}
                        />
                    ) : (<p className="amount">$ {amount}</p>)
                }

            </div>

            <div className="editing">
                <div style={{
                    width: "30px",
                    fontSize: "30px",
                    cursor: "pointer"
                }}>
                    <FaEdit onClick={onEditingAmount} />
                </div>

                <button onClick={() => onDeleteExpense(id)} type="button" className=" btn-danger btn rounded-circle" aria-label="Close" style={{
                    height: "45px"
                }}>X</button>
            </div>
        </div>
    }

    export default ExpenseItem;