// 페이지 로드 후 실행
document.addEventListener('DOMContentLoaded', async () => {
    const elements = document.querySelectorAll('[data-include]');
    for (const el of elements) {
        const file = el.getAttribute('data-include');
        if (file) {
            try {
                const res = await fetch(file);
                if (res.ok) {
                    el.innerHTML = await res.text();
                } else {
                    console.error('헤더 파일 불러오기 실패:', res.status);
                }
            } catch (err) {
                console.error('fetch 에러:', err);
            }
        }
    }
});
