/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { coffeeList } from '../utils/coffeeList';
import { categoryList } from '../utils/categoryList';

const DrinkSelection = () => {
  const navigate = useNavigate();
  const [selectedDrinkCategory, setSelectedDrinkCategory] = useState('hjk4jh435345n02ol2lb1kl');

  const getLeftPosition = () => {
    switch (selectedDrinkCategory) {
      case 'hjk4jh435345n02ol2lb1kl':
        return 'left-[12.5%]';
      case 'hjk4jh2389sfhbl1l2lb1kl':
        return 'left-[37.5%]';
      case 'nvdfn2l0we0ercdsvjnsn2a':
        return 'left-[62.5%]';
      case 'ffsbdjfbk2901sv1ggh3ndm':
        return 'left-[87.5%]';
      default:
        return 'left-[12.5%]';
    }
  };

  return (
    <div className="w-full h-full bg-[#EFCCB9] relative z-0 flex flex-col">
      {/* Верхняя панель */}
      <header className="h-[232px] w-full  flex items-center justify-between relative z-0">
        <img src="/images/Vector.svg" alt="Example" className="w-[450.19px] h-[939.9px] top-[-190px] left-[565px] object-contain absolute -z-10" />
        <h1 className="h-[71px] ml-[20px] text-[64px] font-semibold leading-[70.72px]">Выбор напитка</h1>
        <button className="rounded-[35px] bg-white w-[392px] h-[103px] mr-[21px] shadow-custom flex items-center justify-between z-0">
          <div className="w-[103px] h-[103px] rounded-[35px]  bg-[#F5D009] flex items-center justify-center">
            <img src="/images/Combo shape.svg" alt="Example" className="w-[47.66px] h-[48.74px] object-cover" />
          </div>
          <div className="mr-[28px] text-[24px] font-semibold leading-[26.52px]"> Вход / регистрация</div>
        </button>
      </header>
      {/*  */}

      {/* Выбор типа напитка */}
      <section className="w-full h-[408px] rounded-t-[35px] bg-[#FFFFFF] z-0">
        <div className="h-full flex">
          {categoryList.map((category, index) => (
            <button key={category.id} className={`w-1/4 h-full bg-gradient-to-b flex items-center flex-col relative z-10 ${selectedDrinkCategory === category.id ? 'from-white to-[#F3F3F3] ' : 'bg-[#F3F3F3]'} ${index === 0 ? 'rounded-tl-[35px]' : ''} ${index === categoryList.length - 1 ? 'rounded-tr-[35px]' : ''} ${index !== categoryList.length - 1 ? 'border-r-[1px] ' : ''}`}>
              <div className={`w-[161px] h-[161px] bg-[#EFCCB9] rounded-full absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-60%] -z-10 ${selectedDrinkCategory === category.id ? 'block' : 'hidden'}`}></div>
              <img src={category.image} alt="Example" className={`w-[259px] h-[256px] object-cover ${selectedDrinkCategory === category.id ? '' : 'filter grayscale'}`} />
              <div className="text-[32px] text-center font-semibold leading-[40.9px] mt-[10px]">{category.name}</div>
            </button>
          ))}
        </div>
      </section>
      {/*  */}

      {/* Список напитков */}
      <section className="relative flex-grow bg-white rounded-t-[35px] mt-[-30px] z-0 shadow-custom-2">
        <div className={`absolute top-[-27px] w-0 h-0 border-t-[54px] border-t-transparent border-r-[54px] border-r-[#00000017] transform rotate-45 translate-x-[-50%] ${getLeftPosition()}`}></div>
        <div className="relative">
          <h1 className="h-[92px] ml-[20px] mt-[87px] text-[83px] font-semibold leading-[91.72px] relative z-10">Кофе</h1>
          <div className={`w-[147px] h-[147px] bg-[#EFCCB9] rounded-full absolute top-[50%] left-[51.5px] transform translate-x-[-50%] translate-y-[-50%] -z-10`}></div>
        </div>

        <div className="h-full flex flex-wrap	justify-evenly content-start mt-[42px]  z-0">
          {coffeeList.map((category, index) => (
            <button key={category.id} onClick={() => navigate(`/payment/${category.id}`)}>
              {' '}
              <div className={` w-[333px] h-[491px] flex items-center flex-col border-[1px] border-[#D8D8D8] rounded-[35px] mt-[20px]`}>
                <img src={category.image} alt="Example" className={`h-[335px] object-cover -z-10`} />
                <div className="text-[32px] text-center font-semibold leading-[35.36px] mt-[10px]">{category.name}</div>
                <div className="text-[40px] text-center font-bold leading-[44.2px] mt-[10px]">
                  от <span className="text-[64px] leading-[70.72px]">{category.price}₽</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      {/*  */}
    </div>
  );
};

export default DrinkSelection;
