import React, { useEffect, useState } from "react";
import "./styles.css";

let countryList = [];
let fstyle = { height: "200px", width: "300px", margin: "10px" };
let inputStyle = {
  fontSize: "22px",
  width: "450px",
  border: "none",
  textAlign: "center",
  borderRadius: "5px"
};
const App = () => {
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        countryList = [...data];
        console.log(countryList[0]);
      });
  });

  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h1 className="mt-3 p-5 font-weight-bold text-white">Hello World</h1>
      <input
        type="text"
        className="form-input"
        style={inputStyle}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Enter Country Name"
      />

      {countryList !== [] ? (
        <>
          <div className=" mt-5 p-3 ml-3">
            {countryList.map((e, index) => {
              return e.name === input ? (
                <div className="d-flex">
                  <div className="p-3 bg-light ">
                    <h4 className="card-title">Country Name:{e.name}</h4>
                    <p>Capital: {e.capital}</p>
                    <p>Population: {e.population}</p>
                    <p>
                      Currency: {e.currencies[0].name}( {e.currencies[0].symbol}{" "}
                      )
                    </p>
                  </div>
                  <img src={e.flag} alt="flag" style={fstyle} />
                </div>
              ) : null;
            })}
          </div>
        </>
      ) : null}

      <div></div>
    </div>
  );
};

export default App;
