import './contact.css';

export default function Contacto(props) {
    return <div className="contact">
                <img className="contact__img" src={ props.image } alt="" />
                <div className="contact__info">
                    <h1 className="contact__name">{ props.name }</h1>
                    <h2 className="contact__state">{ props.estado }</h2>
                </div>
            </div>    
}