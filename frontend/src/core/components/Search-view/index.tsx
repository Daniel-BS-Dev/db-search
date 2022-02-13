import'./styles.css';
import Button from '../Button-home';

type Props = {
   login: string;
    following: number;
    followers?: number;
    public_repos: number;
    company: string;
    blog:string;
    updated_at: string;
    avatar_url:string;
    location:string;
    
}

  const SearchView = ({login, followers, avatar_url, following, public_repos, company, blog, updated_at, location}: Props) => {
  const BASE_URL = `https://github.com/${login}`;
     return(
      
        <div className="view-contanier">
          <div className="view-image">
             <img src={avatar_url}  alt="GitHub" className="user-image"/>
             <div className="search-button">
              <a href= {BASE_URL} >
                 <Button text="Ver Perfil" />
               </a>
            </div>
          </div>
            
            <div className="view-details">
              <ul className="view-details-list">
                 <li><h5>Repositorios:{public_repos}</h5></li>  
                 <li><h5>Seguidores:{followers}</h5></li>
                 <li><h5>Seguindo:{following}</h5></li>
              </ul>
              
              
            <div className="view-information"> 
               <h6 className="view-title">Informações</h6>
               <ul className="view-information-list">
                  <li><h5>Empresa:<span>{company}</span></h5></li>
                  <li><h5>Website/Blog:<span>{blog}</span></h5></li>
                  <li><h5>Localidade:<span>{location}</span></h5></li>
                  <li><h5>Membro desde:<span>{updated_at}</span></h5></li>
            </ul>
        
           </div>

          </div>
      
       </div>    
);
    }
export default SearchView;