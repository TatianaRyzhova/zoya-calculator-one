import React, { useState } from 'react';
import './App.css';
import ProbabilityFormula from './mathFormula';

function App() {
  const [number, setNumber] = useState({
      one: '',
      two: '',
      three: '',
      four: '',
  });

  const [result, setResult] = useState('');
  const [submitted, setSubmitted] = useState(false);


  function handleChange(event) {
      const input = event.target;
      const name = input.name;
      const value = input.value;
      setNumber({
        ...number,
        [name]: value
      });
    }

    function handleSubmit(event) {
      event.preventDefault();
      setSubmitted(true);

      const one = 1.44 * Number(number.one);
      const two = 1.502 * Number(number.two);
      const three = 0.581 * Number(number.three);
      const four = 0.217 * Number(number.four);

      const z = -3.601 + one + two + three + four;
      const P = (1 / (1 + Math.exp(-z))) * 100;
      setResult(P);

      // setSubmitted(false);
    }

  
  return (
      <div className="container">
          <h1 className='title'>Прогнозирование в первом триместре беременности поздних преждевременных спонтанных родов</h1>
          <p style={{ fontWeight: "bold" }}>Формула:</p>
          {/* <p>Р = (1 / (1 + е<sup>-z</sup>)) x 100%</p> */}
          {/* <p>z = (-3,601) + (1,044 × Показатель1) + (1,502 × Показатель2) + (0,581 × Показатель3) + (0,217 × Показатель4)</p> */}
          <ProbabilityFormula />
          <p>где:</p>
          <p>z = (-3,601) + (1,044 × Показатель1) + (1,502 × Показатель2) + (0,581 × Показатель3) + (0,217 × Показатель4)</p>
          {/* <ul>
              <li>Р – вероятность НБ у женщин с ожирением (%)</li>
                  <li>е – математическая постоянная = 2,718,</li>
                  <li>Х<sub>КУР</sub> – наличие курения   (0 – курящие, 1 - некурящие)</li>
                  <li>X<sub>AGT</sub> – концентрация в сыворотке крови ангиотензиногена (0 - менее 0,608, 1 – более 0,608)</li>
                  <li>Х<sub>TTR</sub> –  концентрация в сыворотке крови транстиретина (0 - менее 0,074, 1 – более 0,074)</li>
                  <li>Х<sub>С-пептид</sub> – концентрация в сыворотке крови С-пептида (0 - более 5,2 нг/мл, 1 – менее 5,2 нг/мл)</li>
          </ul> */}

          <div>
            <table>
              <tbody>
                <tr>
                <th style={{width: "120px", fontWeight: "bold"}}>Показатель</th>
                <th style={{width: "520px", fontWeight: "bold"}}>Название показателя</th>
                <th style={{width: "120px", fontWeight: "bold"}}>Значение</th>
                </tr>

                <tr>
                <th style={{width: "120px"}}>Показатель1</th>
                <th style={{width: "520px"}}>Отягощенный акушерско-гинекологический анамнез (преждевременные роды в анамнезе, поздний выкидыш в анамнезе)</th>
                <th style={{width: "120px"}}>
                  <div>0 - Нет</div>
                  <div>1 - Да</div>
                </th>
                </tr>

                <tr>
                <th style={{width: "120px"}}>Показатель2</th>
                <th style={{width: "520px"}}>Дефект шейки матки (истмико-цервикальная недостаточность в предыдущую беременность, разрыв шейки матки в анамнезе, два и более инструментальных расширения цервикального канала в анамнезе, конизация или расширенная эксцизия шейки матки в анамнезе, лазерная вапоризация шейки матки в анамнезе)</th>
                <th style={{width: "120px"}}>
                  <div>0 - Нет</div>
                  <div>1 - Да</div>
                </th>
                </tr>

                <tr>
                <th style={{width: "120px"}}>Показатель3</th>
                <th style={{width: "520px"}}>Инфекционно-воспалительные заболевания и дисбиотические состояния при настоящей беременности (рецидивирующий бактериальный вагиноз, острый вагинит, цервицит, инфекции мочевыводящих путей, бессимптомная бактериурия)</th>
                <th style={{width: "120px"}}>
                  <div>0 - Нет</div>
                  <div>1 - Да</div>
                </th>
                </tr>

                <tr>
                <th style={{width: "120px"}}>Показатель4</th>
                <th style={{width: "520px"}}>Количество лейкоцитов в микроскопическом исследовании отделяемого из цервикального канала в I триместре настоящей беременности (количество клеток в поле зрения)</th>
                <th style={{width: "120px"}}></th>
                </tr>

              </tbody>
            </table>
          </div>

          <p style={{ fontWeight: "bold", paddingTop: "16px" }}>Интерпретация:</p>
          <p>Более 0,413 — Высокий риск</p>
          <p>0,413 и менее — Низкий риск </p>

          <form onSubmit={handleSubmit}>
              <div className="tables">
                  <table>
                      <tbody>
                          <tr>
                              <th style={{width: "220px"}}>Показатель1
                                {/* <div style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.4)" }}>0 - Нет, 1 - Да</div> */}
                              </th>
                              <th>
                                  <input
                                      type="number"
                                      placeholder="0 или 1"
                                      name="one"
                                      onChange={handleChange}
                                      value={number.one}
                                      submitted={submitted}
                                      required
                                  />
                              </th>
                          </tr>
                          <tr>
                              <th style={{width: "220px"}}>Показатель2
                                {/* <div style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.4)" }}>0 - Нет, 1 - Да</div> */}
                              </th>
                              <th>
                                  <input
                                      type="number"
                                      placeholder="0 или 1"
                                      name="two"
                                      onChange={handleChange}
                                      value={number.two}
                                      submitted={submitted}
                                      required
                                  />
                              </th>
                          </tr>
                          <tr>
                              <th style={{width: "220px"}}>Показатель3</th>
                              <th>
                                  <input
                                      type="number"
                                      placeholder="0 или 1"
                                      name="three"
                                      onChange={handleChange}
                                      value={number.three}
                                      submitted={submitted}
                                      required
                                  />
                              </th>
                          </tr>
                          <tr>
                              <th style={{width: "220px"}}>Показатель4</th>
                              <th>
                                  <input
                                      type="number"
                                      // placeholder="0 или 1"
                                      name="four"
                                      onChange={handleChange}
                                      value={number.four}
                                      submitted={submitted}
                                      required
                                  />
                              </th>
                          </tr>
                      </tbody>   
                  </table>
              </div>
              <button type="submit">РАССЧИТАТЬ</button>
          </form>
          <div className="result-space" style={{ minHeight: '50px', paddingBottom: '30px' }}>
              {submitted && (
                  <div className="result">
                  Результат:
                  <span className={result >= 0.413 ? 'result-red' : 'result-green'}> {result}</span>
                  <p className="information">{'Р > 0,413 - высокий риск'}</p>
                  <p className="information">{'Р < 0,413 - низкий риск'}</p>
              </div>
              )}
          </div>
      </div>
  );
}

export default App;
