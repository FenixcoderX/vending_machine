/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { coffeeList } from '../utils/coffeeList';
import emulator from '../utils/emulator';   

const CardPayment = () => {
    const { drinkId } = useParams();
    const [message, setMessage] = useState('');
    const [cancelMessage, setCancelMessage] = useState('');
    const [retryButton, setRetryButton] = useState(false);
    const [retry, setRetry] = useState(0); 
    const navigate = useNavigate();
  
    useEffect(() => {
      emulator.BankCardPurchase(
        coffeeList.find((item) => item.id === drinkId).price,
        (result) => {
          if (result) {
            navigate(`/preparation/${drinkId}`);
          } else {
            setRetryButton(true); 
          }
        },
        setMessage
      );
    }, [retry]); 
  
    const handleCancel = () => {
      emulator.BankCardCancel();
      setCancelMessage('Транзакция отменена');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    };
  
    const handleRetry = () => {
      setRetry((prevRetry) => prevRetry + 1);
      setRetryButton(false);
    };
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Оплатить банковской картой</h1>
        <p>{message}</p>
        <p>{cancelMessage}</p>
        <div className="flex gap-4">
          <button className="mt-2 p-2 rounded-xl bg-red-500 text-white " onClick={handleCancel}>
            Отмена
          </button>
          {retryButton && (
            <button className="mt-2 p-2 rounded-xl  bg-[#F5D009] " onClick={handleRetry}>
              Попробовать еще раз
            </button>
          )}
        </div>
      </div>
    );
  };

  export default CardPayment;