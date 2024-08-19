import { useEffect } from "react";
import { useState } from "react"
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import RecentSearches from "./components/RecentSearches";
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const apiUrl = import.meta.env.VITE_WEATHER_API_URL;

export default function App() {
  
  
    return (
      <>
        <Search />
        {/* <RecentSearches /> */}
        <WeatherDisplay />
      </>
    );
}