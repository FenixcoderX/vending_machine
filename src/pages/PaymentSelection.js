import { useNavigate, useParams } from 'react-router-dom';

const PaymentSelection = () => {
  const { drinkId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Выберите способ оплаты</h1>
      <div className="flex flex-col gap-4">
        <button className="mt-2 p-4 bg-[#F5D009]  rounded-xl" onClick={() => navigate(`/cash/${drinkId}`)}>
          Cash
        </button>
        <button className="mt-2 p-4 bg-[#F5D009] rounded-xl" onClick={() => navigate(`/card/${drinkId}`)}>
          Card
        </button>
      </div>
    </div>
  );
};

export default PaymentSelection;
