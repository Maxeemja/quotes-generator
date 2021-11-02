import './appHeader.scss';

const AppHeader = ({updateQuote}) => {

    return (
        <header>
            <div className="rnd-btn" onClick={() => updateQuote()}>random<i className="fas fa-sync-alt"></i></div>
        </header>
    )
}
export default AppHeader;