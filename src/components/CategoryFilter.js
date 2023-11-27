import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryFilter }) => {
  const handleClick = (category) => {
    onCategoryFilter(category);
  };

  return (
    <div>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={selectedCategory === category ? 'selected' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;