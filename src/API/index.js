import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    
  let changeUrl = url;

if(country) {
    changeUrl = `${url}/countries/${country}`
}

  try {
    //destructured the data we only want to recieve from the API
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeUrl);
    // don't have to worry about storing this data object in a variable just return it
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error)
  }
    
};

export const fetchDaily = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modData = data.map((daily) => ({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));
    return modData;
  } catch (error) {}
};

export const getCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
