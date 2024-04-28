import { useFetch } from 'nuxt/app';

interface Params {
    [key: string]: any;
}

interface Headers {
    [key: string]: string;
}

// FetchOptions 타입 정의
interface FetchOptions extends RequestInit {
    method: string;
    body?: string;
    headers: HeadersInit;
}

async function useApiRequest(method: string, url: string, params: Params = {}, headers: Headers = {}): Promise<any> {
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
    if (!accessToken && !endpoint.includes('/login') && !endpoint.includes('/platfra/search')) {
        alert('로그인 해주세요.' + endpoint);
    }
    const bearerToken = accessToken ? `Bearer ${accessToken}` : '';

    // useFetch 사용
    const fetchOptions: FetchOptions = {
        method: method,
        body: method !== 'GET' ? JSON.stringify(params) : undefined,
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: bearerToken,
            ...headers,
        }),
    };

    const { data } = await useFetch(endpoint, fetchOptions as any);
    return data.value;
}

// 이하 함수는 동일하게 유지
