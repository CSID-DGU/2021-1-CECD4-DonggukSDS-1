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
        url: `http://1.238.89.68:3000/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}