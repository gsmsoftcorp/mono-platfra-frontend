import { useCookie } from '#app';

export function useAccessToken() {
    const accessToken = useCookie('accessToken');

    async function setToken(token) {
        accessToken.value = token;
    }

    async function getToken() {
        return accessToken.value;
    }

    return {setToken, getToken};
}

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
    let endpoint = url.startsWith('/api') ? url : `/api${url.startsWith('/') ? '' : '/'}${url}`;
    if (method === 'GET' && Object.keys(params).length) {
        const queryString = await objectToQueryString(params);
        endpoint = `${endpoint}?${queryString}`;
    }

    // accessToken 체크
    const accessToken = await useAccessToken().getToken();
    console.log('accessToken : ', accessToken);
    if (!endpoint.includes('/login') && !accessToken) { // TODO url white list 정책 설정 필요 (공통 코드 호출 api)
        throw new Error('No access token available');
    }
    const bearerToken = accessToken ? `Bearer ${accessToken}` : null;
    // useFetch 사용
    const { data, pending, error, refresh } = await $fetch(endpoint, {
        method,
        body: method !== 'GET' ? JSON.stringify(params) : undefined,
        headers: {
            'Content-Type': 'application/json',
            Authorization: bearerToken,
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
export async function useApiGet(url, params = {}, headers = {}) {
    return await useApiRequest('GET', url, params, headers);
}

/**
 * POST 요청을 위한 함수
 */
export async function useApiPost(url, params = {}, headers = {}) {
    return await useApiRequest('POST', url, params, headers);
}

/**
 * PUT 요청을 위한 함수
 */
export async function useApiPut(url, params = {}, headers = {}) {
    return await useApiRequest('PUT', url, params, headers);
}

/**
 * DELETE 요청을 위한 함수
 */
export async function useApiDelete(url, params = {}, headers = {}) {
    return await useApiRequest('DELETE', url, params, headers);
}
