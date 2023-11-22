import axios, { AxiosRequestConfig } from "axios";
import { adminProductInterface } from "../interfaces/adminProductInterface";

export const getAxios = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postAxios = async (
  url: string,
  body: AxiosRequestConfig<adminProductInterface>
) => {
  try {
    const { data } = await axios.post(url, body);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const putAxios = async (
  url: string,
  body: AxiosRequestConfig<adminProductInterface>
) => {
  try {
    const { data } = await axios.put(url, body);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteAxios = async (url: string) => {
  try {
    const { data } = await axios.delete(url);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
