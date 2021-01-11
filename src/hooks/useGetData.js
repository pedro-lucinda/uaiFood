import api  from "../services/api";
import { useState, useEffect } from "react";

export const useGetData = (initialState, url) => {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    api
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [url]);

  return [data];
};
