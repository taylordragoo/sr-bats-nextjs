import { Container, Row, Col } from "react-bootstrap";
import Anchor from "../anchor";

const ImageCtaFour = () => {
    return (
        <div
            className="banner-cta space-mb--r130 bg-img"
            style={{
                backgroundImage: `url("${
                    process.env.PUBLIC_URL + "/assets/images/backgrounds/cta-bg.jpg"
                }")`
            }}
        >
            <Container className="wide">
                <Row>
                    <Col lg={7} xl={5}>
                        <div className="banner-cta-content">
                            <h4 className="banner-cta-content__title">3D DESIGN</h4>
                            <h2 className="banner-cta-content__subtitle">
                                Build the bat of your dreams with our 3D bat builder
                            </h2>
                            <Anchor path="/shop/left-sidebar" className="banner-cta-content__button">
                                CUSTOMIZE NOW
                            </Anchor>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ImageCtaFour;
