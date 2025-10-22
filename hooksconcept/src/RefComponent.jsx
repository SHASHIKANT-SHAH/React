import React, {Component, createRef} from 'react';

class RefComponent extends Component {
    constructor(props) {
        super(props);
        this.myRef = createRef();
    }
    handleClick = () => {
        console.log(this.myRef.current.value);
        this.myRef.current.style.backgroundColor = 'yellow';
        this.myRef.current.focus();
    }
    render() {
        return (
            <div>
                <h2>Ref Component</h2>
                <input type="text" ref={this.myRef} />
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default RefComponent;