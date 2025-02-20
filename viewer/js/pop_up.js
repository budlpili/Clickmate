document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtns = document.querySelectorAll(".openPopup"); // 팝업 여는 버튼들
    const closePopupBtns = document.querySelectorAll(".closePopup"); // 팝업 닫기 버튼들
    const popups = document.querySelectorAll(".popup_back"); // 모든 팝업창
    let popupTimeout; // 팝업 자동 닫기 타이머 변수

    // ✅ 팝업 열기 버튼 클릭 시
    openPopupBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const popupId = this.getAttribute("data-popup"); // 버튼의 data-popup 속성 가져오기
            const popup = document.getElementById(popupId); // 해당하는 팝업 찾기

            if (popup) {
                // 기존 모든 팝업을 닫음
                popups.forEach(p => p.classList.remove("active"));

                // 현재 클릭한 팝업만 열기
                popup.classList.add("active");

                // 두 번째 팝업이면 slide-up 추가
                if (popup.classList.contains("popup_2")) {
                    popup.querySelector(".pop_items").classList.add("slide-up");
                }

                // ✅ 세 번째 팝업(`popup_3`)에만 2초 후 자동 닫기 설정
                if (popup.classList.contains("popup_3")) {
                    clearTimeout(popupTimeout); // 기존 타이머 제거
                    popupTimeout = setTimeout(() => {
                        popup.classList.remove("active");
                        if (popup.querySelector(".pop_items")) {
                            popup.querySelector(".pop_items").classList.remove("slide-up");
                        }
                    }, 1500); // 1.5초 후 닫힘
                }
            }
        });
    });

    // ✅ 닫기 버튼 클릭 시 팝업 닫기
    closePopupBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const popup = btn.closest(".popup_back"); // 클릭한 버튼이 속한 팝업 찾기
            popup.classList.remove("active");

            // 애니메이션 제거 (두 번째, 세 번째 팝업일 경우)
            const popItem = popup.querySelector(".pop_items");
            if (popItem) popItem.classList.remove("slide-up");

            clearTimeout(popupTimeout); // 타이머 제거
        });
    });

    // ✅ 배경 클릭 시 팝업 닫기
    popups.forEach((popup) => {
        popup.addEventListener("click", function (event) {
            if (event.target === popup) {
                popup.classList.remove("active");

                // 애니메이션 제거 (두 번째, 세 번째 팝업일 경우)
                const popItem = popup.querySelector(".pop_items");
                if (popItem) popItem.classList.remove("slide-up");

                clearTimeout(popupTimeout); // 타이머 제거
            }
        });
    });
});
