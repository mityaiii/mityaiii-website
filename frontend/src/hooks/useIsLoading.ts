import { useEffect, useState } from 'react'

export const useIsLoading = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []); 

  return isLoading;
}
