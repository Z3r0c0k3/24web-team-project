document.addEventListener("DOMContentLoaded", () => {
  const timerDisplay = document.getElementById("timer");
  const discription = document.getElementById("discription");  
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const endButton = document.getElementById("End");
  const subjectRadios = document.querySelectorAll('input[name="options-base"]');
  
  let selectedSubject;
  let timerInterval; // 타이머 인터벌 저장 변수
  let remainingTime = 0; // 남은 시간 (밀리초)
  let targetDate = new Date("2024-11-14T08:40:00").getTime(); // 수능 날짜 및 시간 설정 (예시)

  // 과목별 시험 시간 설정 (분 단위)
  const examTimes = {
    option5: 80, // 국어
    option6: 100, // 수학
    option7: 70, // 영어
    option8: 30, // 한국사
    option9: 30, // 탐구1
    option10: 30, // 탐구2
  };

  // 타이머 업데이트 함수
  function updateTimer() {
      if (remainingTime == 0) {
          timerDisplay.innerText = "00:00";
          discription.style.right = "38.3%";
          discription.innerText = '시험이 종료되었습니다. 수고하셨습니다.';
        clearInterval(timerInterval); // 타이머 종료
        return;
    }
    
    remainingTime = Math.max(0, remainingTime - 1000); // 1초 감소

    const minutes = Math.floor(remainingTime / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
        .padStart(2, "0")}`;
    timerDisplay.innerText = formattedTime;
  }

  // 타이머 시작 함수
  function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
        if (selectedSubject == "option5") {
            discription.style.right = "46.7%";
            discription.innerText = '국어 영역';
          }
          else if (selectedSubject == "option6") {
              discription.style.right = "48.3%";
              discription.innerText = '수학 영역';
          }
          else if (selectedSubject == "option7") {
              discription.style.right = "46.7%";
              discription.innerText = '영어 영역';
          }
          else if (selectedSubject == "option8") {
              discription.style.right = "46.7%";
              discription.innerText = '한국사 영역';
          }
          else if (selectedSubject == "option9") {
              discription.style.right = "46.7%";
              discription.innerText = '탐구1 영역';
          }
          else if (selectedSubject == "option10") {
              discription.style.right = "46.7%";
              discription.innerText = '탐구2 영역';
          };
    }
  }
  
  // 타이머 초기화 함수
  function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
  }
    
  // 타이머 정지 함수
  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    discription.style.right = "31.7%";
    discription.innerText = `타이머가 일시정지 되었습니다. 계속하려면 '시작'을 입력해주세요.`;
  }

  // 타이머 종료 함수
  function endTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    remainingTime = 0;
    updateTimer(); // 타이머를 0으로 초기화
  }

  // 과목 변경 시 타이머 초기화
  subjectRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      selectedSubject = radio.id;
      remainingTime = examTimes[selectedSubject] * 60 * 1000 + 1000; // 선택된 과목의 시험 시간으로 설정
        if (selectedSubject == "option5") {
          discription.style.right = "46.7%";
          discription.innerText = '국어 영역';
        }
        else if (selectedSubject == "option6") {
            discription.style.right = "48.3%";
            discription.innerText = '수학 영역';
        }
        else if (selectedSubject == "option7") {
            discription.style.right = "46.7%";
            discription.innerText = '영어 영역';
        }
        else if (selectedSubject == "option8") {
            discription.style.right = "46.7%";
            discription.innerText = '한국사 영역';
        }
        else if (selectedSubject == "option9") {
            discription.style.right = "46.7%";
            discription.innerText = '탐구1 영역';
        }
        else if (selectedSubject == "option10") {
            discription.style.right = "46.7%";
            discription.innerText = '탐구2 영역';
        };
      updateTimer();
      resetTimer(); // 타이머 초기화
    });
  });

  // 시작, 정지, 종료 버튼 이벤트 리스너 등록
  startButton.addEventListener("click", startTimer);
  stopButton.addEventListener("click", stopTimer);
  endButton.addEventListener("click", endTimer);

    // 초기 타이머 설정 (국어 기준)
  discription.style.right = "46.7%";
  discription.innerText = '국어 영역';
  remainingTime = 80 * 60 * 1000 + 1000;
  updateTimer();
});
