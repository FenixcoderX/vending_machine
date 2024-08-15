/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emulator from '../utils/emulator';

const Preparation = ({ drinkId }) => {
  const [status, setStatus] = useState('Ваш напиток готовится...');
  const [returnButton, setReturnButton] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    emulator.Vend(drinkId, (result) => {
      if (result) {
        setStatus('Напиток готов!');
        setReturnButton(true);
      } else {
        setStatus('Данного напитка не оказалось в наличии. Извините за неудобства');
        setReturnButton(true);
      }
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Приготовление напитка</h1>
      <p>{status}</p>
      {returnButton && (
        <button className="mt-2 p-2 rounded-xl bg-[#F5D009]" onClick={() => navigate('/')}>
          Вернуться на главную
        </button>
      )}
    </div>
  );
};

export default Preparation;
