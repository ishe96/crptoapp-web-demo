import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const News = () => {

    const { data: cryptosList, isFetching } = useGetCryptosQuery();
    const [cryptoNews, setCryptoNews] = useState(cryptosList?.data?.coins);


    return (
        <>
            <Row gutters={[32, 32]} className="crypto-card-container">
                {cryptoNews.map((cryptoNews) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={cryptoNews.id}
                    >
                        <Link to={`/crypto/${cryptoNews.id}`}>
                            <Card
                                title={`${cryptoNews.rank}. ${cryptoNews.name}`}
                                extra={
                                    <img
                                        className="crypto-image"
                                        src={cryptoNews.iconUrl}
                                        hoverable
                                    />
                                }
                            >
                                <p>Price : {millify(cryptoNews.price)}</p>
                                <p>
                                    Market Cap : {millify(cryptoNews.marketCap)}
                                </p>
                                <p>Daily Change : {millify(cryptoNews.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default News;
