import { Link } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><Link to="/" exact activeStyle={{ 'color': '#9f0013' }}>Characters</Link></li>
                    /
                    <li><Link to="/comics" activeStyle={{ 'color': '#9f0013' }}>Comics</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;