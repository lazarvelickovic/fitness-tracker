import React, { useState, useEffect } from 'react';
import './stylesheets/css/style.css';
import Header from './components/Header';
import DayButton from './components/DayButton';
import HomeMainContent from './components/HomeMainContent'
import DayDetailsMainContent from './components/DayDetailsMainContent';
import Loader from './components/Loader';

function App() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [home, setHome] = useState(true);
  const [dateNumber, setDateNumber] = useState(0);
  const [dateDay, setDateDay] = useState('');
  const [daySteps, setDaySteps] = useState(0);
  const [dayKm, setDayKm] = useState(0);
  const [dayCal, setDayCal] = useState(0);
  const [dayHours, setDayHours] = useState(0);

  useEffect(() => {
    fetch("https://api.myjson.com/bins/1gwnal")
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            setData(data);
        }) 
  }, []);

  let steps = 0;
  if(data) {
    data.forEach(element => {
      steps += element.steps;
    });
  }
  let km = steps * 0.762 / 1000;
  let calories = Math.round(steps * 0.05);
  let hours = ((steps * 0.5 / 60) / 60) / 5;
  let minutes = (hours - Math.floor(hours)) * 60;
  let stepsWithComma = steps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  let dayStepsWithComma = daySteps.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  function showDayDetails(e, dateNum, dateD, id, cname) {
    setHome(false);
    setDateNumber(dateNum);
    setDateDay(dateD);
    let daySt = 0;
    if(data) { 
      data.forEach(element => {
        if(new Date(element.timestamp).getDay() == id) {
          daySt += element.steps;
        }
      });
    }
    setDaySteps(daySt);
    setDayKm((daySt * 0.762 / 1000).toFixed(1));
    setDayCal(Math.round(daySt * 0.05));
    setDayHours((Math.round(daySt * 0.5 / 60) / 60).toFixed(1));
    let elems = document.querySelectorAll(".day-button");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  }
  
  function showHome() {
    setHome(true);
    let elems = document.querySelectorAll(".day-button");
    [].forEach.call(elems, function(el) {
        el.classList.remove("active");
    });
  }

  return (
    <div className="app">
      {loading ? <Loader /> : <div>
      <Header home={home} dateNum={dateNumber} dateD={dateDay} func={showHome} />
      <section className="section-day-button animation-slide-in">
        <DayButton id="1" num="10" name="MON" dayName="Monday" func={showDayDetails} />
        <DayButton id="2" num="11" name="TUE" dayName="Tuesday" func={showDayDetails} />
        <DayButton id="3" num="12" name="WED" dayName="Wednesday" func={showDayDetails} />
        <DayButton id="4" num="13" name="THU" dayName="Thursday" func={showDayDetails} />
        <DayButton id="5" num="14" name="FRI" dayName="Friday" func={showDayDetails} />
      </section> 
      {home ? <HomeMainContent hours={Math.floor(hours)} minutes={Math.round(minutes)} steps={stepsWithComma} calories={calories} kilometers={(km / 5).toFixed(1)} /> : <DayDetailsMainContent daySteps={dayStepsWithComma} dayKm={dayKm} dayCal={dayCal} dayHours={dayHours} />}
      </div>}
      
    </div>
  );
}

export default App;

