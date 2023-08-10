import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Anchor from "../anchor";

const SrBatsHoverBannerOne = ({ spaceBottomClass }) => {
    return (
        <div className={clsx("hover-banner-area", spaceBottomClass)}>
            <Container className="wide">
                <Row>
                    <Col lg={6} className="space-mb-mobile-only--30">
                        <div className="blog-intro space-mb-mobile-only--30">
                            <h2>Skillyfully Crafted</h2>
                            <p>
                                Operating out of Fort Worth, Texas, SR Bats specializes in producing custom wood baseball bats with unmatched quality, design, and performance. SR Bats focuses on creating wood bats that improve a player's hitting experience, while bringing them to their maximum hitting potential. Made of the finest materials of high density, with a premier design, and unlimited custom potential, SR Bats produce an unmatched pop! SR Bats is truly changing the game one bat at a time.
                            </p>
                            <Anchor path="/blog/standard-left-sidebar" className="lezada-button lezada-button--medium">
                                Shop Bats
                            </Anchor>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="single-banner single-banner--hoverborder">
                            <Anchor path="/shop/left-sidebar" className="banner-link" />
                            <img
                                src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/327930569_855892555499087_1583707717273564040_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=-FFlqnVngsIAX864bk4&_nc_ht=scontent-lga3-2.xx&oh=00_AfC_-11vvdLxb1fyRGLCu4N89ZlG5ZBr5II2EXjPKlpJPg&oe=649E9754"
                                className="img-fluid"
                                // style={{maxHeight: '845px', maxWidth: '500px', objectFit: 'cover', objectPosition: 'center right'}}
                                alt=""
                            />
                  {/*          <div className="banner-content banner-content--black-left">*/}
                  {/*              <p>*/}
                  {/*                  <span className="big-text">Free shipping</span>*/}
                  {/*                  <span className="small-text d-block">*/}
                  {/*  Free shipping on domestic orders*/}
                  {/*</span>*/}
                  {/*              </p>*/}
                  {/*          </div>*/}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SrBatsHoverBannerOne;
