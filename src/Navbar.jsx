import imagen from "./carritoo.png";
export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="sitio-titulo">Aethernum Store Mendoza</a>
            <ul>
                <li className="active">
                    <a href="/Precios">Precios</a>
                </li>
                <li>
                    <a href="/Acerca_de">Acerca de</a>
                </li>
                <li>
                    <a href="/carrito">
                      <p>1</p>  <img className="imagenav" src={imagen} alt="Carrito de compras" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}