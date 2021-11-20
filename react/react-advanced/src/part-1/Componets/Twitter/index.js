/*
import React, { Component } from "react";

class Twitter extends Component 
{
  state = {
    tweet: 'title'
  };

  componentDidMount() {
    const { post, loading } = this.props;
    console.log(`ComponentDidMount ${post}`);
    console.log(`componentDidMount:loading ${loading}`);
  }
  componentDidUpdate(prevProps) {
    const { loading } = this.props;
    if( this.props.loading !== prevProps.loading ) {
      console.log(`ComponentDidUpdate:loading ${loading}`);
    }
  }
  componentWillUnmount() {
    console.log(`ComponentWillUnmount! Fui removido :() `);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.sweet !== nextState.tweet || nextProps.loading !== this.props.loading;
  }

  render() {

    const { post } = this.props;
    console.log("render", post);

    return (
    <>
      TESTE COM CLASS
    </>
    );
  }
  
}

  export default Twitter;

*/

                              /********************************************
                              ** Aplicando o mesmo conceito usando HOOKS **
                              ********************************************/

import React, { useState, useEffect, memo } from "react";

// memo é Equivalente ao **shouldComponentUpdate**
// Obs: devemos passa da seguinte forma a exportação do arquivo | memo(Twitter, areEqual);
// param-1: sua função principal, param_2: sua função shouldComponentUpdate
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
}

function Twitter(props) 
{
  const { loading } = props;
  const [ tweet, setTweet ] = useState('title'); // use do useState

    // UseEffect com array vazio é equivalente ao **componentDidMount**
    useEffect(() => {
        const { post, loading } = props;
        console.log(`ComponentDidMount ${post}`);
        console.log(`componentDidMount:loading ${loading}`);
    },[]);

    // UseEffect com valores dentro do array é equivalente ao **componentDidUpdate**
    useEffect(() => {
      console.log(`ComponentDidUpdate ${loading}`);
    },[loading]);

    // UseEffect que retorna algo é equivalente ao **ComponentWillUnmount**
    useEffect(() => {
      return () => {
        console.log(`ComponentWillUnmount: Fui destruido :() `);
      }
    },[]);

    const handleTweet = () => {
      setTweet('Tweet atualizado com sucesso!');
    }
    console.log(`State do Tweet: ${tweet}`);

    return(
    <>
      TESTE COM HOOKS¨
      <button onClick={handleTweet}>Teste com state </button>
    </>
    );

}

export default memo(Twitter, areEqual);