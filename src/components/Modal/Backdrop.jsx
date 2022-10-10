import './Backdrop.css';

const Backdrop = ( props ) =>
{
    const cssClasses = [ "Backdrop", props.show ? "BackdropOpen" : "BackdropClosed" ];

    return (
        <div className={ cssClasses.join( " " ) } onClick={props.closeModal}></div>
    );
};

export default Backdrop;