/* import React, { useEffect, useState } from 'react'; */
import GifGridItem from './GifGridItem';
import s from '../style/GridGiff.module.css';
/* import { getApiGiff } from '../helpers/getGifs'; */
import { useFecht } from '../hooks/useFecht';

const GridGiff = ({ categories, setCategory }) => {
  const { data, loading } = useFecht(categories);

  return (
    <>
      <h2 className="animate__animated animate__fadeIn"> {categories}</h2>
      {loading && 'Loading'}
      {
        <div className={s.cardGrid}>
          {data.map((element) => (
            <GifGridItem {...element} key={element.id} />
          ))}
        </div>
      }
    </>
  );
};

export default GridGiff;
