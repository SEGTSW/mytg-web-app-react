import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <div className="form" >
            <h3>Введіть ваші дані</h3>
            <input className={"input"}
                   type={"text"}
                   placeholder={'Місто'}
            />
            
            <input className={"input"} 
                   type={"text"}
                   placeholder={'Вулиця'}
            />
            <select className={"select"}>
                <option value={"physical"}>Фіз.лице</option>
                <option value={"legal"}>Юр.Лице</option>
            </select>
        </div>
    );
};

export default Form;