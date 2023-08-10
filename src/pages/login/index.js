import { Container, Row, Col } from "react-bootstrap";
import {LayoutTwo, SrBatLayout} from "../../components/Layout";
import { useState } from 'react';
import login from '../api/auth/login';
import { useDispatch } from 'react-redux';
import {loginSuccess, setCustomerInfo} from "../../store/slices/user-slice";
import getCustomerInfo from "../api/customer";

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent the form from refreshing the page
        try {
            const accessToken = await login(email, password);
            console.log(accessToken);
            dispatch(loginSuccess({ accessToken }));

            // try to get customer info
            try {
                const customerInfo = await getCustomerInfo(accessToken.accessToken);
                dispatch(setCustomerInfo(customerInfo));
            } catch (error) {
                console.error('Error getting customer info', error);
                // handle the error, e.g. show an error message to the user
            }

            // save the access token and use it for subsequent authenticated requests
        } catch (error) {
            console.error('Error logging in', error);
            // handle the error, e.g. show an error message to the user
        }
    };


    return (
        <SrBatLayout>
            <div className="login-area space-mt--r130 space-mb--r130">
                <Container>
                    <Row>
                        <Col lg={6} className="space-mb-mobile-only--50">
                            <div className="lezada-form login-form">
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="section-title--login text-center space-mb--50">
                                                <h2 className="space-mb--20">Login</h2>
                                                <p>Great to have you back!</p>
                                            </div>
                                        </Col>
                                        <Col lg={12} className="space-mb--60">
                                            <input
                                                type="text"
                                                placeholder="Username or email address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </Col>
                                        <Col lg={12} className="space-mb--60">
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                        </Col>
                                        <Col lg={12} className="space-mb--30">
                                            <button className="lezada-button lezada-button--medium">
                                                login
                                            </button>
                                        </Col>
                                        <Col>
                                            <input type="checkbox" />{" "}
                                            <span className="remember-text">Remember me</span>
                                            <a href="#" className="reset-pass-link">
                                                Lost your password?
                                            </a>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="lezada-form login-form--register">
                                <form>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="section-title--login text-center space-mb--50">
                                                <h2 className="space-mb--20">Register</h2>
                                                <p>If you don’t have an account, register now!</p>
                                            </div>
                                        </Col>
                                        <Col lg={12} className="space-mb--30">
                                            <label htmlFor="regEmail">
                                                Email Address <span className="required">*</span>{" "}
                                            </label>
                                            <input type="text" id="regEmail" required />
                                        </Col>
                                        <Col lg={12} className="space-mb--50">
                                            <label htmlFor="regPassword">
                                                Password <span className="required">*</span>{" "}
                                            </label>
                                            <input type="password" id="regPassword" required />
                                        </Col>
                                        <Col lg={12} className="text-center">
                                            <button className="lezada-button lezada-button--medium">
                                                register
                                            </button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </SrBatLayout>
    );
};

export default Login;
