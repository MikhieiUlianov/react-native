import { ExpenceType } from "@/store/expences";
import axios from "axios";

const url = `https://react-native-expences-default-rtdb.firebaseio.com`;

export const storeExpence = (data: ExpenceType) => {
  axios.post(url + "/expences.json", data);
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
