import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Title from "./Title"
import { ScrollView, Dimensions } from "react-native";
import PropTypes from "prop-types";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
    width: 100%;
    height: ${HEIGHT / 3}px;
    margin-bottom: 50px;
`

const Slider = ({ children }) => (
    <>
        <Container>
            <Swiper controlsEnabled={false} loop timeout={3}>
                {children}
            </Swiper>
        </Container>
    </>
)

Slider.propTypes = {
    children: PropTypes.node.isRequired
}

export default Slider;
