import React from 'react';
import { categories, questions } from './data'; // Make sure the path is correct

const Home = () => {
  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name} - {Array.isArray(category.types) ? category.types.join(", ") : "No types"}
          </li>
        ))}
      </ul>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
