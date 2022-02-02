import { useState, useEffect } from 'react';
import { getApiGiff } from '../helpers/getGifs';

export const useFecht = (categories) => {
  const [first, setfirst] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getApiGiff(categories).then((imgs) => {
      setTimeout(() => {
        console.log(imgs);
        setfirst({
          data: imgs,
          loading: false,
        });
      }, 1000);
    });
  }, [categories]);

  return first;
};
