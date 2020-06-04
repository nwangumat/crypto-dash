import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from "chart.js";

import { GET_COIN_PRICE_RANGE } from '../constants/api';

import styles from './Dashboard.module.scss';

const Dashboard = () => {
    const [ethereumPriceRange, setEthereumPriceRange] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [bitcoinPriceRange, setBitcoinPriceRange] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [ripplePriceRange, setRipplePriceRange] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [litecoinPriceRange, setLitecoinPriceRange] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [dashPriceRange, setDashPriceRange] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [cryptoPriceRangeData, setCryptoPriceRangeData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [idFilter, setIdFilter] = useState('bitcoin');

    const lineChartData = {
      labels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      datasets: [{
            label: 'Filled',
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'blue',
            data: cryptoPriceRangeData,          
      }]
    //   datasets: [{
    //         label: 'Filled',
    //         fill: false,
    //         backgroundColor: 'blue',
    //         borderColor: 'blue',
    //         data: ethereumPriceRange,
    //     }, {
    //         label: 'Filled',
    //         fill: false,
    //         backgroundColor: 'green',
    //         borderColor: 'green',
    //         // borderDash: [5, 5],
    //         data: bitcoinPriceRange,
    //     }, {
    //         label: 'Filled',
    //         backgroundColor: 'red',
    //         borderColor: 'red',
    //         data: ripplePriceRange,
    //         fill: true,
    //     }, {
    //         label: 'Filled',
    //         backgroundColor: 'orange',
    //         borderColor: 'orange',
    //         data: litecoinPriceRange,
    //         fill: true,
    //     }, {
    //         label: 'Filled',
    //         backgroundColor: 'yellow',
    //         borderColor: 'yellow',
    //         data: dashPriceRange,
    //         fill: true,
    //     }]
    };

    //from and to timestamp

    useEffect(() => {
        (async () => {
        // const getEthereumPriceRange = () => axios.get(`${GET_COIN_PRICE_RANGE}/ethereum/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232`);
        // const getBitcoinPriceRange = () => axios.get(`${GET_COIN_PRICE_RANGE}/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232`);
        // const getLitecoinPriceRange = () => axios.get(`${GET_COIN_PRICE_RANGE}/litecoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232`);
        // const getRipplePriceRange = () => axios.get(`${GET_COIN_PRICE_RANGE}/ripple/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232`);
        // const getDashPriceRange = () => axios.get(`${GET_COIN_PRICE_RANGE}/dash/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232`);

        // Promise.all([getEthereumPriceRange(), getBitcoinPriceRange(), getLitecoinPriceRange(), 
        //     getRipplePriceRange(), getDashPriceRange()])
        //     .then(res => {
        //         setEthereumPriceRange(res[0].data.prices.map(res => res[1]));
        //         setBitcoinPriceRange(res[1].data.prices.map(res => res[1]));
        //         setLitecoinPriceRange(res[2].data.prices.map(res => res[1]));
        //         setRipplePriceRange(res[3].data.prices.map(res => res[1]));
        //         setDashPriceRange(res[4].data.prices.map(res => res[1]));   
        //     });
            try {
                const res = await axios.get(`${GET_COIN_PRICE_RANGE}/${idFilter}/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232`);
                setCryptoPriceRangeData(res.data.prices.map(res => res[1]))
                console.log(res.data.prices.map(res => res[1]))
            } catch (e) {
                console.log(e);
            }
        })();
      }, [idFilter]);
    
      useEffect(() => {
        Chart.defaults.global.defaultFontFamily = "Lato";
    
        window.onload = function() {
          var ctx = document.getElementById('crypto-price').getContext('2d');
          if (window.myBar) window.myBar.destroy();
          window.myBar = new Chart(ctx, {
            type: 'line',
            data: lineChartData,
            options: {
              tooltips: {
                callbacks: {
                  label: function(tooltipItem, data) {
                      return tooltipItem.yLabel.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                  }
                }
              },
              scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                      fontSize: 12,
                    }
                }],
                yAxes: [{
                  gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                  } ,
                  ticks: {
                    fontSize: 12,
                    fontFamily: 'sans-serif',
                    callback: function(label, index, labels) {
                      return label;
                    }
                  }  
                }]
              },
              responsive: true,
              legend: {
                display: false
              },
              title: {
                display: false,
                position: 'top',
                text: 'volume',
                fontSize: 14,
                fontFamily: "'Lato', sans-serif"
              }
            }
          });
        };
    
        window.onload();
      });

    return (
        <div className={styles.dashboard}>
            <div className={`${styles.item} ${styles.itemOne}`}>
                <select onChange={
                    ({ target }) => {
                        setIdFilter(target.value)
                    }
                }>
                    <option value='bitcoin'>BTC</option>
                    <option value='ethereum'>ETH</option>
                    <option value='ripple'>XRP</option>
                    <option value='litecoin'>LTC</option>
                    <option value='dash'>DASH</option>
                </select>
                <canvas id="crypto-price"></canvas>
            </div>
            <div className={`${styles.item} ${styles.itemTwo}`}>Chart 2</div>
            <div className={`${styles.item} ${styles.itemThree}`}>Chart 3</div>
            <div className={`${styles.item} ${styles.itemFour}`}>Chart 4</div>
            <div className={`${styles.item} ${styles.itemFive}`}>Chart 5</div>
            <div className={`${styles.item} ${styles.itemSix}`}>Chart 6</div>
            <div className={`${styles.item} ${styles.itemSeven}`}>Chart 7</div>
        </div>
    )
}

export default Dashboard;