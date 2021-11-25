import React from 'react';
import * as Styled from './style';
import Header from '../Header';

export const Layout = ({ children }) => {

    return (
        <Styled.WrapperLayout>
            <Header />
            { children }
        </Styled.WrapperLayout>
    );

}