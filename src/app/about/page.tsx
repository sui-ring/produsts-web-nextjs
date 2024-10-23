import { Tabs, Col, Flex, Row } from "antd";

const items = [
    {
        key: '1',
        label: 'Terms of Service',
        children: (
            <>
                <h2>4. Copyright and Intellectual Property</h2>

                <h3>4.1 Copyright Ownership</h3>
                <p>
                    All intellectual property rights, including but not limited to copyrights, trademarks, and patents related to the SIGNALRS software, website, and any associated materials are the exclusive property of me. All rights not expressly granted herein are reserved.
                </p>

                <h3>4.2 License Grant</h3>
                <p>
                    The Company grants you a non-exclusive, non-transferable, revocable license to use the SIGNALRS software for personal and non-commercial purposes during the trial period. This license does not allow you to:
                </p>
                <ul>
                    <li>Reproduce, distribute, modify, or create derivative works of the software without prior written permission from the Company.</li>
                    <li>Use SIGNALRS for any illegal or unauthorized purpose.</li>
                </ul>

                <h3>4.3 Trademark Usage</h3>
                <p>
                    SIGNALRS and its logo are trademarks of me. You may not use these trademarks without prior written consent from the Company. All other trademarks, service marks, and trade names mentioned on our website or in connection with SIGNALRS are the property of their respective owners.
                </p>

                <h3>4.4 Feedback</h3>
                <p>
                    By using SIGNALRS, you agree that any feedback, suggestions, or ideas you provide to the Company regarding the software may be used by the Company without any obligation or compensation to you.
                </p>

                <h3>4.5 Protection of Intellectual Property</h3>
                <p>
                    The Company takes the protection of its intellectual property seriously. Any unauthorized use, reproduction, or distribution of SIGNALRS may result in legal action. The Company reserves the right to enforce its intellectual property rights to the fullest extent of the law.
                </p>

                <h3>4.6 Changes to Terms</h3>
                <p>
                    The Company may update this &quot;Copyright and Intellectual Property&quot; section from time to time. Changes will be effective immediately upon posting on our website. Your continued use of SIGNALRS following any changes constitutes your acceptance of those changes.
                </p>
            </>
        )
    },
];

const About = () => {
    return (
        <Flex gap={'middle'} vertical>
            <Row className="content">
                <Col>
                    <Tabs defaultActiveKey="1" items={items} />
                </Col>
            </Row>
        </Flex>
    )
}

export default About;