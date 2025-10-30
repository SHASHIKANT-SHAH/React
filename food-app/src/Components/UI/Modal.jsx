import classes from './Modal.module.css';
import { Fragment } from 'react';
// Changed import to match common convention: 'react-dom' library
import ReactDOM from 'react-dom'; 

const Backdrop = props =>{
    // Added onClick handler to close the modal
    return (
    <div className={classes.backdrop} onClick={props.onClose} />
    );
};

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

// Getting the portal element outside the function is fine IF the element 
// is guaranteed to be in index.html when the script loads.
const portalElement = document.getElementById('overlays'); 

const Modal = props => {
    return (
        <Fragment>
            {/* Using the correct imported name 'ReactDOM' and passing onClose prop */}
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;
