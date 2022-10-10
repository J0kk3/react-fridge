//styles
import './Modal.css';

const Modal = ( props ) =>
{

    return (
        <div className="Modal">
            <h1>{ props.title }</h1>
            <p>{ props.message }</p>
            <button className="Button" onClick={ props.closeModal }>
                Dismiss
            </button>
        </div>
    );

};

export default Modal;