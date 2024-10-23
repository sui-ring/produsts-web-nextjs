import { Col, Descriptions, DescriptionsProps, Row } from "antd";
import { ADDRESS, EMAIL, GITHUB, LIVE, PUBLISHER, SITENAME } from "../const";
import { ArrowRightOutlined, MailOutlined } from '@ant-design/icons';

const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: 'Site name',
        children: <p>{SITENAME}</p>,
    },
    {
        key: '2',
        label: 'Publisher',
        children: <p>{PUBLISHER}</p>,
    },
    {
        key: '3',
        label: 'Email',
        children: <p><a title={EMAIL} href={'mailto:' + EMAIL}><ArrowRightOutlined /><MailOutlined /></a></p>,
    },
    {
        key: '4',
        label: 'Live',
        children: <p>{LIVE}</p>,
    },
    {
        key: '5',
        label: 'Address',
        children: <p>{ADDRESS}</p>,
    },
    {
        key: '6',
        label: 'Github',
        children: <p><a href={GITHUB}>{GITHUB.replace("https://", "")}</a></p>,
    },
];


const FooterDescription = () => {
    return (
        <Row style={{ padding: '2rem' }}>
            <Col>
                <Descriptions title="Publisher informations" items={items} />
            </Col>
        </Row>
    );
}

export default FooterDescription;