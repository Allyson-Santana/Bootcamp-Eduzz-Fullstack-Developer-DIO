import * as Styled from './style';

export const Layout = ({children}) => {

    return(
        <Styled.MainLayout>
            components Layouts
            { children }
        </Styled.MainLayout>
    );

}