import React, {useState, useEffect} from 'react'
import Component from '../components/Component';

import { fetchWithAuth } from '../helpers/fetch.js';
import useFetch from '../hooks/useFetch';


const Container = () => {
    const [currency, setCurrency] = useState({ base: 'USD', symbols: 'CZK' });
    const [allRates, setAllRates] = useState(null);
    const [currentRates, setCurrentRates] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetchWithAuth('https://api.exchangeratesapi.io/latest');
            const {rates} = response;
            setAllRates(rates);
        })()

    }, [])

    useEffect(() => {
        (async () => {
            const response = await fetchWithAuth('https://api.exchangeratesapi.io/latest', currency);
            const {rates} = response;
            setCurrentRates(rates);
        })();

    }, [currency])

    const handleSetCurrency = (value) => {
        if (value) {
            setCurrency(pS => ({...pS, ...value}));
        }

    };

    const handleChange = (e) => {
        const {value} = e.target;
        setInputValue(value)
    }

    const getResult = () => {
        const [rate] = Object.values(currentRates);
        setResult(parseFloat(inputValue) * rate)
    }


    return <Component result={result} getResult={getResult} inputValue={inputValue} setCurrency={handleSetCurrency} handleChange={handleChange} currency={currency} allRates={allRates} currentRates={currentRates} />;
}

export default Container;
