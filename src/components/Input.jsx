import React, { useEffect, useState } from 'react'

export const Input = ({ onSearch, setData }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');

    const onTitleChange = (ev) => {
        setTitle(ev.target.value);
    }
    const onBodyChange = (ev) => {
        setBody(ev.target.value);
    }
    const onAuthorChange = (ev) => {
        setAuthor(ev.target.value);
    }

    useEffect(() => {

        setData({
            'title': title,
            'author': author,
            'body': body
        });
    }, [title, author, body, setData])

    return (
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
}