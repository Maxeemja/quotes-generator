import { useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import './quoteBlock.scss';

const QuoteBlock = ({quote, updateQuote, loading}) => { 
    useEffect(() => {
        updateQuote();
    }, [])
    
    return (
        <div className="quote__block">
            <div className="quote__block-divider"></div>
            {loading ? <Spinner/> : <div className="quote__block-quote">{`"${quote.content}"`}</div>}
        </div>
    )
}
export default QuoteBlock;