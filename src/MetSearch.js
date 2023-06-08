import React, { useState } from 'react';
import Button from '@mui/material/Button';

const MetSearchForm = ({ search }) => {
    const [term, setTerm] = useState("");

    const handleChange = evt => {
        setTerm(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        search(term);
        setTerm("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={term} onChange={handleChange} size="60"/>
            <Button variant="contained">Search</Button>
        </form>
    );
};

export default MetSearchForm;