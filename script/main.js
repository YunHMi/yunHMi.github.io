document.addEventListener('DOMContentLoaded', function () {
    const swipers = document.querySelectorAll('.younSwiper');
    const pcCheck = window.matchMedia('(min-width: 769px)');

    swipers.forEach(function (swiper) {
        const wrap = swiper.querySelector('.younSwiper-wrap');
        if (!wrap) return;

        // 슬라이드 복제
        function cloneSlide() {
            // 이미 복제된 슬라이드가 있으면 중복 복제 방지
            if (wrap.querySelector('.cloneSlide')) return;

            const slides = wrap.querySelectorAll('.younSwiper-slide:not(.cloneSlide)');

            slides.forEach(function (slide) {
                const clone = slide.cloneNode(true);

                clone.classList.add('cloneSlide');
                clone.setAttribute('aria-hidden', 'true');

                wrap.appendChild(clone);
            });
        }

        // 복제 슬라이드 제거
        function removeClone() {
            const clones = wrap.querySelectorAll('.cloneSlide');

            clones.forEach(function (clone) {
                clone.remove();
            });
        }

        // 화면 사이즈에 따라 PC / 모바일 상태 변경
        function setSlide() {
            swiper.classList.remove('pc', 'mo', 'stop');

            if (pcCheck.matches) {
                cloneSlide();
                swiper.classList.add('pc');
            } else {
                removeClone();
                swiper.classList.add('mo');
            }
        }

        // PC에서 마우스 올리면 슬라이드 정지
        swiper.addEventListener('mouseenter', function () {
            if (!pcCheck.matches) return;

            swiper.classList.add('stop');
        });

        // PC에서 마우스 벗어나면 슬라이드 재생
        swiper.addEventListener('mouseleave', function () {
            if (!pcCheck.matches) return;

            swiper.classList.remove('stop');
        });

        // 최초 실행
        setSlide();

        // PC / 모바일 전환 시 다시 세팅
        pcCheck.addEventListener('change', setSlide);
    });
});