import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: ''
  });
  const [result, setResult] = useState(null);
  const [risk, setRisk] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const calculate = () => {
    if (values.four === '' || values.five === '') {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    const z = (-3.601) + 1.044 * values.one + 1.502 * values.two + 0.581 * values.three + 0.217 * values.four;
    const P = (1 / (1 + Math.exp(-z))) * 100;
    setResult(P.toFixed(2));
    setRisk(P > 41.3 ? 'Высокий риск' : 'Низкий риск');
  };

  return (
    <div className="container">
      <h1 className='title'>Прогнозирование в первом триместре беременности поздних преждевременных спонтанных родов</h1>
    

      <div className="form-group">
        <label>
          Отягощенный акушерско-гинекологический анамнез
          <span className="description">(преждевременные роды в анамнезе, поздний выкидыш в анамнезе)</span>
        </label>
        <select name="one" value={values.one} onChange={handleChange}>
          <option value={0}>Нет</option>
          <option value={1}>Да</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Дефект шейки матки
          <span className="description">(истмико-цервикальная недостаточность в предыдущую беременность, разрыв шейки матки в анамнезе, два и более инструментальных расширения цервикального канала в анамнезе, конизация или расширенная эксцизия шейки матки в анамнезе, лазерная вапоризация шейки матки в анамнезе)</span>
        </label>
        <select name="two" value={values.two} onChange={handleChange}>
          <option value={0}>Нет</option>
          <option value={1}>Да</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Инфекционно-воспалительные заболевания и дисбиотические состояния при настоящей беременности
          <span className="description">(рецидивирующий бактериальный вагиноз, острый вагинит, цервицит, инфекции мочевыводящих путей, бессимптомная бактериурия)</span>
        </label>
        <select name="three" value={values.three} onChange={handleChange}>
          <option value={0}>Нет</option>
          <option value={1}>Да</option>
        </select>
      </div>

      <div className="form-group">
        <label>
        Количество лейкоцитов в микроскопическом исследовании отделяемого из цервикального канала в I триместре настоящей беременности 
          <span className="description">(количество клеток в поле зрения)</span>
        </label>
        <input type="number" name="four" value={values.four} onChange={handleChange} className="input-field" required/>
      </div>

      <button className="calculate-button" onClick={calculate}>Рассчитать</button>

      {result && (
        <div className="result">
          <p>Вероятность: <strong>{result}%</strong></p>
          <p>Результат: <strong>{risk}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;
