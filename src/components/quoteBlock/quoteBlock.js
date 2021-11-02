import { useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import './quoteBlock.scss';
import { Link } from 'react-router-dom';
const QuoteBlock = ({quote, updateQuote, loading}) => { 
    useEffect(() => {
        updateQuote();
    }, [])
    
    return (
        <div className="quote__block">
            <div className="quote__block-divider"></div>
            {loading ? <Spinner/> : <div className="quote__block-quote">{`"${quote.content}"`}</div>}
            <div></div>
            <Link to={`/quotes-generator/${quote.slug}`}>
                <div className="quote__author" hidden={loading}>
                    <div className="quote__author-name">{quote.author}</div>
                    <span className="quote__author-arrow"><i className="fas fa-long-arrow-alt-right"></i></span>
                    <div className="quote__author-tag">{quote.tags}</div>
                </div>
            </Link>
        </div>
    )
}
export default QuoteBlock;