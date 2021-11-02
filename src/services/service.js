import { useHttp } from "../hooks/http.hook"

export const useQuoteService = () => {
    const {request} = useHttp();


    const _apiBase = 'https://api.quotable.io/';
    const getRandomQuote = async () => {
        const res = await request(`${_apiBase}random`);
        return _transformData(res);
    }
    const getQuoteList = async (name) => {
        const res = await request(`${_apiBase}quotes?author=${name}`);
        return res.results.map(_transformData);    
    }
    
    const _transformData = (quote) => {
        return {
            id: quote.id,
            content: quote.content,
            author: quote.author,
            slug: quote.authorSlug,
            tags: quote.tags.toString().replace(',', ' , ')
        }
    }

    return {getRandomQuote, getQuoteList}
}
