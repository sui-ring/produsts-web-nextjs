import React from 'react';
import { Timeline } from 'antd';

import { ClockCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

const items = [
    {
        color: 'blue',
        dot: '',
        children: <p>Please select an item from the product list below to browse.</p>,
    },
    {
        color: 'blue',
        dot: '',
        children: <p>Read the documentation, and compare the features.</p>,
    },
    {
        color: 'orange',
        dot: <ClockCircleOutlined />,
        children: <p>Please request a trial. send an <Link href="/contact">contact</Link> to me.</p>,
    },
    {
        color: 'blue',
        dot: '',
        children: <p>Purchase the product.</p>,
    },
    {
        color: 'blue',
        dot: <PlusCircleOutlined />,
        children: <p>Additional requests and implementations are possible.</p>,
    }
];

const Comparison = () => (
    <Timeline
        items={items}
    />
);

export default Comparison;