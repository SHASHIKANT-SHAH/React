import React, { useState } from 'react';

function ControlledFunctionalForm() {
    const [inputValue, setInputValue] = useState({
        // ... other fields remain the same ...
        name: "d",
        email: "S@test.com",
        comment: "",
        country: "India",
        agree: false, // Single checkbox remains a boolean
        gender: "male",
        file: null,
        // NEW STATE: Array for multiple checkbox selection
        interests: ['reading'] 
    });

    let handleChanges = (event) => {
        const target = event.target;
        const name = target.name;
        
        // --- MULTIPLE CHECKBOX ARRAY HANDLING ---
        if (name === 'interests') {
            const interestValue = target.value;
            setInputValue(prevState => {
                let newInterests = [...prevState.interests];
                
                if (target.checked) {
                    // Add the value if the checkbox is checked
                    newInterests.push(interestValue);
                } else {
                    // Remove the value if the checkbox is unchecked
                    newInterests = newInterests.filter(i => i !== interestValue);
                }

                return {
                    ...prevState,
                    interests: newInterests
                };
            });
            return; // Exit the function after handling array update
        }

        // --- SINGLE CHECKBOX AND OTHER INPUT HANDLING (from previous example) ---
        const value = target.type === 'checkbox' 
            ? target.checked 
            : target.value;

        // Special handling for file input to store the file object
        if (target.type === 'file') {
            setInputValue({
                ...inputValue,
                [name]: target.files[0] 
            });
        } else {
            // Update state for all other input types (text, email, single checkbox, radio, select)
            setInputValue({
                ...inputValue,
                [name]: value
            });
        }
    }

    let handleForm = (event) => {
        event.preventDefault();
        console.log('Form Submitted with Data:', inputValue);
    }

    return (
        <div>
            <h2>Controlled Functional Form Component</h2>
            <form onSubmit={handleForm}>
                {/* ... other form fields ... */}

                <label> Name: </label>
                <input type="text" name='name' value={inputValue.name.toUpperCase()} onChange={handleChanges} />
                <br />
                
                {/* --- MULTIPLE CHECKBOX GROUP --- */}
                <label style={{fontWeight: 'bold'}}>Interests: </label>
                <br/>
                
                <input 
                    type="checkbox" 
                    name="interests" 
                    value="reading" 
                    checked={inputValue.interests.includes('reading')} 
                    onChange={handleChanges} 
                /> Reading
                
                <input 
                    type="checkbox" 
                    name="interests" 
                    value="sports" 
                    checked={inputValue.interests.includes('sports')} 
                    onChange={handleChanges} 
                /> Sports

                <input 
                    type="checkbox" 
                    name="interests" 
                    value="cooking" 
                    checked={inputValue.interests.includes('cooking')} 
                    onChange={handleChanges} 
                /> Cooking
                <br/>
                <br/>
                {/* --- END MULTIPLE CHECKBOX GROUP --- */}


                {/* Single Checkbox (from original question) */}
                <label>Agree to terms :</label>
                <input type="checkbox" name="agree" checked={inputValue.agree} onChange={handleChanges} />
                <br />
                <br />

                <button type="submit">Submit</button>
            </form>
            
            <hr/>
            
            <h3>Current State:</h3>
            {/* Displaying the array state */}
            <p>Interests: **{inputValue.interests.join(', ')}**</p>
            <p>Agree (single): {inputValue.agree.toString()}</p>
        </div>
    );
}

export default ControlledFunctionalForm;