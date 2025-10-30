import { Fragment } from'react'
import HeaderCartButton from './HeaderCartButton';
import mealsImage from'../../assets/meals.jpg'
import classes from'./Header.module.css'

const Header = props => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1 className={classes.logoText}>React Meals</h1>
            <div className={classes.cartButtonContainer}>
                <HeaderCartButton />
            </div>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious meals'/>
        </div>
    </Fragment>
    )
};


export default Header;