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