import {Link} from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header className="header-container">
            <div className="logo">Gerenciamento de Usuários</div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastrar</Link>
                <Link to="/listar">Listar Usuários</Link>
            </nav>
        </header>
    );
}

export default Header;