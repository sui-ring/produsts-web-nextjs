import { Carousel, Col, Flex, Row, Image, Button } from "antd";
import Link from "next/link";

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '480px',
    color: '#fff',
    lineHeight: '480px',
    textAlign: 'center',
    background: '#364d79',
};

const ProductSignalrs = () => {
    return (
        <>
            <Flex gap={'middle'} vertical>
                <Carousel>
                    <div>
                        <h3 style={contentStyle}>
                            <Image
                                preview={false}
                                src="/images/test.jpg"
                                alt="Signalrs"
                            />
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>

                <Row>
                    <Col style={{ textAlign: 'center', width: '100vw', height: '40vh', margin: '0 auto' }}>
                        <iframe width="720" height="380" src="https://www.youtube.com/embed/UvAwCDRahTQ?si=5iiUJc7hNQURGIlK" title="HFT SIGNALRS for All Traders" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </Col>
                </Row>

                <Row className="content">
                    <Col>
                        <h1>Introducing Signalrs<small>Your Gateway to Automated Trading</small></h1>
                        <h2>Are you ready to take your trading to the next level?</h2>
                        <p>Signalrs is the perfect tool for traders who want to automate their trading strategies without the need for complex programming skills. Whether you are a seasoned trader or just starting out, our user-friendly solution can help you achieve your financial goals.</p>
                        <h3>What can Signalrs do for you?</h3>
                        <ul>
                            <li><strong>Automate your trading:</strong> Say goodbye to manual trades and hello to efficiency!</li>
                            <li><strong>Work with popular platforms:</strong> Seamlessly integrates with MetaTrader and Expert Advisor</li>
                            <li><strong>Real-time analysis:</strong> Detect market volatility and execute trades automatically</li>
                            <li><strong>No coding required:</strong> User-friendly interface for easy setup and operation</li>
                        </ul>
                        <h3>Key Benefits:</h3>
                        <ol>
                            <li><strong>Time-saving:</strong> Let Signalrs monitor the markets 24/7, so you do not have to</li>
                            <li><strong>Consistency:</strong> Remove emotional decision-making from your trading</li>
                            <li><strong>Flexibility:</strong> Works with exchanges that do not support API trading</li>
                            <li><strong>Easy to use:</strong> Simple setup process and intuitive controls</li>
                        </ol>
                        <h3>How It Works:</h3>
                        <p>Signalrs analyzes data from your trading platforms, detects market opportunities based on your preferences, and executes trades automatically. It is like having a personal trading assistant working for you around the clock!</p>
                        <h3>Who Can Benefit?</h3>
                        <ul>
                            <li>Day traders looking to automate their strategies</li>
                            <li>Investors who want to take advantage of market volatility</li>
                            <li>Traders using platforms without API support</li>
                            <li>Anyone interested in exploring automated trading without coding skills</li>
                        </ul>
                        <h3>Requirements</h3>
                        <ul>
                            <li>OS: Windows, VPS ok</li>
                            <li>CPU: ＞ 1GHz</li>
                            <li>RAM: ＞ 4GB</li>
                        </ul>

                        <h3>Get Started Today!</h3>
                        <p>Do not let another trading opportunity slip away. With Signalrs, you can harness the power of automated trading without the complexity. Take control of your financial future and start maximizing your profits today!</p>
                        <p><strong>Ready to revolutionize your trading? We are ready to offer a free demo. If you would like to try trading, feel free to contact us!</strong></p>

                        <h3>Get Your Free Trial Now!</h3>
                        <p>
                            Please fill out the form on the following page and submit it. The program will be sent to the email address you entered after few hours.
                        </p>
                        <Link href="/trial">
                            <Button type="primary">
                                Trial me!
                            </Button>
                        </Link>
                    </Col>
                </Row>



            </Flex>
        </>
    );
}
export default ProductSignalrs;