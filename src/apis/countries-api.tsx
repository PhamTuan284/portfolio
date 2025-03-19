import axios from "axios";

export async function getCountriesList() {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response;
}
