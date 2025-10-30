import { useRef,useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

// Props receive करता है (ताकि यह onAddToCart को कॉल कर सके)।
const MealItemForm = (props) => { 
    const [quantityIsValid,setQuantityIsValid] = useState(true);
    const quantityInputRef = useRef(); // इनपुट की वैल्यू को सीधे पढ़ने के लिए Ref

    const submitHandler = event => {
        event.preventDefault();

        // 1. Data Collection: Ref से वैल्यू ली जाती है।
        const enteredQuantity = quantityInputRef.current.value;
        const enteredQuantityNumber = +enteredQuantity; // स्ट्रिंग को नंबर में बदलना

        // 2. Validation: वैलिडेशन चेक।
        if(enteredQuantity.trim().length === 0 || enteredQuantityNumber < 1 || enteredQuantityNumber > 5){
            setQuantityIsValid(false); 
            return;
        }

        // 3. Delegation: पैरेंट कंपोनेंट (MealItem) को Quantity वापस भेजता है।
         props.onAddToCart(enteredQuantityNumber);
    }

    return (
        <form className={classes.mealForm} onSubmit={submitHandler}>
            <Input
                ref={quantityInputRef} // Ref को Input कंपोनेंट में भेजता है।
                label='Quantity'
                input={{
                    id:'quantity',
                    type:'number',
                    min:'1',
                    max:'5',
                    step:'1',
                    defaultValue:''
                }}
            />
            <button>+ Add</button>
             {!quantityIsValid && <p>Please enter a valid quantity (1-5)</p>}
        </form>
    );
};

export default MealItemForm;