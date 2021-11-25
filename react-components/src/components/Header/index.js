import React, { useState } from "react";
import * as Styled from './style';
import userGithub from '../../hooks/UserGithub';
import styled from "styled-components";

const Header = () => {
    const { getUser } = userGithub();
    const [ userNameSearch, setUserNameSearch ] = useState();

    const submitGetUser = () => {
        if(!userNameSearch) return;
        return getUser(userNameSearch)
    } 

    return(
        <header>
            <styled.Wrapper>
                <input
                    type="text"
                    placeholder="Digite o username para pesquisa..."
                    onChange={ (event) => setUserNameSearch(event.target.value) }
                />
                
                <button type="submit" onClick={submitGetUser}> 
                <span>Buscar</span>
                </button>

            </styled.Wrapper>
        </header>
    );
}

export default Header;

