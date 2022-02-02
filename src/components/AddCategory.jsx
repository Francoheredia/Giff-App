import { React, useState } from 'react';

const AddCategory = ({ setCategory }) => {
  const [inputcategory, setinputCategory] = useState('');

  const handleInputChange = (e) => {
    setinputCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputcategory.trim().length > 2) {
      setCategory((category) => [inputcategory, ...category]);
      setinputCategory('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        id=""
        value={inputcategory}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory;
