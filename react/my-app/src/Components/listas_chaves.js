import React from "react";

const listCustomers = [
    {id: 1, nam: "Allyson", skills:['php','javascript']},
    {id: 2, name: "Pedro", skills:['html', 'css']},
    {id: 3, name: "Leonardo", skills:['c#', 'java']}
];

function App() {

    const renderCustomers = (custome, index) => {
        return(
            <div key={ `Customer-${custome.id}`}>
                <li>{custome.name}</li>
                {custome.skills.map(renderCustomersSkills)}
            </div>
        );
    }
    const renderCustomersSkills = (skills, index) => {
        <div key={ `Skills-${index}` }>
            <li>{skills}</li>
        </div>
    }

    return(
        <di>
            {listCustomers.map(renderCustomers)}
        </di>
    );
}

export default App;