import React from 'react';
import s from '../style/GifGridItem.module.css';

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className={`${s.card} animate__animated animate__fadeIn`}>
      <img className={s.imgCard} src={url} alt={title} />
      <p className={s.p}>{title}</p>
    </div>
  );
};

export default GifGridItem;
