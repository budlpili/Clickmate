document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {  // Enter 키를 누르면 실행
        openNewWindow();
    }
});

document.addEventListener("click", function () {  // 페이지 클릭 시 실행
    openNewWindow();
});

function openNewWindow() {
    let width = 450;
    let height = window.innerHeight;
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;

    let newWindow = window.open(window.location.href, "_blank",
        `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=yes,location=no,menubar=no,status=no,titlebar=no,toolbar=no`);

    if (!newWindow || newWindow.closed || typeof newWindow.closed == "undefined") { 
        alert("팝업 차단이 감지되었습니다. 브라우저 설정에서 팝업을 허용하세요."); 
    } else {
        window.removeEventListener("click", openNewWindow); // 중복 실행 방지
    }
}
