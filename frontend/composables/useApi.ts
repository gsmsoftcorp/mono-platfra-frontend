import {useFetch, type UseFetchOptions} from '#app';

interface Params {
    [key: string]: any;
}

interface Headers {
    [key: string]: string;
}

// FetchOptions 타입 정의
interface FetchOptions extends Omit<UseFetchOptions<any>, 'method'> {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'; // 메서드를 명확한 타입으로 지정
    body?: string;
    headers: HeadersInit;
    fetchOnServer: boolean;
}

async function useApiRequest(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, params: Params = {}, headers: Headers = {}): Promise<any> {
    let endpoint = url.startsWith('/api') ? url : `/api${url.startsWith('/') ? '' : '/'}${url}`;
    // 경로 변수 처리
    Object.keys(params).forEach(key => {
        if (url.includes(`{${key}}`)) {
            endpoint = endpoint.replace(`{${key}}`, encodeURIComponent(params[key]));
            delete params[key];
        }
    });

    // 쿼리 스트링 처리
    if (method === 'GET' && Object.keys(params).length) {
        const urlObject = new URL(endpoint, window.location.origin);
        Object.keys(params).forEach(key => {
            if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
                urlObject.searchParams.append(key, params[key]);
            }
        });
        endpoint = urlObject.toString();
    }

    // accessToken 체크
    const accessToken = localStorage.getItem('accessToken');
    const isWhite = endpoint.includes('/login') || endpoint.includes('/signup') || endpoint.includes('/platfra');
    if (!accessToken && !isWhite) {
        alert('로그인 해주세요.' + endpoint);
        await navToName('account-sign');
    }
    const bearerToken = accessToken && !isWhite ? `Bearer ${accessToken}` : '';

    // useFetch 사용
    const fetchOptions: FetchOptions = {
        method: method as 'GET' | 'POST' | 'PUT' | 'DELETE',
        body: method !== 'GET' ? JSON.stringify(params) : undefined,
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: bearerToken,
            ...headers,
        }),
        fetchOnServer: true
    };

    const { data } = await useFetch(endpoint, fetchOptions);
    if(data.value.code === 'AR001') {
        alert('로그인 해주세요.');
        await navToName('account-sign');
    }
    return data.value;
}


/**
 * GET 요청을 위한 함수
 */
export async function useApiGet(url: string, params: Params = {}, headers: Headers = {}): Promise<any> {
    return await useApiRequest('GET', url, params, headers);
}

/**
 * POST 요청을 위한 함수
 */
export async function useApiPost(url: string, params: Params = {}, headers: Headers = {}): Promise<any> {
    return await useApiRequest('POST', url, params, headers);
}

/**
 * PUT 요청을 위한 함수
 */
export async function useApiPut(url: string, params: Params = {}, headers: Headers = {}): Promise<any> {
    return await useApiRequest('PUT', url, params, headers);
}

/**
 * DELETE 요청을 위한 함수
 */
export async function useApiDelete(url: string, params: Params = {}, headers: Headers = {}): Promise<any> {
    return await useApiRequest('DELETE', url, params, headers);
}
