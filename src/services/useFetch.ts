import { useEffect, useState } from "react";
import axios from "axios";

function useFetch<TResponseData>(url: string) {
  const [data, setData] = useState<TResponseData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setStatus(response.status);
        setError(null);
        setLoading(false);
      })
      .catch((response) => {
        setError(response.data);
        setStatus(response.status);
        setData(null);
        setLoading(false);
      });
  }, []);

  return { data, loading, status, error };
}

export default useFetch;
