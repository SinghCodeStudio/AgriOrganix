import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "../../CSS/Sales/PaymentMethod.css";

const PaymentMethod = () => {
  const generateRandomData = () => {
    const upi = Math.random() * 50 + 25; // Random between 25% - 75%
    const cod = Math.random() * (100 - upi); // Remaining percentage
    const card = 100 - (upi + cod); // Ensure it sums to 100

    const totalTransactions = 350; // Fixed total transactions
    const upiTransactions = Math.round((upi / 100) * totalTransactions);
    const codTransactions = Math.round((cod / 100) * totalTransactions);
    const cardTransactions = totalTransactions - (upiTransactions + codTransactions);

    return {
      percentages: [upi.toFixed(1), cod.toFixed(1), card.toFixed(1)],
      transactions: [upiTransactions, codTransactions, cardTransactions],
    };
  };

  const [data, setData] = useState(generateRandomData());

  useEffect(() => {
    // Set an interval to update data every 1 second
    const interval = setInterval(() => {
      setData(generateRandomData());
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: ["UPI", "Cash on Delivery", "Debit/Credit Card"],
    datasets: [
      {
        data: data.percentages,
        backgroundColor: ["#81c784", "#00a650", "#c6efb3"],
      },
    ],
  };

  return (
    <div className="container GraphBox shadow">
      <div className="row">
        <div className="col-md-6 PieChartPayment">
          <Pie data={chartData} />
        </div>
        <div className="col-md-6 text-left Payment">
          <h3 className="text-success fw-bold PaymentText">PAYMENT METHOD</h3>
          <p className="fw-bold Date">
            DATE: <button className="btn dropdown-toggle DateBtn">26 Jan 2025</button>
          </p>
          <p className="UPI">
            <strong>UPI:</strong> <br /> {data.percentages[0]}% ({data.transactions[0]} transactions)
          </p>
          <p className="Trans">
            <strong>Cash on Delivery:</strong> <br /> {data.percentages[1]}% ({data.transactions[1]} transactions)
          </p>
          <p className="Trans">
            <strong>Debit/Credit Card:</strong> <br /> {data.percentages[2]}% ({data.transactions[2]} transactions)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
