//styles
import classes from './List.module.css';

const List = ( props ) =>
{
    const removeElement = ( name ) =>
    {
        props.removeElement(name);
    };

    return (
        <div onClick={ (  ) => removeElement( props.item.name) } className={ classes.items }>
            <p>
                { props.item.name }
            </p>
            <p>
                { props.item.date }
            </p>
            <p>
                { props.item.category }
            </p>
            <p>
                { props.item.amount }
            </p>
        </div >
    );
};

export default List;