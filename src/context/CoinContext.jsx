import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allcoin, setAllCoin] = useState([]);
  const [currency, setcurrency] = useState({
    name: "usd",
    symbol: "$"   // 🔧 FIXED: was 'Symbol'
  });

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "ADD API KEY"
      }
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      const data = await response.json();
      setAllCoin(data);
    } catch (err) {
      console.error("Failed to fetch coins:", err);
      setAllCoin([]); // fallback to empty array
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextValue = {
    allcoin,
    currency,
    setcurrency
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
