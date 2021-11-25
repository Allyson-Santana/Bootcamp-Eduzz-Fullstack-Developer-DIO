import React, { useState } from "react";
import * as Styled from './style';
import userGithub from '../../hooks/UserGithub';


const Header = () => {
    const { getUser } = userGithub();
    const [ userNameSearch, setUserNameSearch ] = useState();

    const submitGetUser = () => {
        if(!userNameSearch) return;
        return getUser(userNameSearch)
    } 

    return(
        <header>
            <Styled.Wrapper>
                <input
                    type="text"
                    placeholder="Digite o username para pesquisa..."
                    onChange={ (event) => setUserNameSearch(event.target.value) }
                />
                
                <button type="submit" onClick={submitGetUser}> 
                <span>Buscar</span>
                </button>

            </Styled.Wrapper>
        </header>
    );
}

export default Header;
