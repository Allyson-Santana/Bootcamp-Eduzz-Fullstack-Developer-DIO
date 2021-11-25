import React from "react";
import * as Styled from "./style";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
    return (
      <Styled.Wrapper>
        <Styled.WrapperTitle>{name}</Styled.WrapperTitle>
        <Styled.WrapperFullName>full name:</Styled.WrapperFullName>
        <Styled.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
          {fullName}
        </Styled.WrapperLink>
      </Styled.Wrapper>
    );
  };
  
export default RepositoryItem;