import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory

function PersonalDetails() {
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    // Add more state variables as needed for class, etc.

    const navigate = useNavigate();  // use useNavigate here

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically handle the form submission, e.g., saving the data

        // Redirect to the questionnaire page
        navigate('/questionnaire');  // Use navigate function for redirection
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                School:
                <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
            </label>
            {/* Add more inputs for class, etc. */}
            <button type="submit">Start Questionnaire</button>
        </form>
    );
}

export default PersonalDetails;
