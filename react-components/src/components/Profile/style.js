import styled from "styled-components";

 const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
`;

 const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

 const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

 const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;

 const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;

export {
    Wrapper,
    WrapperImage,
    WrapperInfoUser,
    WrapperStatusCount,
    WrapperUserGeneric
}