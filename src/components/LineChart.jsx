import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
        coinTimestamp.push(
            new Date(
                coinHistory?.data?.history[i].timestamp
            ).toLocaleDateString()
        );
    }

    const data = {
        
        labels: coinTimestamp,
        datasets: [
            {
                type:'bar',
                label: "Price In USD",
                data: coinPrice,
                fill: true,
                backgroundColor: [
                    "rgba(75, 99, 232, 0.7)",
                    "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: ["rgba(20, 255, 132, 1)"],
                borderWidth: 0.5,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false,
            },
        },
    };

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">
                    {coinName} Price Chart{" "}
                </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">
                        Change: {coinHistory?.data?.change}%
                    </Title>
                    <Title level={5} className="current-price">
                        Current {coinName} Price: $ {currentPrice}
                    </Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    );
};

export default LineChart;
