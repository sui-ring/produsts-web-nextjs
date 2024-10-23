import { Col, Row } from "antd";
import Comparison from "../components/comparison";
import ProductsList from "../components/products-list";

const Products = () => {
    return (
        <>
            <Row className="content">
                <Col>
                    <h2>Choose products</h2>

                    <Comparison />
                    <ProductsList />
                </Col>
            </Row>
        </>
    );
}
export default Products;