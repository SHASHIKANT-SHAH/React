import React from "react";

// React.forwardRef: यह कंपोनेंट को एक अतिरिक्त पैरामीटर (ref) स्वीकार करने की अनुमति देता है।
const Input = React.forwardRef((props,ref) => {
    return (
        // div को स्टाइलिंग के लिए एक रैपर के रूप में उपयोग किया जाता है।
        <div> 
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* ref को असली <input> एलिमेंट से जोड़ा जाता है। */}
            <input ref={ref} {...props.input} /> 
        </div>
    );
});

export default Input;