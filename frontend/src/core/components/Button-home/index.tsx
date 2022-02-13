
type Props = {
  text: string;

}

const Button = ({text}: Props) => {
    return(
           <button className="btn btn-primary">
                 <h3 >{text}</h3>
           </button>
           
        
    );
}
export default Button;