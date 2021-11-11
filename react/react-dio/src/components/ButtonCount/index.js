
function ButtonCount(porps) {
    return(
        <button onClick={porps.onClick} type="button" className={porps.className}> {porps.value} </button>
    );
}

export default ButtonCount;