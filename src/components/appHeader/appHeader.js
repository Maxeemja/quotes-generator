import './appHeader.scss';
import { Link, withRouter } from 'react-router-dom';
const AppHeader = ({updateQuote, location}) => {
    return (
        <header>
            <Link to="/quotes-generator">
                <div 
                    className="rnd-btn" 
                    onClick={location.pathname === '/quotes-generator' ? () => updateQuote() : null}>random<i className="fas fa-sync-alt"></i></div>
            </Link>
        </header>
    )
}
export default withRouter(AppHeader);