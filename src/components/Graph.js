import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
} from 'chart.js';
import "./Graph.css";

// Register Chart.js components
ChartJS.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const [bitcoinData, setBitcoinData] = useState({
    labels: [],
    datasets: [
      {
        label: "Bitcoin Price (CAD)",
        data: [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=14&interval=daily&precision=2")
        .then(response => response.json())
        .then(data => {
          const prices = data.prices;
          const formattedData = {
            labels: prices.map(price => new Date(price[0]).toLocaleDateString()),
            datasets: [
              {
                label: "Bitcoin Price (CAD)",
                data: prices.map(price => price[1]),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          };
          setBitcoinData(formattedData);
          localStorage.setItem('bitcoinData', JSON.stringify(formattedData));
          localStorage.setItem('dataTimeStamp', new Date().getTime());
        });
    };

    const element = document.getElementById("target-element");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const dataTimeStamp = localStorage.getItem('dataTimeStamp');
    const now = new Date().getTime();

    if (dataTimeStamp && now - dataTimeStamp < 30 * 60 * 1000) {
      const cachedData = localStorage.getItem('bitcoinData');
      if (cachedData) {
        setBitcoinData(JSON.parse(cachedData));
      } else {
        fetchData();
      }
    } else {
      fetchData();
    }
  }, []);

  return (
    <div className="graph">
      <div id="target-element">
        <h1>Bitcoin Price Chart</h1>
        <p>This chart showcases the fluctuating value of Bitcoin over the last 14 days, with data pulled from a cryptocurrency API.</p>
        <Line data={bitcoinData} />
      </div>
    </div>
  );
};

export default Graph;
