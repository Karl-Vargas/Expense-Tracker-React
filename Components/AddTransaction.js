import React, {useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransactions } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount: +amount
        }

        addTransactions(newTransaction);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text">Comment</label>
            <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
             placeholder="Enter comment..."/>
        </div>
        <div className="form-control">
        <label htmlFor="amount">
            Amount <br></br>
        </label>
        <input type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)} 
         placeholder="Enter amount..."/>
        </div>
        <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
