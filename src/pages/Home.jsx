import React, { useReducer, useState } from 'react'
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { apiGet } from '../misc/config';

const intialData = {
    title: '',
    author: '',
    body: ''
};

const initialResult = {
    result: null,
    isLoading: false,
    error: null
};

const reducer = (previousState, action) => {

    switch (action.type) {

        case 'FETCH_INITIATED':
            return ({ ...previousState, isLoading: action.isLoading });
        case 'FETCH_SUCCES':
            return ({ result: action.result, isLoading: false, error: null });
        case 'FETCH_ERROR':
            return ({ ...previousState, isLoading: false, error: action.error });
        default:
            return previousState;
    }
};

export const Home = () => {
    const [data, setData] = useState(intialData);
    const [{ result, isLoading, error }, dispatch] = useReducer(reducer, initialResult)

    const onSearch = () => {

        dispatch({ type: 'FETCH_INITIATED', isLoading: true });
        apiGet(data)
            .then((response) => {
                dispatch({ type: 'FETCH_SUCCES', result: response });
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_ERROR', error: err.message });
            });
        // eslint-disable-next-line no-console
        console.log(result)
    };

    return (
        <div>
            <Heading />
            <Input
                onSearch={onSearch}
                setData={setData}
            />
            {isLoading && <h1>Data is loading</h1>}
            {error && <h1>{error}</h1>}
            {result && <h1>Result</h1>}
        </div>
    );
}