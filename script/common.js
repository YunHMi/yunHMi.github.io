//header, footer include
document.addEventListener('DOMContentLoaded', async () => {
    const elements = document.querySelectorAll('[data-include]');

    for (const el of elements) {
        const file = el.getAttribute('data-include');

        if (!file) return;

        try {
            const res = await fetch(file);

            if (res.ok) {
                el.innerHTML = await res.text();
            } else {
                console.error('공통 파일 불러오기 실패:', file, res.status);
            }
        } catch (err) {
            console.error('fetch 에러:', file, err);
        }
    }

    // header/footer 로드 후 실행할 공통 함수
    setActiveMenu();
});

//라이트,다크 모드 변한
document.addEventListener('DOMContentLoaded', function () {
    const html = document.documentElement;
    const themeBtn = document.querySelector('.toggleBtn');
    const overlay = document.querySelector('.themeOverlay');

    if (!themeBtn) return;

    const savedTheme = localStorage.getItem('theme');

    // 저장된 테마가 있으면 저장값 사용, 없으면 기본 light
    const currentTheme = savedTheme ? savedTheme : 'light';

    html.setAttribute('data-theme', currentTheme);
    themeBtn.setAttribute('aria-pressed', currentTheme === 'dark');

    themeBtn.addEventListener('click', function () {
        const nowTheme = html.getAttribute('data-theme');
        const nextTheme = nowTheme === 'dark' ? 'light' : 'dark';

        // 원형 효과 시작 위치를 버튼 중앙으로 설정
        if (overlay) {
            const rect = themeBtn.getBoundingClientRect();

            overlay.style.left = rect.left + rect.width / 2 + 'px';
            overlay.style.top = rect.top + rect.height / 2 + 'px';

            overlay.classList.remove('is-active');
            void overlay.offsetWidth;
        }

        // 테마 변경
        html.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
        themeBtn.setAttribute('aria-pressed', nextTheme === 'dark');

        // 원형 확산 효과 실행
        if (overlay) {
            overlay.classList.add('is-active');
        }
    });
});