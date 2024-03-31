// api.js
/**
 * 범용 API 요청 함수
 */
async function callApi(method, url, body = null, headers = {}) {
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    };

    if (body && method !== 'GET') {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, config);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }
        return data;
    } catch (error) {
        throw error;
    }
}

/**
 * 객체를 쿼리 스트링으로 변환하는 함수
 */
function objectToQueryString(obj) {
    return Object.keys(obj)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
        .join('&');
}

/**
 * GET 요청을 위한 함수
 */
export async function get(url, body = {}, headers = {}) {
    const queryString = objectToQueryString(body);
    const urlWithQuery = queryString ? `${url}?${queryString}` : url;
    return await callApi('GET', urlWithQuery, null, headers);
}

/**
 * POST 요청을 위한 함수
 */
export async function post(url, body = {}, headers = {}) {
    return await callApi('POST', url, body, headers);
}

/**
 * PUT 요청을 위한 함수
 */
export async function put(url, body = {}, headers = {}) {
    return await callApi('PUT', url, body, headers);
}

/**
 * DELETE 요청을 위한 함수
 */
export async function del(url, body = {} = {}, headers = {}) {
    return await callApi('DELETE', url, body, headers);
}
