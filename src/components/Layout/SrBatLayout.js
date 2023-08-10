import { Fragment } from "react";
import {SrBatHeader} from "../Header";
import {SrBatFooter} from "../Footer";
import ScrollToTop from "../scroll-to-top"

const SrBatLayout = ({ children, aboutOverlay }) => {
    return (
        <Fragment>
            <SrBatHeader aboutOverlay={aboutOverlay} />
            {children}
            <SrBatFooter />
            <ScrollToTop />
        </Fragment>
    );
};

export default SrBatLayout;
