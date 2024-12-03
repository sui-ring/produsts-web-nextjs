'use client';

import React, { useMemo, useState } from 'react';

import { Button, Col, Flex, notification, Row, Space } from "antd";

const Context = React.createContext({ name: 'Default' });

const Demo = () => {
    const [api, contextHolder] = notification.useNotification();

    const [logger, setLogger] = useState<string[]>([]);


    const openNotification = (side: string) => {
        if (side === "entry buy") {
            api.info({
                message: `Notification: order to ${side}`,
                description: side + " order has been entered",
                placement: 'bottomRight',
            });
        } else if (side === "entry sell") {
            api.success({
                message: `Notification: order to ${side}`,
                description: side + " order has been entered",
                placement: 'bottomRight',
            });
        } else {
            api.warning({
                message: `Notification: order to ${side}`,
                description: side + " order has been closed",
                placement: 'bottomRight',
            });
        }

        const nowDate = new Date();
        setLogger([`${nowDate.toUTCString()}: ${side} order has been done`, ...logger]);
    };

    const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);


    return (
        <>
            <Context.Provider value={contextValue}>
                {contextHolder}
                <Flex
                    justify="center"
                    align="center" style={{ width: '100%', height: '30vh' }}>
                    <h1 style={{ marginBottom: '2rem' }}>Exchange GUI Sample
                        <small>This is to avoid clarifying the specific exchange. Thank you for your understanding.</small>
                    </h1>
                    <Row>
                        <Col span={24}>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Space>

                                        <Button size='large' type='primary' onClick={() => openNotification("entry buy")}>
                                            Entry buy
                                        </Button>
                                        <Button size='large' danger type='primary' onClick={() => openNotification("entry sell")}>
                                            Entry sell
                                        </Button>
                                    </Space>
                                </Col>
                            </Row>

                            <Row gutter={16} style={{ marginTop: '2rem' }}>
                                <Col span={24} offset={8}>
                                    <Button size='large' danger onClick={() => openNotification("exit")}>
                                        Exit
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Flex>

                <Flex
                    justify="center"
                    align="center" style={{ width: '100%', height: '70vh' }}>
                    <Row>
                        <Col span={24}>
                            <Row gutter={16}>
                                <Col span={24}>
                                    {/* views logger, if has loggers */}
                                    {logger.length > 0 && (
                                        <Row gutter={16} style={{ marginTop: '2rem' }}>
                                            <Col span={24}>
                                                <Space direction='vertical'>
                                                    <h3>Logger
                                                        <Button type='link' onClick={
                                                            () => setLogger([])
                                                        }>
                                                            Clear
                                                        </Button>
                                                    </h3>
                                                    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                                        <ul>
                                                            {logger.map((log, index) => (
                                                                <li key={index}>{log}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </Space>
                                            </Col>
                                        </Row>
                                    )}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Flex>
            </Context.Provider>
        </>
    )
}

export default Demo;