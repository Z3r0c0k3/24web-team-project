
document.addEventListener('DOMContentLoaded', () => { // 문서 로드 후 실행
  const targetDates = {
    'D-Day-2025': new Date('2024-11-14T08:00:00').getTime(),
    'D-Day-2026': new Date('2025-11-13T08:00:00').getTime(),
    'D-Day-2027': new Date('2026-11-19T08:00:00').getTime(),
    'D-Day-3mo': new Date('2024-03-28T08:00:00').getTime(),
    'D-Day-6mo': new Date('2024-06-04T08:00:00').getTime(),
    'D-Day-9mo': new Date('2024-09-04T08:00:00').getTime(),
  };

  function updateDday(className, targetDate) {
    const ddaySpans = document.querySelectorAll(`.${className}`); // 여러 span 요소 선택

    ddaySpans.forEach(ddaySpan => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

        const days = Math.max(0, Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
        const hours = Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = Math.max(0, Math.floor((timeDifference % (1000 * 60)) / 1000));
        const milliseconds = Math.max(0, timeDifference % 1000);

        const formattedDday = `${days.toString().padStart(3, '0')}일 | ${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} . ${milliseconds.toString().padStart(2, '0')}`;

        ddaySpan.innerText = formattedDday; 
    });
  }

  for (const className in targetDates) {
    updateDday(className, targetDates[className]);
    setInterval(() => updateDday(className, targetDates[className]), 1);
  }
    
  function dateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    const formattedDate = `${year}. ${month}. ${day}`;
    const formattedTime = `${ampm} ${hours % 12 === 0 ? 12 : hours % 12} : ${minutes} : ${seconds}`;
  
    document.querySelector('.date').innerText = formattedDate;
    document.querySelector('.time').innerText = formattedTime;
}

dateTime();
setInterval(dateTime, 500);
});
