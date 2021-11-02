import './appHeader.scss';
import { Link, withRouter } from 'react-router-dom';
const AppHeader = ({updateQuote, location}) => {
    return (
        <header>
            <Link to="/">
                <div 
                    className="rnd-btn" 
                    onClick={location.pathname === '/' ? () => updateQuote() : null}>random<i className="fas fa-sync-alt"></i></div>
            </Link>
        </header>
    )
}
export default withRouter(AppHeader);