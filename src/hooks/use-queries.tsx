import { useState, useEffect } from "react";
import { get } from "../fetchers/fetchers";

export const useGetTopology = () => {
  let initialData: String = ''
  const [data, setData] = useState<String>(initialData);

  const fn = async () => {
    const results = await get<String>("./data/topology.txt");
    setData(results);
  };

  useEffect(() => {
    fn();
  }, []);

  return data;
};