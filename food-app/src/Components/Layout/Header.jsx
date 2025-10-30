import { Fragment } from'react'
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import logo from '../../assets/logo2.png';
import classes from './Header.module.css';

const Header = props => {
    return (
    <Fragment>
        <header className={classes.header}>
            <img src={logo} alt="Master Chef" className={classes.logoImage}></img>
            <label className={classes.logoText}>Master Chef</label>
            <div className={classes.cartButtonContainer}>
                <HeaderCartButton onClick={props.onShowCart} />
            </div>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious meals'/>
        </div>
    </Fragment>
    )
};


export default Header;