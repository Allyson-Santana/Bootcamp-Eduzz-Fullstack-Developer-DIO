import React, { useContext } from "react";
import { ThemeContext} from '../createContenxt';

function Form () {

    const context = useContext(ThemeContext);

    const renderForm = () => {
        <form>
        <p>
            <label>Nome:  </label>
            <input />
        </p>

        <p>
            <label>E-mail: </label>
            <input />
        </p>

        <p>
            <label>Tel:    </label>
            <input />
        </p>
    </form>
    }

    const renderNotLogged = ( <h1> É necessário realizar o login!! </h1> );

    return(
     <>
      {!context.token ? renderNotLogged : renderForm
        // code...
      }
     </>
    );
}

export default Form;