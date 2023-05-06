import React, { useEffect, useState } from 'react';
import './input.css';

export const Input = ({ onSearch, setData }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  const onTitleChange = ev => {
    setTitle(ev.target.value);
  };

  const onBodyChange = ev => {
    setBody(ev.target.value);
  };

  const onAuthorChange = ev => {
    setAuthor(ev.target.value);
  };

  useEffect(() => {
    setData({
      title,
      body,
      author,
    });
  }, [title, author, body, setData]);

  return (
    <div>
      <label htmlFor="search-title">
        Title: &nbsp;
        <input
          required
          id="search-title"
          type="text"
          onChange={onTitleChange}
          value={title}
        />
      </label>
      <br />
      <label htmlFor="search-author">
        Author: &nbsp;
        <input
          required
          id="search-author"
          type="text"
          onChange={onAuthorChange}
          value={author}
        />
      </label>
      <br />
      <label htmlFor="search-body">
        Body: &nbsp;
        <input
          required
          id="search-body"
          type="text"
          onChange={onBodyChange}
          value={body}
        />
      </label>
      <br />
      <br />
      &nbsp; &nbsp;
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

// "start": "http-server -p 3000 build",
