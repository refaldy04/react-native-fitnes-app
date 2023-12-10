import axios from "axios";
import { rapidAPIKey } from "../constants";

const baseURL = "https://exercisedb.p.rapidapi.com";

const APICall = async (url: string, params?: string) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": "869a65b91amshc786b955c5628b6p1d5df3jsn45ce63f5fb87",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.log("error : ", error);
  }
};

export const fetchExercisesByBodyPart = async (bodyPart: string | string[]) => {
  const data = await APICall(`${baseURL}/exercises/bodyPart/${bodyPart}`);

  return data;
};
