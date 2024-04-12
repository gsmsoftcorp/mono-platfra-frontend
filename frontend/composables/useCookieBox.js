import { useCookie } from '#app';

export const useSetCookie = async (name, value, options = {}) => {
    const cookie = useCookie(name, {
        path: options?.path ? options?.path : '/',
        maxAge: options?.maxAge ? options.maxAge * 60 : 1800, // 초 단위로 변환 기본값 30분
        secure: options?.secure ? options?.secure : null,
        sameSite: options?.sameSite ? options?.sameSite : null
    });
    cookie.value = value;
};

export const useGetCookie = async (name) => {
    const cookie = useCookie(name);
    return cookie.value;
};

export const useRemoveCookie = async (name) => {
    const cookie = useCookie(name);
    cookie.value = null;
};
