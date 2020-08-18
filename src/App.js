import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Card} from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from './Map';
import './App.css';

// BEM naming convention
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')

  // STATE = How to write a variable in React
  // https://disease.sh/v3/covid-19/countries
  // UseEffect = Runs a piece of code on a given condition

  useEffect(() => {
    // async -> send a request, wait for it, do something with info

    const getCountriesData = async () => {
      await fetch ('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country, // Full Name
            value: country.countryInfo.iso2, // Country initials
          }
        ));
        setCountries(countries);
      })
    };
    getCountriesData();
  }, []); 

  const onCountryChange = (event) => {
    const countryCode = event.target.value;

    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className='app__left'>

        <div className='app__header'>
          <h1>COVID-19 TRACKER</h1>
          <FormControl className='app__dropdown'>
            <Select variant='outlined' onChange={onCountryChange} value={country}>
              {/* Loop through all the countries and show a dropdown list of options */}
              <MenuItem value='worldwide'>Worldwide</MenuItem>
              {
                countries.map(country => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }

              {/* <MenuItem value='worldwide'>Worldwide</MenuItem> */}
            </Select>
          </FormControl>
        </div>

        <div className='app__stats'>
          <InfoBox title='Coronavirus Cases' />
          <InfoBox title='Recovered' />
          <InfoBox title='Deaths' />
        </div>

        <Map />
      </div>

      <Card className='app__right'>

        {/* Table */}
        {/* Graph */}
      </Card>
    </div>
  );
}

export default App;
