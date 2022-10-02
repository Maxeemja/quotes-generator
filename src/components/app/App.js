import { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useQuoteService } from '../../services/service';
import QuotesList from "../quotesList/quotesList";
import AppHeader from "../appHeader/appHeader";
import QuoteBlock from "../quoteBlock/quoteBlock";
import Footer from '../footer/footer';
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
        <Router  basename={process.env.PUBLIC_URL}>
            <div className="app">
                <AppHeader updateQuote={updateQuote}/>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <QuoteBlock 
                                quote={quote}
                                updateQuote={updateQuote}
                                loading={loading}/>
                        </Route>
                        <Route path="/:slug">
                            <QuotesList
                                loading={loading}
                                setLoading={setLoading}
                            />
                        </Route>
                    </Switch>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
