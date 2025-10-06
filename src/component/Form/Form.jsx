import React from 'react';
import './Form.css'

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');

    const onChangeCountry = (e) => {
        setCountry(e.target.value);

    }

    const onChangeStreer = (e) => {
        setStreet(e.target.value);

    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value);

    }

    return (
        <div className="form" >
            <h3>Введіть ваші дані</h3>
            <input className={"input"}
                   type={"text"}
                   placeholder={'Місто'}
                   value={country}
                   onChange={onChangeCountry}
            />
            
            <input className={"input"} 
                   type={"text"}
                   placeholder={'Вулиця'}
                   value={street}
                   onChange={onChangeStreer}
            />
            <select value={subject} onChange={onChangeSubject} className={"select"}>
                <option value={"physical"}>Фіз.лице</option>
                <option value={"legal"}>Юр.Лице</option>
            </select>
        </div>
    );
};

export default Form;