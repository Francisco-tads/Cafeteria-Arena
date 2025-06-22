import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex space-x-2 min-w-max">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedCategory === 'all'
              ? 'bg-brown-700 text-white'
              : 'bg-brown-100 text-brown-800 hover:bg-brown-200'
          }`}
        >
          Todos
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-brown-700 text-white'
                : 'bg-brown-100 text-brown-800 hover:bg-brown-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;