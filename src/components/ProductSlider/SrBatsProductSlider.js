import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { SectionTitleOne } from "../../components/SectionTitle";
import Swiper, { SwiperSlide } from "../swiper";
import SrBatsProductGrid from "../ProductThumb/SrBatsProductGrid";

const params = {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 24,
    grabCursor: true,
    pagination: true,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 5
        }
    }
};

const SrBatsProductSlider = ({ products }) => {
    const { cartItems } = useSelector((state) => state.cart);
    const { wishlistItems } = useSelector((state) => state.wishlist);
    const { compareItems } = useSelector((state) => state.compare);

    return (
        <div className="product-slider-wrapper space-mb--r100">
            <Container>
                <SectionTitleOne
                    title=""
                    subtitle=""
                />
            </Container>
            <div className="product-slider-container product-slider-container--style2">
                {!!products.length && (
                    <Swiper options={params} navClass="prod-swiper-one">
                        {products.map((product) => {
                            const discountedPrice = getDiscountPrice(
                                product.price,
                                product.discount
                            ).toFixed(2);
                            const productPrice = product.price.toFixed(2);
                            const cartItem = cartItems.find(
                                (cartItem) => cartItem.id === product.id
                            );
                            const wishlistItem = wishlistItems.find(
                                (wishlistItem) => wishlistItem.id === product.id
                            );

                            return (
                                <SwiperSlide key={product.id}>
                                    <SrBatsProductGrid
                                        product={product}
                                        discountedPrice={discountedPrice}
                                        productPrice={productPrice}
                                        cartItem={cartItem}
                                        wishlistItem={wishlistItem}
                                        bottomSpace="space-mb--50"
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default SrBatsProductSlider;
