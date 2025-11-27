import axios from "axios";

const API_URL = "http://localhost:5000/api/countries";

export const getCountries = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getCountryById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createCountry = async (country) => {
  const response = await axios.post(API_URL, country);
  return response.data;
};

export const updateCountry = async (id, country) => {
  const response = await axios.put(`${API_URL}/${id}`, country);
  return response.data;
};

export const deleteCountry = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
