import { useState, useCallback } from "react";

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const backendIntraction = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        body: JSON.stringify(requestConfig.body) || null,
        headers: requestConfig.headers || {},
      });
      if (!response.ok) {
        throw new Error("sth went wrong!!");
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  },[]);

  return {
    isLoading,
    error,
    backendIntraction,
  };
}
