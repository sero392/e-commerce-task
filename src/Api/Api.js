import axios from "axios";

export const getData = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      return response?.data || response;
    } catch (error) {
      throw error;
    }
  };
  
  export const postData = async (endpoint, data) => {
    try {
      const response = await axios.post(endpoint, data);
      return response;
    } catch (error) {
      throw error;
    }
  };