import { useRouter } from '#app';

// 경로 이동
export const navToPath = async (path) => {
    try {
        await useRouter().push(path);
    } catch (error) {
        console.error('Navigation failed:', error);
    }
};

// 이름을 기반으로 한 경로 이동
export const navToName = async (name, params = {}) => {
    try {
        await useRouter().push({ name, params });
    } catch (error) {
        console.error('Navigation failed:', error);
    }
};

// 뒤로 가기
export const navBack = async () => {
    try {
        useRouter().back();
    } catch (error) {
        console.error('Navigation failed:', error);
    }
};
