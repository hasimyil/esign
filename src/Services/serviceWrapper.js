import * as Constants from "@/Common/Constants";
import baseUrl from './serviceBaseUrl.json'



const generateHeaders = (user, additionalHeaders={}) =>{
    return new Headers({
        'Content-Type': 'application/json',
         Accept: 'application/json',
         'Authorization' : `Bearer ${user.userToken || user.access_token}`,
         ...additionalHeaders
    })
}

function getBaseUrl(type) {
    const env = Constants.getEnv();
    let url = baseUrl[type][env].url
    return url;
}


const GET = async(type, uri, headers) =>{
    let fullUrl = `${getBaseUrl(type)}/${uri}`;
    console.log(`GET: ${fullUrl}`, `HEADERS: `, headers || {});

    const request = await fetch(fullUrl, {
        method: 'GET',
        headers: headers || {}
    });

    if(request.status !== 200 && request.status !== 204 && request.status !== 302){
        console.log(`ERROR with GET request: ${fullUrl} - Headers: ${headers || {}}`)
        throw request;
    }

    const jsonRes = await request.json();
    console.log(`Success : ${fullUrl}`, "Response:", jsonRes);
    return jsonRes;
}

const POST = async(type, uri, headers, body) =>{
    let fullUrl = `${getBaseUrl(type)}/${uri}`;
    console.log(`POST: ${fullUrl}`, `HEADERS: `, headers || {}, `BODY : ${body}`);

    const request = await fetch(fullUrl, {
        method: 'POST',
        headers: headers || {},
        body
    });

    if(request.status !== 200 && request.status !== 204 && request.status !== 302){
        console.log(`ERROR with POST request: ${fullUrl} - Headers: ${headers || {}}`)
        throw request;
    }

    const jsonRes = await request.json();
    console.log(`Success : ${fullUrl} - response: ${jsonRes}`);
    return jsonRes;
}


const POST1 = async(type, uri, headers, params) =>{
    let fullUrl = `${getBaseUrl(type)}/${uri}?scope=ui&username=${params.username}&password=${params.password}&grant_type=${params.grant_type}`;
    console.log(`POST: ${fullUrl}`, `HEADERS: `, headers|| {}, `BODY : `,params);

    const request = await fetch(fullUrl, {
        method: 'POST',
        headers: headers || {}
    });
    if(request.status !== 200 && request.status !== 204 && request.status !== 302){
        console.log(`ERROR with POST request: ${fullUrl} - Headers: ${headers || {}}`)
        
        return request;
    }

    const jsonRes = await request.json();
    console.log(`Success : ${fullUrl} - response: ${jsonRes}`);
    return jsonRes;
}


export {GET, POST, POST1, generateHeaders};