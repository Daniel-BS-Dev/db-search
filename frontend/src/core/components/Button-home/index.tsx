import './styles.css';

type Props = {
  text: string;

}

const Button = ({text}: Props) => {
    return(
           <button className="button-home">
                 <h3 className="button-title">{text}</h3>
           </button>
           
        
    );
}
export default Button;