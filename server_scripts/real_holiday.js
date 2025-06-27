PlayerEvents.loggedIn(event => {
    try {
      const LocalDate = Java.type('java.time.LocalDate');
      const today = LocalDate.now();
  
      const month = today.getMonthValue();
      const day = today.getDayOfMonth();
  
      if (month === 6 && day === 1) {
        event.player.tell('§d🎈 儿童节快乐！愿你像孩子一样快乐天真！ 🎉');
      }
    } catch (e) {
      console.error('日期检测失败：可能不支持 java.time.*，错误信息：', e);
    }
  });
  