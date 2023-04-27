import React, { useState } from 'react'
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';

export const Home = () => {
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

    const onSearch = () => {

        console.log(title);
        console.log(author);
        console.log(body);
    };

    return (
        <div>
            <Heading />
            <Input
                title={title}
                author={author}
                body={body}
                onSearch={onSearch}
                onTitleChange={onTitleChange}
                onAuthorChange={onAuthorChange}
                onBodyChange={onBodyChange}
            />
        </div>
    );
}