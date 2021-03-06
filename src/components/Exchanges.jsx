import React from "react";
// import millify from "millify";
import { Col, Row } from "antd";
// import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

// const { Text } = Typography;
// const { Panel } = Collapse;

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();
    // const exchangesLIst = data?.data?.exchanges;

    if (isFetching) return <Loader />;

    console.log(data)
    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24hr Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>

            {/* <Row>
                {exchangesLIst.map((exchange) => (
                    <Col span={24}>
                        <Collapse>
                            <Panel
                                key={exchange.uuid}
                                showArrow={false}
                                header={(
                                    <>
                                        <Col span={6} >
                                            <Text>
                                                <strong>{exchange.rank}</strong>
                                            </Text>
                                            <Avatar
                                                className="exchange-image"
                                                src={exchange.iconUrl}
                                            />
                                            <Text>
                                                <strong>{exchange.name}</strong>
                                            </Text>
                                        </Col>

                                        <Col span={6}>
                                            ${millify(exchange.volume)}
                                        </Col>
                                        <Col span={6}>
                                            {millify(exchange.numberOfMarkets)}
                                        </Col>
                                        <Col span={6}>
                                            {millify(exchange.marketShare)}%
                                        </Col>
                                        </>
                                    )
                                }
                            >
                                {HTMLReactParser(exchange.description || "")}
                            </Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row> */}
        </>
    );
};

export default Exchanges;
