import React, {useRef} from 'react'

const Search = (props) => {
    const inputE = useRef('');

    const getSearchTerm = () => {
        props.searchHandler(inputE.current.value)};
    return (
        <div className = 'ui search'>
           <div className = 'ui icon input'>
               <input
                ref = {inputE}
                type = 'text'
                placeholder = 'search contacts'
                value = {props.searchTerm}
                onChange = {getSearchTerm}
                />

            <i className="search icon"></i>
           </div>
        </div>
    );
};
export default Search
