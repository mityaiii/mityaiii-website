import { useEffect, useState } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

export interface fetchData<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
} 

const url = ""

export const useFetchResult = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError((err as AxiosError).status);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  return { data, loading, error };
}
