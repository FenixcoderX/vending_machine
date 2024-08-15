const emulator = {
  StartCashin: function (cb) {
    document.addEventListener('keydown', (e) => {
      if (e.key === '1') cb(10); // 1 для 10₽
      if (e.key === '2') cb(20); // 2 для 20₽
      if (e.key === '5') cb(50); // 5 для 50₽
    });
  },
  StopCashin: function () {
    document.removeEventListener('keydown', this.StartCashin);
  },
  BankCardPurchase: function (amount, cb, display_cb) {
    let isCancelled = false;

    const handleKeydown = (e) => {
      if (e.key === 'y') {
        // Y для успешной транзакции
        cb(true);
        display_cb(`Транзакция успешна на сумму ${amount}₽`);
        cleanup();
      } else if (e.key === 'n') {
        //  N для неуспешной транзакции
        cb(false);
        display_cb(`Транзакция неуспешна на сумму ${amount}₽`);
        cleanup();
      }
    };

    const cleanup = () => {
      document.removeEventListener('keydown', handleKeydown);
    };

    document.addEventListener('keydown', handleKeydown);

    display_cb(`Приложите карту для оплаты ${amount}₽`);
    setTimeout(() => {
      if (!isCancelled) display_cb('Обработка карты');
    }, 1000);
    setTimeout(() => {
      if (!isCancelled) display_cb('Связь с банком');
    }, 2000);

    this.BankCardCancel = function () {
      cleanup();
      console.log('Процесс отмены запущен');
    };
  },

  Vend: function (product_idx, cb) {
    const handleKeydown = (e) => {
      if (e.key === 'y') {
        // y для успешной выдачи
        cb(true);
        cleanup();
      } else if (e.key === 'n') {
        //  n для неуспешной выдачи
        cb(false);
        cleanup();
      }
    };

    const cleanup = () => {
      document.removeEventListener('keydown', handleKeydown);
    };

    document.addEventListener('keydown', handleKeydown);
  },
};

export default emulator;
