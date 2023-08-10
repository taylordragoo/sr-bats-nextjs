import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Anchor from "../anchor";

const SrBatsHoverBannerTwo = ({ spaceBottomClass }) => {
    return (
        <div className={clsx("hover-banner-area", spaceBottomClass)}>
            <Container className="wide">
                <Row>
                    <Col lg={6}>
                        <div className="single-banner single-banner--hoverborder">
                            <Anchor path="/shop/left-sidebar" className="banner-link" />
                            <img
                                src="https://cdn.shopify.com/s/files/1/0413/2542/8896/files/IMG_0608_1728x.jpg?v=1614785174"
                                className="img-fluid"
                                alt=""
                            />
                            {/*<div className="banner-content banner-content--black-left">*/}
                            {/*    <p>*/}
                            {/*        <span className="big-text">Free shipping</span>*/}
                            {/*        <span className="small-text d-block">Free shipping on domestic orders</span>*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                        </div>
                    </Col>
                    <Col lg={6} className="space-mb-mobile-only--30">
                        <div className="blog-intro space-mb-mobile-only--30">
                            <h2>Designed For Glory</h2>
                            <p>
                                The balance, feel, and density give the batter the greatest confidence at the plate. Finding and managing the right weight, density, length, balance, and feel are all key factors that SR Bats focuses on to cater to any type of hitter’s swing.  SR Bats uses the highest density maple, ash, and birch on the market. The bats are designed to bring glory on and off the field.
                            </p>
                            <Anchor path="/blog/standard-left-sidebar" className="lezada-button lezada-button--medium">
                                Meet the Team
                            </Anchor>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SrBatsHoverBannerTwo;
