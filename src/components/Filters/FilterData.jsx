//styles
import classes from './FilterData.module.css';

const FilterData = ( props ) =>
{
    return (
        <div className={ classes.filterData }>
            <div className={ classes.categories }>
                <div onClick={ () => props.filterDataHandler( "Alla" ) }>Alla</div>
                <div onClick={ () => props.filterDataHandler( "Kött" ) }>Kött</div>
                <div onClick={ () => props.filterDataHandler( "Frukt" ) }>Frukt</div>
                <div onClick={ () => props.filterDataHandler( "Vätska" ) }>Vätska</div>
            </div>
        </div>
    );
};

export default FilterData;