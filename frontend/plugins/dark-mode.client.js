// plugins/dark-mode.client.js
export default defineNuxtPlugin(nuxtApp => {
    const toggleDarkMode = () => {
        const hour = new Date().getHours();
        const isDarkMode = hour >= 23 || hour < 7; // 오후 11시부터 오전 7시 사이를 체크

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // 페이지 로드 시 다크 모드 상태를 설정
    toggleDarkMode();

    // 선택적: 사용자의 시스템 시간이 변경될 때마다 다크 모드를 재평가할 수 있습니다.
    // 이 예제에서는 단순화를 위해 setInterval을 사용합니다.
    // 주의: 실제 프로덕션 코드에서는 더 효율적인 방법을 고려해야 할 수 있습니다.
    setInterval(toggleDarkMode, 60 * 1000); // 매 분마다 확인
});
