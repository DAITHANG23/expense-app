
import "./FormModal.css"
import { useState } from "react";
const FormModal = (props) => {

    const [expenseValue, setExpenseValue ] = useState(
        {
            name: "",
            amount: "",
            createTime: ""
        }
    );

    const onChangeHandle = (e) => {
        const { name, value } = e.target

        setExpenseValue({
            ...expenseValue,
            [name]: value
        })
    }

    const onSubmitAddNewExpense = (e) => {
        e.preventDefault();

        props.onAddExpense(expenseValue);

        setExpenseValue({
            name: "",
            amount: "",
            createTime: ""
        })
        
    }
    return (
        <div className="modal fade modal-lg" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onSubmitAddNewExpense}>
                            <div className="form-element">
                                <label
                                    htmlFor='name'
                                    style={{ marginRight: "113px" }}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter name here..."
                                    name="name"
                                    id='name'
                                    value={expenseValue.name}
                                    onChange={onChangeHandle}
                                >
                                </input>
                            </div>

                            <div className="form-element">
                                <label
                                    htmlFor='amount'
                                    style={{ marginRight: "100px" }}>
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter amount here..."
                                    name="amount"
                                    id='amount'
                                    value={expenseValue.amount}
                                    onChange={onChangeHandle}
                                ></input>
                            </div>

                            <div className="form-element">
                                <label
                                    htmlFor='createTime'
                                    style={{ marginRight: "123px" }}>
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="createTime"
                                    id='createTime'
                                    value={expenseValue.createTime}
                                    onChange={onChangeHandle}
                                ></input>
                            </div>

                            <div className="form-button">
                                <button>ADD</button>
                                <button>CANCEL</button>
                            </div>


                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default FormModal;