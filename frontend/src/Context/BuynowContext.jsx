import {useState,  createContext, useContext} from 'react';

const BuynowContext = createContext();

export const BuynowProvider = ({children}) =>{

    const [selectedBuy, setSelectedBuy] = useState([]);
  const addBuyNow = (item) =>{
    setSelectedBuy((prev)=> [...prev, item]);
  }

   const clearBuyNowItems = () =>setSelectedBuy([]);
    return(

    <BuynowContext.Provider value={{ selectedBuy, setSelectedBuy,addBuyNow, clearBuyNowItems}}>
        {children}
    </BuynowContext.Provider>
    )
}
export const useBuynow = () => useContext(BuynowContext);