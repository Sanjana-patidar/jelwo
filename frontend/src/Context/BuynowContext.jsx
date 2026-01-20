import {useState,  createContext, useContext} from 'react';

const BuynowContext = createContext();

export const BuynowProvider = ({children}) =>{

    const [selectedBuy, setSelectedBuy] = useState([]);
  const addBuyNow = (items) => {
  setSelectedBuy(items); // direct cart set
};

   const clearBuyNowItems = () =>setSelectedBuy([]);
    return(

    <BuynowContext.Provider value={{ selectedBuy, setSelectedBuy,addBuyNow, clearBuyNowItems}}>
        {children}
    </BuynowContext.Provider>
    )
}
export const useBuynow = () => useContext(BuynowContext);