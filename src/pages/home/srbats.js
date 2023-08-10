import { Container, Row, Col } from "react-bootstrap";
import {SrBatLayout} from "../../components/Layout";
import { SrBatsHeroSlider } from "../../components/HeroSlider";
import { SectionTitleOne } from "../../components/SectionTitle";
import {SrBatsCategoryGrid} from "../../components/Category";
import { ProductTabTwo } from "../../components/ProductTab";
import { BlogPostSlider } from "../../components/Blog";
import blogData from "../../data/blog-posts/blog-post-one.json";
import heroSliderData from "../../data/hero-sliders/hero-slider-three.json";
import SrBatsHoverBannerOne from "../../components/Banner/SrBatsHoverBannerOne";
import SrBatsHoverBannerTwo from "../../components/Banner/SrBatsHoverBannerTwo";
import {useSelector} from "react-redux";
import {getProducts} from "../../lib/product";
import {CountdownTimerFive} from "../../components/Countdown";
import {ImageCtaFour, ImageCtaThree} from "../../components/Cta";
import {ProductSliderOne} from "../../components/ProductSlider";
import SrBatsImageCta from "../../components/Cta/SrBatsImageCta";
import SrBatsBlogPostSlider from "../../components/Blog/SrBatsBlogPostSlider";
import SrBatsProductSlider from "../../components/ProductSlider/SrBatsProductSlider";

const SrBats = ({ }) => {
    const { products } = useSelector((state) => state.product);
    const newProducts = getProducts(products, "fashion", "new", 8);
    const popularProducts = getProducts(products, "fashion", "popular", 8);
    const saleProducts = getProducts(products, "fashion", "sale", 8);

    return (
        <SrBatLayout>

            <SrBatsHeroSlider
                sliderData={heroSliderData}
                spaceBottomClass="space-mb--r100"
            />

            <div className="section-title-container">
                <Container>
                    <Row className="space-mb--50">
                        <Col xs={6}>
                            <div className="section-title__label">
                                <p>
                                    SR23 <span className="line">//</span>
                                </p>
                            </div>
                        </Col>
                        <Col xs={6} className="text-end">
                            <div className="section-title__label">
                                <p>
                                    INNOVATIVE <br/> DESIGN
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-lg-12">
                            <SectionTitleOne title="Designed For Glory."/>
                        </div>
                    </Row>
                </Container>
            </div>

            <SrBatsCategoryGrid spaceBottomClass="space-mb--r100"/>

            <SrBatsProductSlider products={popularProducts} />

            <SrBatsHoverBannerOne spaceBottomClass="space-mb--r100" />

            <SrBatsHoverBannerTwo spaceBottomClass="space-mb--r100" />

            <SrBatsImageCta spaceBottomClass="space-mb--r100" />

            <SrBatsBlogPostSlider
                blogData={blogData}
                spaceBottomClass="space-mb--r100"
            />

        </SrBatLayout>
    );
};

export default SrBats;
