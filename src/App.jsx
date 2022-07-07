import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const card1 = document.querySelector("#card1");
  const card2 = document.querySelector("#card2");
  const card3 = document.querySelector("#card3");
  const loader1 = document.querySelector("#loader1");
  const loader2 = document.querySelector("#loader2");
  const loader3 = document.querySelector("#loader3");

  function handleFetch() {
    fetch("./data.json")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setData(data);
        handleStyle();
      });
  }

  async function handleStyle() {
    card1.style.border = `2px solid ${data.colors.purple}`;
    card2.style.border = `2px solid ${data.colors.red}`;
    card3.style.border = `2px solid ${data.colors.green}`;
    loader1.style.backgroundColor = `${data.colors.purple}`;
    loader2.style.backgroundColor = `${data.colors.red}`;
    loader3.style.backgroundColor = `${data.colors.green}`;
    setTimeout(() => {
      card1.style.backgroundColor = `${data.colors.purple}`;
      card1.innerHTML = `Timer de ${data.timers.timer2/1000}s`
    }, data.timers.timer2);
    setTimeout(() => {
      card2.style.backgroundColor = `${data.colors.red}`;
      card2.innerHTML = `Timer de ${data.timers.timer3/1000}s`
    }, data.timers.timer3);
    setTimeout(() => {
      card3.style.backgroundColor = `${data.colors.green}`;
      card3.innerHTML = `Timer de ${data.timers.timer1/1000}s`
    }, data.timers.timer1);
  }

  useEffect(() => {
    handleFetch();
  }, [card1, card2, card3]);

  return (
    <div className="app">
      <div className="header">
        <h1>Cards and timer</h1>
      </div>
      <div className="container">
        <div id="card1"><span id="loader1"></span></div>
        <div id="card2"><span id="loader2"></span></div>
        <div id="card3"><span id="loader3"></span></div>
      </div>
    </div>
  );
}

export default App;
