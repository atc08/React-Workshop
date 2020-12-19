import React from 'react';

const Component = ({ setCurrency, currency, allRates, handleChange, inputValue, getResult, result }) => {
    return <div>
        <input value={inputValue} onChange={handleChange} type="number"/>
        <div>
            <label htmlFor="#from">from</label>
            <select value={currency?.base} onChange={({target}) => setCurrency({ base: target.value })} id="from">
                {allRates && Object.keys(allRates)?.map(rate => {
                    return <option key={rate}>{rate}</option>
                })}
            </select>
            <label htmlFor="#to">to</label>
            <select value={currency?.symbols} onChange={({target}) => setCurrency({ symbols: target.value })}  id="to">
                {allRates && Object.keys(allRates)?.map(rate => {
                    return <option key={rate}>{rate}</option>
                })}
            </select>
        </div>

        <div>
            <button onClick={getResult}>submit</button>
        </div>

        {result && <div>{result.toFixed(2)}</div>}
    </div>
}

export default Component
