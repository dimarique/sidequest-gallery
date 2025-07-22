import { useState, useEffect } from "react";

export function useGetData(category = "") {
  const API_KEY = `51421786-783cc9416bc9d8b6dbb01be44`;
  const API_URL = `https://pixabay.com/api/?key=`;
  const DATA_URL = `${API_URL}${API_KEY}${category}`;

  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(DATA_URL);
        const data = await result.json();
        const urls = data.hits.map((img) => img.largeImageURL);
        setImages(urls);
      } catch (err) {
        console.error("Error is:", err);
      }
    };
    fetchData();
  }, []);
  return images;
}
