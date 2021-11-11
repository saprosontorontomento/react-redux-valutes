import axios from 'axios'
import { URL } from '../../actions/newsAction'

export default function NewsService(limit = 10, page = 1) {
    
    try {
        const resp = axios.get(URL, {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return resp
    } catch(error) {
        throw new Error(`Не выходит получить новости`);
    }
}
