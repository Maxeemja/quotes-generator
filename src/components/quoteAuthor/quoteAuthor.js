
import './quoteAuthor.scss';
const QuoteAuthor = ({loading, quote}) => {

    return (
        <div className="quote__author" hidden={loading}>
            <div className="quote__author-name">{quote.author}</div>
            <div className="quote__author-tag">{quote.tags}</div>
        </div>
    )
}
export default QuoteAuthor;