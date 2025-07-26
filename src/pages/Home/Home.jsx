import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { allcoin, currency } = useContext(CoinContext);
  const [displaycoin, setDisplaycoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    const value = event.target.value;
    setInput(value);
    if (value === '') {
      setDisplaycoin(allcoin);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const filtered = allcoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplaycoin(filtered);
  };

  useEffect(() => {
    setDisplaycoin(allcoin);
  }, [allcoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace.
          <br /> Sign up to explore more about cryptos.
        </p>

        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list="coinlist"
            value={input}
            type="text"
            placeholder="Search crypto..."
            required
          />
          <datalist id="coinlist">
            {allcoin.map((item, index) => (
              <option key={index} value={item.name}></option>
            ))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout table-header">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: 'center' }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>

        {displaycoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt={item.name} />
              <p>
                {item.name} - {item.symbol.toUpperCase()}
              </p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={
                item.price_change_percentage_24h > 0 ? 'green' : 'red'
              }
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}%
            </p>
            <p className="market-cap">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

