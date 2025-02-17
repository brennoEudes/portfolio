function startClock() {
    const clockElement = document.getElementById('clock');
  
    function updateClock() {
      // Obtém o horário atual ajustado para o UTC-3
      const now = new Date();
      const utc3Time = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
  
      // Formata o horário no formato HH:mm:ss
      const hours = utc3Time.getHours().toString().padStart(2, '0');
      const minutes = utc3Time.getMinutes().toString().padStart(2, '0');
      const seconds = utc3Time.getSeconds().toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}:${seconds}`;
  
      // Atualiza o elemento com o horário
      clockElement.textContent = `(UTC-3) ${formattedTime}`;
    }
  
    // Atualiza o relógio a cada segundo
    updateClock();
    setInterval(updateClock, 1000);
  }
  
  // Inicia o relógio quando a página carrega
  document.addEventListener('DOMContentLoaded', startClock);
  