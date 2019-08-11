import React, { useState, useEffect } from 'react';
import './stylesheets/css/style.css';
import Header from './components/Header';
import DayButton from './components/DayButton';
import HomeMainContent from './components/HomeMainContent'
import DayDetailsMainContent from './components/DayDetailsMainContent';

function App() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true)
    fetch("https://api.myjson.com/bins/1gwnal")
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            setData(data)
        }) 
  }, []);

  console.log(data);
  console.log(loading);
  let steps = 0;
  if(data) {
    data.forEach(element => {
      steps += element.steps;
    });
  }
  let km = steps * 0.762 / 1000;
  let calories = Math.round(steps * 0.05);
  let min = steps * 0.5 / 60;
  let hours = (min / 60);
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  console.log(rhours + " " + rminutes);
  
  return (
    <div className="app">
      <Header />
      <section className="section-day-button animation-slide-in">
        <DayButton num="10" name="MON" />
        <DayButton num="11" name="TUE" />
        <DayButton num="12" name="WED" />
        <DayButton num="13" name="THU" />
        <DayButton num="14" name="FRI" />
      </section> 
      <HomeMainContent hours={rhours} minutes={rminutes} steps={steps} calories={calories} />
      {/* <DayDetailsMainContent /> */}
    </div>
  );
}

export default App;

