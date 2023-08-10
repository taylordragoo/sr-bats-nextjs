import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Anchor from "../anchor";

const SrBatsCategoryGrid = ({ spaceBottomClass }) => {
    return (
        <div className={clsx("product-category-container", spaceBottomClass)}>
            <Container>
                <Row className="row-5 space-mb--n10">
                    <Col lg={6}>
                        <Row className="row-5">
                            <Col lg={12}>
                                <div className="single-category single-category--three space-mb--10">
                                    <div className="single-category__image single-category__image--three">
                                        <img
                                            src={"https://cdn.shopify.com/s/files/1/0413/2542/8896/files/348370873_1264442511112210_5692398666369954023_n_1024x1024@2x.jpg?v=1685035230"}
                                            className="img-fluid"
                                            style={{maxHeight: '580px', maxWidth: '580px', objectFit: 'cover', objectPosition: 'center'}}
                                            alt=""
                                        />
                                    </div>
                                    <div className="single-category__content single-category__content--three">
                                        <div className="title">
                                            <p>Custom Bats</p>
                                            <Anchor path="/shop/left-sidebar">
                                                + Store
                                            </Anchor>
                                        </div>
                                    </div>
                                    <Anchor path="/shop/left-sidebar" className="banner-link"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="single-category single-category--three space-mb--10">
                                    <div className="single-category__image single-category__image--three">
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/category/1687199471732.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="single-category__content single-category__content--three">
                                        <div className="title">
                                            <p>Batting Gloves</p>
                                            <Anchor path="/shop/left-sidebar">
                                                + Store
                                            </Anchor>
                                        </div>
                                    </div>
                                    <Anchor path="/shop/left-sidebar" className="banner-link"/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="single-category single-category--three space-mb--10">
                                    <div className="single-category__image single-category__image--three">
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/hero-slider/fielding-glove-transparent.png"
                                            }
                                            style={{ backgroundColor: '#605F5E', maxHeight: '285px', maxWidth: '285px', objectFit: 'contain', objectPosition: 'center bottom'}}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="single-category__content single-category__content--three">
                                        <div className="title">
                                            <p>Fielding Gloves</p>
                                            <Anchor path="/shop/left-sidebar">
                                                + Store
                                            </Anchor>
                                        </div>
                                    </div>
                                    <Anchor path="/shop/left-sidebar" className="banner-link"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row className="row-5">
                            <Col lg={12}>
                                <div className="single-category single-category--three space-mb--10">
                                    <div className="single-category__image single-category__image--three">
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/category/apparel.jpg"
                                            }
                                            style={{maxHeight: '285px', maxWidth: '580px', objectFit: 'cover', objectPosition: 'center bottom'}}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="single-category__content single-category__content--three">
                                        <div className="title">
                                            <p>Apparel</p>
                                            <Anchor path="/shop/left-sidebar">
                                                + Store
                                            </Anchor>
                                        </div>
                                    </div>
                                    <Anchor path="/shop/left-sidebar" className="banner-link"/>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="single-category single-category--three space-mb--10">
                                    <div className="single-category__image single-category__image--three">
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/hero-slider/trainer-transparent-580.png"
                                            }
                                            className="img-fluid"
                                            style={{ backgroundColor: '#E2E2E2',maxHeight: '580px', maxWidth: '580px', objectFit: 'cover', objectPosition: 'center'}}
                                            alt=""
                                        />
                                    </div>
                                    <div className="single-category__content single-category__content--three">
                                        <div className="title">
                                            <p>Custom Trainers</p>
                                            <Anchor path="/shop/left-sidebar">
                                                + Store
                                            </Anchor>
                                        </div>
                                    </div>
                                    <Anchor path="/shop/left-sidebar" className="banner-link"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SrBatsCategoryGrid;
