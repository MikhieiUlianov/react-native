import { ExpenceType } from "@/store/expences";
import axios from "axios";

const url = `https://react-native-expences-default-rtdb.firebaseio.com`;

export const storeExpence = async (data: ExpenceType) => {
  const response = await axios.post(url + "/expences.json", data);
  const id = response.data.name;
  return id;
};

export const fetchExpences = async (): Promise<ExpenceType[]> => {
  const response = await axios.get(url + "/expences.json");
  const expences = [];

  for (const key in response.data) {
    const expenceObj = {
      id: key,
      price: +response.data[key].price,
      title: response.data[key].title as string /* 
      date: new Date(response.data[key].date), */,
    };
    expences.push(expenceObj);
  }

  return expences;
};

export const updateExpence = (id: string, data: ExpenceType) =>
  axios.put(url + `/expences/${id}.json`, data);

export const deleteExpence = async (id: string) => {
  return axios.delete(url + `/expences/${id}.json`);
};
