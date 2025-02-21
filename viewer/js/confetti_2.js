function createConfetti() {
  const confettiCount = 50; // 생성할 confetti 개수
  for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");

      // 랜덤 색상 지정
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

      // 랜덤 위치 & 크기 설정
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.width = `${Math.random() * 10 + 5}px`;
      confetti.style.height = `${Math.random() * 10 + 5}px`;

      // 애니메이션 지속 시간 랜덤 설정
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;

      document.body.appendChild(confetti);

      // 일정 시간 후 Confetti 제거
      setTimeout(() => {
          confetti.remove();
      }, 5000);
  }
}

// 버튼 클릭 시 Confetti 실행
document.getElementById("confettiBtn").addEventListener("click", createConfetti);
