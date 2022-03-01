import  CartWidget  from "./CartWidget";

function NavBar() {
    return (
        <>
            <nav className="nav1">
                <form action="input" className="formulario">
                    <input type="text" name="" id="busqueda" placeholder="busque juego" />
                </form>
            </nav>
            <div className="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Mas Opciones
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li><a className="dropdown-item" href="#imagen">Usuarios</a></li>
                    <li><a className="dropdown-item" href="#foot">Footer</a></li>
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </>

    )
};

export default NavBar;