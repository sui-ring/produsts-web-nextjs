import { Card, Flex, Typography } from 'antd';
import Link from 'next/link';
const { Title } = Typography;

import { AppleFilled, FileTextFilled, LinuxOutlined, WindowsFilled, YoutubeFilled } from '@ant-design/icons';

const items = [
    {
        key: '1',
        label: 'Signalrs',
        src: '/images/signalrs-product-list.jpg',
        link: '/products/signalrs',
        children: 'Signalrs gets ticker from MetaTrader5, places an order with the target exchange.',
        tag: <p>tag: <YoutubeFilled />,<FileTextFilled />,<WindowsFilled /></p>,
    },
    {
        key: '2',
        label: 'Sample',
        src: '/images/sample-product-list.jpg',
        link: '/products/telephone',
        children: '...',
        tag: <p>tag: <YoutubeFilled />,<AppleFilled />,<LinuxOutlined /></p>,
    },
];

const ProductsList = () => {
    return (
        <Flex gap="middle">
            {items.map((item) => (
                <Link href={item.link}>
                    <Card
                        key={item.key}
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={item.label} src={item.src} />}
                    >
                        <strong>{item.label}</strong> <br />
                        {item.children.substring(0, 100)}... <br />
                        {item.tag}
                    </Card>
                </Link>
            ))}
        </Flex>
    );
}

export default ProductsList;