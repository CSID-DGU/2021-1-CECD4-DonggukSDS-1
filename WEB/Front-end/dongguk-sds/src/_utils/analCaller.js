import axios from 'axios';
axios.baseUrl = process.env.ANALYSIS_SERVER_API;

/**
 * 
 * @param {String} endpoint 
 * @param {String} method 
 * @param {Object} headers 
 * @param {Object} body 
 */
export default function analAPI(endpoint, method = 'GET', headers = null,body){
    return axios({
        method: method,
        headers: headers,
        url: `http://localhost:3002/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}