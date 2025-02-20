function launchConfetti() {
  confetti({
      particleCount: 1000,  // 파티클 개수
      spread: 10000,  // 확산 범위
      origin: { y: 0.1 } // 시작 위치 (y: 0.6은 화면 중간에서 시작)
  });
}

// 버튼 클릭 시 폭죽 효과 실행
document.getElementById("confettiBtn").addEventListener("click", launchConfetti);
