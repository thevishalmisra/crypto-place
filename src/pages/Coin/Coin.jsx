import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/Navbar/linechart/linechart';

const Coin = () => {
  const { coinId } = useParams();
  const [coindata, setcoindata] = useState(null);
  const [historicaldata, sethistoricaldata] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const data = await res.json();
      setcoindata(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`
      );
      const data = await res.json();
      sethistoricaldata(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency, coinId]);

  if (!coindata || !historicaldata) {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }

  return (
    <div className="coin-page">
      <div className="coin-header">
        <img
          src={coindata.image?.large}
          alt={coindata.name}
          className="coin-logo"
        />
        <h1 className="coin-title">
          {coindata.name} ({coindata.symbol.toUpperCase()})
        </h1>
      </div>

      <div className="coin-chart-container">
        <LineChart historicaldata={historicaldata} />
      </div>

      <div className="coin-info">
        <table>
          <tbody>
            <tr>
              <td>Crypto Market Rank</td>
              <td>{coindata.market_cap_rank}</td>
            </tr>
            <tr>
              <td>Current Price</td>
              <td>
                {currency.symbol} {coindata.market_data.current_price[currency.name].toLocaleString()}
              </td>
            </tr>
            <tr>
              <td>Market Cap</td>
              <td>
                {currency.symbol} {coindata.market_data.market_cap[currency.name].toLocaleString()}
              </td>
            </tr>
            <tr>
              <td>24 Hour High</td>
              <td>
                {currency.symbol} {coindata.market_data.high_24h[currency.name].toLocaleString()}
              </td>
            </tr>
            <tr>
              <td>24 Hour Low</td>
              <td>
                {currency.symbol} {coindata.market_data.low_24h[currency.name].toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Coin;


