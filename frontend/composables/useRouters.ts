import { useRouter } from '#app';
import type {RouteLocationRaw, RouteParams} from 'vue-router';

// 경로 이동
export const navToPath = async (path: RouteLocationRaw): Promise<void> => {
    try {
        await useRouter().push(path);
    } catch (error: any) {
        console.error('Navigation failed:', error);
    }
};

// 이름을 기반으로 한 경로 이동
export const navToName = async (name: string, data: Record<string, any> = {}): Promise<void> => {
    const router = useRouter();
    const params: RouteParams = {};
    const query: Record<string, any> = {};

    // 가정: 동적 세그먼트는 라우트 이름에서 파악 가능하다고 가정하고, '_'로 시작하는 키는 동적 세그먼트로 간주
    // 이는 실제 프로젝트의 라우트 구성에 따라 조정해야 합니다.
    Object.keys(data).forEach(key => {
        if (key.startsWith('_')) {
            params[key.slice(1)] = data[key];  // 동적 세그먼트 키의 앞에 '_'를 붙여 구분
        } else {
            query[key] = data[key];
        }
    });

    try {
        await router.push({ name, params, query });
    } catch (error: any) {
        console.error('Navigation failed:', error);
    }
};

// 뒤로 가기
export const navBack = async (): Promise<void> => {
    try {
        useRouter().back();
    } catch (error: any) {
        console.error('Navigation failed:', error);
    }
};
