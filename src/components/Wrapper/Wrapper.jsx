import classes from './Wrapper.module.css';

const Wrapper = ( { children } ) =>
{
    return (
        <div className={classes.wrapperContainer}>
            <div className={ classes.wrapper }>
                { children }
            </div>
        </div>
    );
};

export default Wrapper;