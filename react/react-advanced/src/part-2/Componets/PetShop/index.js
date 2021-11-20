import React from "react";
import ReactPropTypes  from "prop-types";

function PetShop (props) {
    const { dogs, cats, custumers, custumersName, onClick } = props;
    return(
        <div>
            <h1>Dogs: { dogs } </h1>
            <h1>Cats: { cats }  </h1>
            <div>
               Quantidade de cliente: { custumers }
            </div>
            <div>
                Nome do Cliente: { custumersName }
            </div>
        </div>
    );
}

PetShop.defaultProps = {
    dogs: 1,
    cats: 2,
    custumers: []
}

PetShop.ReactPropTypes = {
    dogs: ReactPropTypes.number.isRequired,
    cats: ReactPropTypes.number,
    custumers: ReactPropTypes.array,
    custumersName: ReactPropTypes.string.isRequired,
    onClick: ReactPropTypes.func.isRequired,
    status: ReactPropTypes.oneOf(["Completed", "Disabled"])
}

export default PetShop;