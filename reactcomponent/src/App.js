import React, { useState } from 'react';
import SharedInput from './SharedInput';

const App = () => {
    const [formData, setFormData] = useState({
        textInput: '',
        textareaInput: '',
        checkboxInput: [],
        radioInput: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                [name]: checked
                    ? [...prev[name], value]
                    : prev[name].filter((item) => item !== value),
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
            <h2>Shared Input Component</h2>
            <div style={{ marginBottom: '10px' }}>
                <label>Text Input:</label>
                <SharedInput
                    type="text"
                    name="textInput"
                    value={formData.textInput}
                    onChange={handleChange}
                />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label>Textarea Input:</label>
                <SharedInput
                    type="textarea"
                    name="textareaInput"
                    value={formData.textareaInput}
                    onChange={handleChange}
                />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label>Checkbox Input:</label>
                <SharedInput
                    type="checkbox"
                    name="checkboxInput"
                    value={formData.checkboxInput}
                    onChange={handleChange}
                    options={[
                        { label: 'Option 1', value: 'option1' },
                        { label: 'Option 2', value: 'option2' },
                    ]}
                />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label>Radio Input:</label>
                <SharedInput
                    type="radio"
                    name="radioInput"
                    value={formData.radioInput}
                    onChange={handleChange}
                    options={[
                        { label: 'Yes', value: 'yes' },
                        { label: 'No', value: 'no' },
                    ]}
                />
            </div>

            <div>
                <h3>Form Data</h3>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </div>
    );
};

export default App;
