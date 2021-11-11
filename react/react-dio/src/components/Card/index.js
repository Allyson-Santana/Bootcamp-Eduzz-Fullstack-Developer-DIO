import ButtonCount from "../ButtonCount";
import { useState } from 'react'

function Card() {

    const [count, setCount] = useState(0);
    const increments = () => setCount(count + 1);
    const dencrements = () => setCount(count - 1);

    return(
    <>
    <div className="row">
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    </div>
    <ButtonCount onClick={increments} className="m-2 btn btn-success" value="Incrementar" />
    <ButtonCount onClick={dencrements} className="m-2 btn btn-danger"  value="Decrementar" />
    <p className="text-center">{count}</p>
    </>
    );
}

export default Card;