import { Button, Col, Flex, List, Row } from "antd";
import { EMAIL } from "../const";
import Link from "next/link";

const Contact = () => {
    return (
        <Row style={{ padding: '2rem' }}>
            <Col>
                <Flex gap="middle" vertical>
                    <h2>Contact</h2>

                    <p>I am available to contact you via the following services:</p>
                    <ul>
                        <li><Link type="p" href={'mailto:' + EMAIL}><Button type="link">Google email/chat</Button></Link></li>
                    </ul>
                </Flex>
            </Col>
        </Row>
    );
}
export default Contact;