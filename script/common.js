// ==================================================
// common.js
// - header / footer 공통 파일 include
// - include 완료 후 공통 기능 실행
// - 라이트 / 다크 모드 전환
// ==================================================

document.addEventListener('DOMContentLoaded', async function () {
    // 1. header, footer 등 공통 파일 먼저 불러오기
    await includeCommonFiles();

    // 2. include 된 header 안의 버튼을 사용할 수 있도록 include 이후 실행
    initThemeMode();

    // 3. header/footer 로드 후 active 메뉴 실행
    if (typeof setActiveMenu === 'function') {
        setActiveMenu();
    }
});


// ==================================================
// header, footer include
// data-include 속성에 작성된 파일을 불러와 해당 영역에 삽입
// ==================================================
async function includeCommonFiles() {
    const elements = document.querySelectorAll('[data-include]');

    // include 대상이 없으면 실행 중단
    if (!elements.length) return;

    for (const el of elements) {
        const file = el.getAttribute('data-include');

        // data-include 값이 비어있는 경우 해당 요소만 건너뜀
        if (!file) continue;

        try {
            const res = await fetch(file);

            // 파일을 정상적으로 불러온 경우 HTML 삽입
            if (res.ok) {
                el.innerHTML = await res.text();
            } else {
                console.error('공통 파일 불러오기 실패:', file, res.status);
            }
        } catch (err) {
            console.error('fetch 에러:', file, err);
        }
    }
}


// ==================================================
// 라이트 / 다크 모드 전환
// - html 태그에 data-theme 값을 변경하여 전체 컬러 변경
// - localStorage에 선택한 테마 저장
// - 새로고침 후에도 선택한 테마 유지
// - 버튼 위치 기준으로 원형 확산 효과 실행
// ==================================================
function initThemeMode() {
    const html = document.documentElement;
    const themeBtn = document.querySelector('.toggleBtn');
    const overlay = document.querySelector('.themeOverlay');

    // 저장된 테마가 있으면 저장값 사용, 없으면 기본 light 사용
    const savedTheme = localStorage.getItem('theme');
    const currentTheme = savedTheme ? savedTheme : 'light';

    // 페이지 진입 시 현재 테마 적용
    html.setAttribute('data-theme', currentTheme);

    // 테마 버튼이 없는 페이지에서는 테마 적용만 하고 종료
    if (!themeBtn) return;

    // 접근성 속성 업데이트
    themeBtn.setAttribute('aria-pressed', currentTheme === 'dark');

    themeBtn.addEventListener('click', function () {
        const nowTheme = html.getAttribute('data-theme');
        const nextTheme = nowTheme === 'dark' ? 'light' : 'dark';

        // 원형 확산 효과가 있는 경우, 버튼 중앙에서 시작되도록 위치 설정
        if (overlay) {
            const rect = themeBtn.getBoundingClientRect();

            overlay.style.left = rect.left + rect.width / 2 + 'px';
            overlay.style.top = rect.top + rect.height / 2 + 'px';

            // 같은 애니메이션을 반복 실행하기 위한 초기화
            overlay.classList.remove('is-active');
            void overlay.offsetWidth;
        }

        // 테마 변경
        html.setAttribute('data-theme', nextTheme);

        // 선택한 테마 저장
        localStorage.setItem('theme', nextTheme);

        // 접근성 상태값 변경
        themeBtn.setAttribute('aria-pressed', nextTheme === 'dark');

        // 원형 확산 효과 실행
        if (overlay) {
            overlay.classList.add('is-active');
        }
    });
}