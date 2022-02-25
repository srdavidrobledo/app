import imagen from "./imagenes/logo.png";

function Header() {
    return (
        <header id="inicio">
            <div >
                <a href="#imagen"><img src={imagen} al="logo" /></a>
            </div>
        </header>
    )
};

export default Header;