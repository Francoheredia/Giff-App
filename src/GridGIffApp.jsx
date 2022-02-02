import { React, useState } from 'react';
import AddCategory from './components/AddCategory';
import GridGiff from './components/GridGiff';

const GridGIffApp = () => {
  const [category, setCategory] = useState([]);

  /*   const hanldeAdd = () => {
    setCategory([...category, 'Tomate']);
  }; */
  return (
    <>
      <h2>Gif Expert App </h2>
      <AddCategory setCategory={setCategory} category={category} />
      <hr />
      <ol>
        {category.map((categories) => (
          <GridGiff
            setCategory={setCategory}
            categories={categories}
            key={categories}
          />
        ))}
      </ol>
    </>
  );
};

export default GridGIffApp;
