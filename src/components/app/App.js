import { useState } from "react";
import AppHeader from "../appHeader/appHeader";
import QuoteBlock from "../quoteBlock/quoteBlock";
import QuoteAuthor from "../quoteAuthor/quoteAuthor";
import { useQuoteService } from '../../services/service';
const App = () => {
    const [quote, setQuote] = useState({});
    const [loading, setLoading] = useState(true);
    const {getRandomQuote} = useQuoteService();
    const updateQuote = () => {
        setLoading(true);
        getRandomQuote()
            .then((data) => {
                setLoading(false);
                setQuote(data);
            })    
    }

    return (
        <div className="app">
            <AppHeader updateQuote={updateQuote}/>
            <main>
                <QuoteBlock 
                    quote={quote}
                    updateQuote={updateQuote}
                    loading={loading}/>
                <QuoteAuthor 
                    loading={loading}
                    quote={quote}/>
            </main>
        </div>
    );
}

export default App;
