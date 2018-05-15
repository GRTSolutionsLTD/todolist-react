import React from 'react'
import { Helmet } from 'react-helmet'
import Weather from '../containers/Weather'
import TodoFooter from '../components/TodoFooter'
const WeatherPage = () => [
  <Helmet>
    <meta name="description" content="React Redux example demonstrates how to fetch API easily!" />
  </Helmet>,
  <main>
    <h3>Get all task List</h3>
    {/* <p>Click the button below to fetch RESTful API and get weather. </p> */}
    {/* <Weather /> */}
    <TodoFooter />
  </main>
]

export default WeatherPage
