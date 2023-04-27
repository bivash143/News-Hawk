import React from 'react'

export const Input = ({ onSearch, onTitleChange, onAuthorChange, onBodyChange, title, author, body }) => (
    <div>
        <label htmlFor="search-title">
            Title
            <input id="search-title" type="text" onChange={onTitleChange} value={title} />
        </label>
        <label htmlFor="search-author">
            Author
            <input id="search-author" type="text" onChange={onAuthorChange} value={author} />
        </label>
        <label htmlFor="search-body">
            Body
            <input id="search-body" type="text" onChange={onBodyChange} value={body} />
        </label>
        <button type="button" onClick={onSearch} >Search</button>

    </div>
);
