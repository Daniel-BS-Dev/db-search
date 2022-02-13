import React, { useState } from 'react';
import { User } from '../../Types/User';
import axios from "axios";
import { BASE_URL} from '../../utils/request';
import './styles.css';
import SearchView from '../../core/components/Search-view';


const Search = () => {
  const [name, setName] = useState('');
  const [userData, setUserData] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  
  const handleSubmit = (event:React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    setIsLoading(true);
    axios(`${BASE_URL}${name}`)
      .then(response => setUserData(response.data))
      .finally(()=> {
        setIsLoading(false);
      });
    }
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)

  }
  return (
    
       <div className="search-container">
       <form onSubmit={handleSubmit}>
           <div className="search-content">
             <h2 className="search-title">Encontre um perfil Github</h2>
             <div className="div-input">
             <input 
                  type="text" 
                  name="name" 
                  placeholder="Usuario github"
                  className="search-input"
                  required
                  value={name}
                  onChange={handleChange} />
              </div>
              <button type = "submit" value="submit" className="search-button">
                  <h3>Encontrar</h3> 
              </button>
          
          </div>
       </form>
       
       {isLoading ? <div className="search-laoder">
                    Carregando
                    </div> : (
                    userData && <SearchView  followers={userData.followers}
                                             following={userData.following}
                                             public_repos={userData.public_repos}
                                             company={userData.company}
                                             blog={userData.blog}
                                             updated_at={userData.updated_at}
                                             avatar_url={userData.avatar_url}
                                             location={userData.location}
                                             login={userData.login}
                                />
       )}
           
           
      </div>
  ); 
}
export default Search;
