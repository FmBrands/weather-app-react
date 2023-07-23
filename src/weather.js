import React from "react";
import axios from "axios";
import { FidgetSpinner } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response);
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}℃ and the humidity is ${response.data.main.humidity} %`
    );
  }
  let apiKey = "d3cfc8e21373609a59380c0e9070f5be";
  let apiUrl = ` https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <FidgetSpinner
      visible={true}
      height="80"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={["#ff0000", "#00ff00", "#0000ff"]}
      backgroundColor="white"
    />
  );
}
