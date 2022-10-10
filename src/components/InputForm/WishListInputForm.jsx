//hooks
import { useState } from 'react';
//components
import FilterData from '../Filters/FilterData';
import List from '../List/List';
//components
import Modal from '../Modal/Modal';
import Backdrop from '../Modal/Backdrop';
//styles
import classes from './WishListInputForm.module.css';


const WishListInputForm = ( { onSubmit } ) =>
{
    const [ nameInputValue, setNameInputValue ] = useState( "" );
    const [ dateInputValue, setDateInputValue ] = useState( "" );
    const [ categoryInputValue, setCategoryInputValue ] = useState( "Kött" );
    const [ amountInputValue, setAmountInputValue ] = useState( "" );
    const [ itemList, setItemList ] = useState( [] );

    const [ modalIsOpen, setModalIsOpen ] = useState( false );

    const showModal = () =>
    {
        setModalIsOpen( true );
    };

    const closeModal = () =>
    {
        setModalIsOpen( false );
    };


    const removeElement = ( name ) =>
    {
        let newList = itemList;
        for ( const item of newList )
        {
            if ( item.name === name )
            {
                item.removed = true;
            }
        }
        setItemList( [ ...newList ] );
    };

    const submitHandler = ( e ) =>
    {
        e.preventDefault();
        for ( const item of itemList )
        {
            if ( item.name === nameInputValue )
            {
                setModalIsOpen( true );
                return;
            }
        }
        const obj = {
            name: nameInputValue,
            date: dateInputValue,
            category: categoryInputValue,
            amount: amountInputValue,
            show: true,
            removed: false
        };
        setItemList( [ ...itemList, obj ] );

        // reset input values on submit
        setNameInputValue( "" );
        setDateInputValue( "" );
        setCategoryInputValue( "" );
        setAmountInputValue( "" );
    };
    const renderList = () =>
    {
        return itemList.map( ( item, index ) =>
        {
            return (
                item.show && !item.removed && <List key={ index } item={ item } removeElement={ removeElement } /> //check if item is not removed
            );
        } );
    };

    const filterDataHandler = ( string ) =>
    {
        let tempArray = itemList;
        for ( const item of tempArray )
        {
            if ( item.category === string )
            {
                item.show = true;
            } else if ( string === "Alla" )
            {
                item.show = true;
            } else
            {
                item.show = false;
            }
        }
        setItemList( [ ...tempArray ] );
    };

    return (
        <>
            <h1>Refrigerator</h1>
            <form className={ classes.form } onSubmit={ ( event ) => submitHandler( event ) }>
                <p>Enter a name of the product</p>
                <input type="text" required value={ nameInputValue } onChange={ ( e ) => setNameInputValue( e.target.value ) } id="productName" name="productName" placeholder="Name" />
                <p>Enter the expiration date</p>
                <input type="date" value={ dateInputValue } onChange={ ( e ) => setDateInputValue( e.target.value ) } id="expirationDate" name="expirationDate" />
                <p>Enter the product category</p>
                <select onChange={ ( event ) => setCategoryInputValue( event.target.value ) }
                    id="productCategory"
                    name="productCategory"
                >
                    <option value="Kött">Kött</option>
                    <option value="Frukt">Frukt</option>
                    <option value="Vätska">Vätska</option>
                </select>
                <p>Enter the amount</p>
                <input id="productAmount" value={ amountInputValue } onChange={ ( e ) => setAmountInputValue( e.target.value ) } name="productAmount" type="number" placeholder="Product Amount" />
                <button type='submit'>Add Item</button>
            </form>
            <div>
                <p>Filter the data by categories:</p>
                <FilterData filterDataHandler={ filterDataHandler } />
            </div>
            { renderList() }
            { modalIsOpen && <Modal title={ "Error" } message={ "You already added this product once before" } modalIsOpen={ modalIsOpen } showModal={ showModal } closeModal={ closeModal } /> }
            { modalIsOpen ? (<Backdrop show closeModal={ closeModal }/>) : null }
        </>
    );
};

export default WishListInputForm;