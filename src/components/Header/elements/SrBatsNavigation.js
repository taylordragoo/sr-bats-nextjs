import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Anchor from "../../anchor";

const Navigation = () => {
    return (
        <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
            <ul>
                <li>
                    <Anchor path="/">
                        Home
                    </Anchor>
                </li>
                <li>
                    <Anchor
                        path="/shop/left-sidebar">
                        Shop
                    </Anchor>
                    <IoIosArrowDown />
                    <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
                        <li className="sub-menu--mega__title">
                            <Anchor
                                path="/shop/left-sidebar">
                                Bats
                            </Anchor>
                            <ul className="sub-menu--mega__list">
                                <li>
                                    <Anchor
                                        path="/shop/left-sidebar">
                                        Pro
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                        path="/shop/right-sidebar">
                                        Pro+ (Plus)
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                        path="/shop/no-sidebar">
                                        Youth Select
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                        path="/shop/fullwidth-no-space">
                                        Trophy
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                        path="/shop/fullwidth-no-sidebar">
                                        Fungo
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor
                                        path="/shop/fullwidth-left-sidebar">
                                        Trainer
                                    </Anchor>
                                </li>
                            </ul>
                        </li>
                        <li className="sub-menu--mega__title">
                            <Anchor path="/shop/left-sidebar">
                                Gloves
                            </Anchor>
                            <ul className="sub-menu--mega__list">
                                <li>
                                    <Anchor path="/shop/product-basic/lorem-ipsum-decor-one">
                                        Batting Gloves
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor path="/shop/product-fullwidth/lorem-ipsum-decor-one">
                                        Fielding Gloves
                                    </Anchor>
                                </li>
                            </ul>
                        </li>
                        <li className="sub-menu--mega__title">
                            <Anchor path="/">
                                Apparel
                            </Anchor>
                            <ul className="sub-menu--mega__list">
                                <li>
                                    <Anchor path="/other/checkout">
                                        T-Shirts
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor path="/other/order-tracking">
                                        Hats
                                    </Anchor>
                                </li>
                                <li>
                                    <Anchor path="/other/my-account">
                                        Training Apparel
                                    </Anchor>
                                </li>
                            </ul>
                        </li>
                        <li className="sub-menu--mega__title">
                            <Anchor path="/">
                                Misc.
                            </Anchor>
                            <ul className="sub-menu--mega__list">
                                <li>
                                    <Anchor path="/other/checkout">
                                        Batting Grips
                                    </Anchor>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="position-relative">
                    <Anchor path="/">
                        Custom
                    </Anchor>
                </li>

                <li className="position-relative">
                    <Anchor path="/">
                        Experience
                    </Anchor>
                    <IoIosArrowDown />
                    <ul className="sub-menu sub-menu--one-column">
                        <li>
                            <Anchor path="/other/about">
                                Meet the Team
                            </Anchor>
                        </li>
                        <li>
                            <Anchor path="/other/about-two">
                                Shop Tour
                            </Anchor>
                        </li>
                        <li>
                            <Anchor path="/other/contact">
                                MVP Award
                            </Anchor>
                        </li>
                        <li>
                            <Anchor path="/other/coming-soon">
                                Community Involvement
                            </Anchor>
                        </li>
                        <li>
                            <Anchor path="/other/faq">
                                F.A.Q
                            </Anchor>
                        </li>
                    </ul>
                </li>
                <li className="position-relative">
                    <Anchor path="/">
                        Contact
                    </Anchor>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
