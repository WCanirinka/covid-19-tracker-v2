import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function LineGraph() {
  const [data, setData] = useState({});

  // https://disease.sh/v3/covid-19/historical/all?lastdays=120

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
    .then(response => response.json())
    .then(data => {
      
    })
  }, [])

  return (
    <div>
      <h3>I am a graph</h3>
      {/* <Line 
        data
        options
      /> */}
    </div>
  )
}

export default LineGraph
