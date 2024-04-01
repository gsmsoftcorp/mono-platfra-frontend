import { useRuntimeConfig } from '#imports';
/**
 * 범용 API 요청 함수
 */
async function callApi(method, endpoint, body = null, headers = {}) {
    const { public: { apiBaseUrl } } = useRuntimeConfig();
    const formattedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${apiBaseUrl}${formattedEndpoint}`;
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
        // 응답 본문이 존재하는지 확인
        const text = await response.text(); // 먼저 텍스트로 응답을 읽음
        const data = text ? JSON.parse(text) : {}; // 텍스트가 비어있지 않으면 JSON으로 파싱, 그렇지 않으면 빈 객체 반환

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
    return await callApi('GET', urlWithQuery, body, headers);
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
