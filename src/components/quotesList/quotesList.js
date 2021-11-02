import './quotesList.scss';
import { useQuoteService } from '../../services/service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
const QuotesList = ({loading, setLoading}) => {
    const [quotes, setQuotes] = useState([]);
    const [name, setName] = useState('');
    let { slug } = useParams();
    const {getQuoteList} = useQuoteService();

    useEffect(() => {
        setLoading(true);
        getQuoteList(slug)
            .then(onListLoaded)    
    }, []);

    const onListLoaded = (data) => {
        setLoading(false);
        setQuotes(data);
        setName(data[0].author);
    }

    const renderItems = (arr) => {
        const items = arr.map((item, i) => {
            return (
                <div className="quotes__list-item" key={i}>
                    <div className="quote__block-divider"></div>
                    <div className="quotes__list-item-text">{`"${item.content}"`}</div>  
                </div>
            )
        })
        return (
            <>
                
                <div className="quotes__list">
                    {items}
                </div>
            </>
            
        )
    }
    return(
        <>
            <div className="quote__author-name big" hidden={loading}>{name}</div>
            {loading ? <Spinner/> : renderItems(quotes)}
        </>
    )
}
export default QuotesList;