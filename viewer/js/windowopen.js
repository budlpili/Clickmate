window.onload = function () {
  let width = 430;
  let height = window.innerHeight;
  let left = (screen.width - width) / 2;
  let top = 0;

  let newWindow = window.open(window.location.href, "_blank",
      `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=yes,location=no,menubar=no,status=no,titlebar=no,toolbar=no`);

  if (!newWindow || newWindow.closed || typeof newWindow.closed == "undefined") { 
      alert("팝업 차단이 감지되었습니다. 브라우저 설정에서 팝업을 허용하세요."); 
  } else {
      window.close(); // 기존 창 닫기 (옵션)
  }
};
