import React, { useState, useEffect } from "react";

import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { getCountries } from "../../API";

const CountryPicker = ({ handleCountryChange }) => {
  const [gettingCountries, setGettingCountries] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      setGettingCountries(await getCountries());
    };
    getAPI();
  }, [setGettingCountries]);

  return (
    <FormControl className={styles.FormControl} >
      <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)} >
        <option value="">Global</option>
  {gettingCountries.map((country, i) => <option key={i} value={country}>{country}</option> )}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
