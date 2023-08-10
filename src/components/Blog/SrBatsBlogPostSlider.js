import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    navigation: true,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        }
    }
};

const SrBatsBlogPostSlider = ({ blogData, spaceBottomClass }) => {
    return (
        <div
            className={clsx("blog-post-slider", spaceBottomClass)}
        >
            <Container>
                <Row className="align-items-center">
                    <Col lg={4}>
                        <div className="blog-intro space-mb-mobile-only--30">
                            <h2>Community Involvement</h2>
                            <p>
                                At SR Bats, we're dedicated to more than just crafting top-quality bats. We're deeply involved in our community, participating in numerous events and initiatives annually. Our aim is not only to enhance the game but also to foster a spirit of inclusivity and sportsmanship. Giving back is part of our pitch and we're committed to stepping up to the plate for our community.
                            </p>
                            {/*<Anchor path="/blog/standard-left-sidebar" className="lezada-button lezada-button--medium">*/}
                            {/*    view all*/}
                            {/*</Anchor>*/}
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="blog-post-slider-container">
                            {blogData?.length ? (
                                <Swiper options={params} navClass="blog-post-swiper">
                                    {blogData.map((single, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="blog-grid-post">
                                                <div className="blog-grid-post__image space-mb--30">
                                                    <Anchor path={single.url}>
                                                        <img
                                                            src={process.env.PUBLIC_URL + single.image}
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </Anchor>
                                                </div>
                                                <div className="blog-grid-post__content">
                                                    <h2 className="post-title">
                                                        <Anchor path={single.url}>
                                                            {single.title}
                                                        </Anchor>
                                                    </h2>
                                                    <p className="post-excerpt">{single.text}</p>
                                                    {/*<Anchor path={single.url} className="blog-readmore-btn">*/}
                                                    {/*    read more*/}
                                                    {/*</Anchor>*/}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : null}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SrBatsBlogPostSlider;
