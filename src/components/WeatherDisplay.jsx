import React, {useState} from 'react'
import { useSelector } from 'react-redux'
// import { useGetGeoCoordinatesQuery } from '../redux/slices/api/WeatherApi';
// import { useGetGeoCoordinatesQuery } from '../redux/slices/api/weatherApi';
import { useGetGeoCoordinatesQuery } from '../redux/slices/features/weatherApi';


function WeatherDisplay() {
  const [toggleUnit, setToggleUnit] = useState(true);
  const searchedData = useSelector(state => state.search.searchedData)
  
  const {data, isError, isLoading, isSuccess} = useGetGeoCoordinatesQuery(searchedData);
  if(isLoading){return <p>Loading.....</p>}
  if(isError && !data){return <p>Error</p>}

  const temperature = ((data.main.temp)-273.15).toFixed(2);
  // toggleUnit ? temperature : temperature = (temperature * 9/5) + 32 

  // const temp = ()=>{
  //   return data.main.temp - 273.15;
  // }
  // const handleToggle = ()=>{
  //   setToggleUnit(!toggleUnit);
  // }
  
  return (
    <div className='w-full max-w-lg mx-auto mb-14 p-8 bg-gradient-to-b from-gray-300 to-gray-600 rounded-lg shadow-xl'>
      <h1>WeatherDisplay</h1>
      <p>Searched City: {searchedData}</p>
      {isSuccess && <div>
        {/* <h1>Temp: {data.main.temp}</h1> */}
        <h1>Temp: {temperature}°C</h1>
        <p>Weather: {data.weather[0].description}</p>
        <p>Wind: {data.wind.speed}</p>
        {/* <button onClick={handleToggle} className='bg-white'>{toggleUnit ? 'Celcius' : 'Fargengr'}</button> */}
      </div>}
    </div>
  )
}

export default WeatherDisplay