/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { coffeeList } from '../utils/coffeeList';
import emulator from '../utils/emulator';

const CashPayment = () => {
  const { drinkId } = useParams();
  const [amount, setAmount] = useState(0);
  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    emulator.StartCashin(handleCashin);
    return () => emulator.StopCashin();
  }, []);

  useEffect(() => {
    if (isPaid) {
      navigate(`/preparation/${drinkId}`);
    }
  }, [isPaid, navigate, drinkId]);

  const drink = coffeeList.find((item) => item.id === drinkId);

  const handleCashin = (cash) => {
    if (!drink) {
      console.error('Invalid drinkId:', drinkId);
      return;
    }
    setAmount((prevAmount) => {
      const newAmount = prevAmount + cash;
      if (newAmount >= drink.price) {
        emulator.StopCashin();
        setIsPaid(true);
      }
      return newAmount;
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Внесите наличные: {drink.price}₽</h1>
      <p>Внесено наличных: {amount}₽</p>
    </div>
  );
};

export default CashPayment;
