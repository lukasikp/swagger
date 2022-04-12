import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch<TResponseData>(url: string) {
  const [data, setData] = useState<TResponseData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<number | undefined>(undefined);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      setLoading(false);
      setStatus(response.status);
    });
  }, []);

  return { data, loading, status };
}

export default useFetch;
