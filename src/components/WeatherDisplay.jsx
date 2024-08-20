import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetGeoCoordinatesQuery } from "../redux/slices/features/weatherApi";
import { recentSearchActions } from "../redux/slices/app/recentSlice";

const WeatherDisplay = () => {
  const [toggleUnit, setToggleUnit] = useState(true);
  const searchedData = useSelector((state) => state.search.searchedData);
  const dispatch = useDispatch();

  const { data, isError, isLoading, isSuccess } = useGetGeoCoordinatesQuery(searchedData, {
    skip: !searchedData || searchedData.trim() === "",
  });

  useEffect(() => {
    if (isSuccess && !isError) {
      dispatch(recentSearchActions.storeSearch(data?.name));
    }
  }, [isSuccess, isError, data, dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p className="bg-gradient-to-b from-gray-300 to-gray-600 mx-auto p-3 rounded-lg shadow-xl">
        Please enter a valid city name.
      </p>
    );
  }

  const temperature = toggleUnit
    ? (data?.main.temp - 273.15).toFixed(2)
    : (((data?.main.temp - 273.15) * 9) / 5 + 32).toFixed(2);

  const handleToggle = () => {
    setToggleUnit(!toggleUnit);
  };

  const iconCode = data?.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

  return (
    <div className="w-full max-w-lg mx-auto my-20 p-8 bg-gradient-to-b from-gray-300 to-gray-600 rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Weather Display</h1>
      {isSuccess && (
        <div className="space-y-4">
          <p className="text-lg mb-2">
            Searched City: <span className="font-semibold">{searchedData}</span>
          </p>
          <div className="flex">
            <div>
              <h2 className="text-3xl font-semibold">
                Temp: {toggleUnit ? `${temperature}°C` : `${temperature}°F`}
              </h2>
              <p className="text-lg">
                Weather: <span className="font-medium">{data?.weather[0].description}</span>
              </p>
            </div>
            <img src={iconUrl} alt="Weather icon" className="h-16 object-cover mb-4" />
          </div>
          <p className="text-lg">
            Wind: <span className="font-medium">{data?.wind.speed} m/s</span>
          </p>
          <button
            onClick={handleToggle}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {toggleUnit ? "Fahrenheit" : "Celsius"}
          </button>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
