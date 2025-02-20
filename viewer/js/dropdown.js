document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
    const firstDropdown = dropdowns[0]; // 첫 번째 드롭다운
    const secondDropdown = dropdowns[1]; // 두 번째 드롭다운
    const firstDropdownBtn = firstDropdown.querySelector(".dropdown_btn");
    const secondDropdownBtn = secondDropdown.querySelector(".dropdown_btn");
    const firstDropdownItems = firstDropdown.querySelectorAll(".dropdown_item");
    const secondDropdownItems = secondDropdown.querySelectorAll(".dropdown_item");

    // ✅ .choice_items 요소 가져오기 (없으면 자동 생성)
    let choiceContainer = document.querySelector(".choice_items");
    if (!choiceContainer) {
        choiceContainer = document.createElement("div");
        choiceContainer.classList.add("choice_items");
        document.body.appendChild(choiceContainer); // body에 추가 (원하는 위치로 변경 가능)
    }

    // ✅ 페이지 로드 시 초기화
    firstDropdownBtn.innerHTML = firstDropdownBtn.getAttribute("data-default");
    secondDropdownBtn.innerHTML = secondDropdownBtn.getAttribute("data-default");
    secondDropdownBtn.disabled = true; // 첫 번째 선택 전까지 비활성화

    // ✅ 첫 번째 드롭다운 선택 이벤트
    firstDropdownItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation(); 

            // ❌ 품절 항목 선택 방지
            if (item.querySelector(".num_out")) return;

            let selectedText = item.querySelector(".text").textContent.trim();
            let extraInfo = item.querySelector(".drop_nums") ? ` (${item.querySelector(".drop_nums").textContent.trim()})` : "";

            // 🔹 첫 번째 버튼 업데이트
            firstDropdownBtn.innerHTML = `${selectedText}${extraInfo}`;
            firstDropdownBtn.classList.add("selected");
            firstDropdown.classList.remove("active");

            // 🔹 .choice_items 업데이트 (첫 번째 선택 값만)
            choiceContainer.innerHTML = `<span class="choice">${selectedText}${extraInfo}</span>`;

            // 🔹 두 번째 드롭다운 활성화
            secondDropdownBtn.disabled = false;
            secondDropdownBtn.innerHTML = secondDropdownBtn.getAttribute("data-default");
            secondDropdownBtn.classList.remove("selected");
        });
    });

    // ✅ 두 번째 드롭다운 선택 이벤트
    secondDropdownItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.stopPropagation(); 

            // ❌ 품절 항목 선택 방지
            if (item.querySelector(".num_out")) return;

            let selectedText = item.querySelector(".text").textContent.trim();
            let extraInfo = item.querySelector(".drop_nums") ? ` (${item.querySelector(".drop_nums").textContent.trim()})` : "";

            // 🔹 두 번째 버튼 업데이트
            secondDropdownBtn.innerHTML = `${selectedText}${extraInfo}`;
            secondDropdownBtn.classList.add("selected");
            secondDropdown.classList.remove("active");

            // 🔹 .choice_items 업데이트 (두 번째 선택 값 추가)
            choiceContainer.innerHTML += ` / <span class="choice">${selectedText}${extraInfo}</span>`;
        });
    });

    // ✅ 드롭다운 버튼 클릭 시 메뉴 열기/닫기
    dropdowns.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector(".dropdown_btn");

        dropdownBtn.addEventListener("click", function (event) {
            event.stopPropagation();

            // 🔹 첫 번째 드롭다운 선택 전에는 두 번째 드롭다운 비활성화
            if (dropdown === secondDropdown && !firstDropdownBtn.classList.contains("selected")) return;

            // 🔹 모든 드롭다운 닫기 (현재 선택한 드롭다운 제외)
            dropdowns.forEach(d => {
                if (d !== dropdown) d.classList.remove("active");
            });

            dropdown.classList.toggle("active");
        });
    });

    // ✅ 외부 클릭 시 드롭다운 닫기
    document.addEventListener("click", function (event) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
            }
        });
    });

    // ✅ ESC 키 누르면 드롭다운 닫기
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
        }
    });
});
