/**
 * 객체를 쿼리 스트링으로 변환하는 함수
 */
async function objectToQueryString(obj) {
    return Object.keys(obj)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
        .join('&');
}

/**
 * 범용 API 요청 Composable 함수
 */
async function useApiRequest(method, url, params = {}, headers = {}) {
    // GET 요청의 경우 URL에 쿼리 스트링 추가
    let endpoint = '/api' + url;
    if (method === 'GET' && Object.keys(params).length) {
        const queryString = await objectToQueryString(params);
        endpoint = `${url}?${queryString}`;
    }
    console.log('endpoint : ', endpoint);
    // useFetch 사용
    const { data, pending, error, refresh } = useFetch(endpoint, {
        method,
        body: method !== 'GET' ? JSON.stringify(params) : undefined,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
    });

    // pending은 로딩 상태, error는 에러 객체
    // refresh 함수를 제공하여 요청을 다시 할 수 있음
    return { data, pending, error, refresh };
}

/**
 * GET 요청을 위한 함수
 */
export async function useApiGet(url, params = {}) {
    return await useApiRequest('GET', url, params);
}

/**
 * POST 요청을 위한 함수
 */
export async function useApiPost(url, params = {}) {
    return await useApiRequest('POST', url, params);
}

/**
 * PUT 요청을 위한 함수
 */
export async function useApiPut(url, params = {}) {
    return await useApiRequest('PUT', url, params);
}

/**
 * DELETE 요청을 위한 함수
 */
export async function useApiDelete(url, params = {}) {
    return await useApiRequest('DELETE', url, params);
}
