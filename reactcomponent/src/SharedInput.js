import React from 'react';
import './SharedInput.css'

const SharedInput = ({ type, name, value, onChange, options }) => {
    // Handle rendering for different input types
    if (type === 'textarea') {
        return (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder="Enter your text here"
                style={{ padding: '8px', width: '100%', height: '100px' }}
            />
        );
    }

    if (type === 'checkbox' || type === 'radio') {
        return (
            <div>
                {options.map((option) => (
                    <label key={option.value} style={{ marginRight: '10px' }}>
                        <input
                            type={type}
                            name={name}
                            value={option.value}
                            checked={Array.isArray(value) ? value.includes(option.value) : value === option.value}
                            onChange={onChange}
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        );
    }

    // Default to an input field for 'text' or any other type
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={`Enter ${name}`}
            style={{ padding: '8px', width: '100%' }}
        />
    );
};

export default SharedInput;
