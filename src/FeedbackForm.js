import React, { useState } from 'react';

const FeedbackForm = () => {
  const [rating, setRating] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Rating:', rating);
    console.log('Suggestion:', suggestion);
    setRating('');
    setSuggestion('');
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" value={rating} onChange={handleRatingChange} required>
            <option value="">Select</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Poor</option>
          </select>
        </div>
        <div>
          <label htmlFor="suggestion">Suggestions:</label>
          <textarea id="suggestion" value={suggestion} onChange={handleSuggestionChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

