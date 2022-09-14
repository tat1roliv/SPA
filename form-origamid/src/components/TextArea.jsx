import React from 'react';

const TextArea = () => {
  const [textarea, setTextarea] = React.useState('');

  return (
    <form className="form-container">
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="5"
      />
      {textarea}
    </form>
  );
};

export default TextArea;