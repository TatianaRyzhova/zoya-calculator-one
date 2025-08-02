import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    one: 0,
    two: 0,
    three: 0,
    // four: ''
  });
  const [result, setResult] = useState(null);
  const [risk, setRisk] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const calculate = () => {
    // if (values.four === '' || values.five === '') {
    //   alert('Пожалуйста, заполните все обязательные поля.');
    //   return;
    // }

    // const z = (-1.968) - 0.222 * values.one + 1.766 * values.two - 0.221 * values.three + 3.037 * values.four;
    const z = -3.208 + 2.088 * values.one + 2.783 * values.two + 2.381 * values.three;
    const P = (1 / (1 + Math.exp(-z))) * 100;
    setResult(P.toFixed(2));
    setRisk(P > 30.4 ? 'Высокий риск' : 'Низкий риск');
  };

  return (
    <div className="container">
      <h1 className='title'>Прогнозирование в первом триместре беременности поздних преждевременных спонтанных родов</h1>
    

      <div className="form-group">
        <label>
          Отягощенный акушерско-гинекологический анамнез
          <span className="description">(преждевременные роды в анамнезе, поздний выкидыш в анамнезе, привычное невынашивание беременности, преждевременный разрыв плодных оболочек в анамнезе)</span>
        </label>
        <select name="one" value={values.one} onChange={handleChange}>
          <option value={0}>Нет</option>
          <option value={1}>Да</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Множественные кисты шейки матки (≥ 5 кист) по результатам трансвагинального УЗИ при постановке на учет по беременности
          {/* <span className="description">(истмико-цервикальная недостаточность в предыдущую беременность, разрыв шейки матки в анамнезе, два и более инструментальных расширения цервикального канала в анамнезе, конизация или расширенная эксцизия шейки матки в анамнезе, лазерная вапоризация шейки матки в анамнезе)</span> */}
        </label>
        <select name="two" value={values.two} onChange={handleChange}>
          <option value={0}>Нет</option>
          <option value={1}>Да</option>
        </select>
      </div>

      <div className="form-group">
        <label>
          Кисты эндоцервикса по результатам трансвагинального УЗИ при постановке на учет по беременности
          {/* <span className="description">(рецидивирующий бактериальный вагиноз, острый вагинит, цервицит, инфекции мочевыводящих путей, бессимптомная бактериурия)</span> */}
        </label>
        <select name="three" value={values.three} onChange={handleChange}>
          <option value={0}>Нет</option>
          <option value={1}>Да</option>
        </select>
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
