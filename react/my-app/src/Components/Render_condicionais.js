import React from "react";

const btnOne = <button>Primary button</button>;
const btnTwo = <button>Second button</button>;
const hasBtn = true;
const myName = "Allyson";

const showClient = () => {
    if (!hasBtn) return null;
    return (
        <div>
            <p>Nome do cliente: {myName}</p>
        </div>
    );
}
function App()
{
    return (
        <div>
        
        <p>Renderização e condicionais</p>

            {hasBtn && 
                btnOne,
                btnTwo
            };
            
            {hasBtn ? 
            <div>
                <p>Têm btns AQUI</p>
            </div>
            : 
            <div>
                <p>Não Têm btn AQUI</p>
            </div>
            }

            <div>
                {showClient}
            </div>

        </div>
    );
}

export default App;