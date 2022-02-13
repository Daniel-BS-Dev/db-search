
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button-home';
import'./styles.css';

const Home = () => (
    <section className="home-container">
       <div className="home-content">      
           <h1 className="home-title">
               Desafio <span>do Capítulo 3,</span> Bootcamp DevSuperior
            </h1>
            <p className="home-description">
               Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/><br/>
               Favor observar as instruções passadas no capítulo sobre a
               elaboração deste projeto.<br/><br/>
               Este design foi adaptado a partir de Ant Design System for Figma,
               de Mateusz Wierzbicki.<br/><br/>Email: <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
            </p>
            <Link to="/search">
              <Button text="Começar"/>
            </Link>
        </div>
     </section> 
);
export default Home;