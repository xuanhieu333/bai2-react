import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
// import moment from 'moment';
// import 'react-datetime/css/react-datetime.css';

const BodyLeft = ({ addTodo, listTodo }) => {
    const [valueInput, setValueInput] = useState('');
    const [valueInputDate, setValueInputDate] = useState('');
    // useEffect(() => {
    //     console.log("render lần 1")
    //     return () => {
    //         console.log("render lần cuối")
    //     }
    // }, [])

    const handleSubmit = e => {
        e.preventDefault();
        const newTodo = {
            id: uuidv4(),
            content: valueInput,
            status: valueInputDate
        }
        const dateBefore = moment(valueInputDate).isBefore(moment(), "day");
        if (!dateBefore) {
            addTodo(newTodo);
            setValueInput('');
            setValueInputDate('')
            const currentTodo = [...listTodo, newTodo];
            localStorage.setItem("todos", JSON.stringify(currentTodo));
        }
    }

    // const yesterday = moment().subtract(1, 'day');
    // const disablePastDt = current => {
    //     return current.isAfter(yesterday);
    // };
    // const notPastDay = () => {
    //     const datep = $('#datepicker').val();

    //     if (Date.parse(datep) - Date.parse(new Date()) < 0) {
    //         // do something
    //     }
    // }

    return (
        <form className="body__left" onSubmit={handleSubmit}>
            <div className="body__left--content">
                <label>Nội Dung:</label>
                <input value={valueInput} type="text" placeholder="Nhập nôi dung cần nhắc" required onChange={(e) => setValueInput(e.target.value)} />
            </div>
            <div className="body__left-block">
                <div className="body__left--date">
                    <label>Ngày nhắc:</label>
                    <input value={valueInputDate} type="date" required onChange={(e) => setValueInputDate(e.target.value)} />
                </div>
                <button className="body__left--btn"
                    type="submit">Lưu ngay</button>
            </div>
        </form>
    );
}

export default BodyLeft;