import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';

import DrinkSelection from './pages/DrinkSelection';
import PaymentSelection from './pages/PaymentSelection';
import CashPayment from './pages/CashPayment';
import CardPayment from './pages/CardPayment';
import Preparation from './pages/Preparation';

function App() {
  return (
    <div className="w-[1080px] h-[1920px] ">
      <Router>
        <Routes>
          <Route path="/" element={<DrinkSelection />} />
          <Route path="/payment/:drinkId" element={<PaymentSelection />} />
          <Route path="/cash/:drinkId" element={<CashPayment />} />
          <Route path="/card/:drinkId" element={<CardPayment />} />
          <Route path="/preparation/:drinkId" element={<Preparation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;