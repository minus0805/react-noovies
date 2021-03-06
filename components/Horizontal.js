import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { apiImage } from "../api";
import { trimText, formatDate } from "../utils";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
    padding: 0px 30px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-start;
`;

const Data = styled.View`
    align-items: flex-start;
    width: 65%;
    margin-left: 20px;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
    color: white;
    font-size: 12px;
`;

const Overview = styled.Text`
    color: white;
    margin-top: 10px;
`;

const Horizontal = ({isTv=false, id, title, overview, poster, releaseDate}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail", {
            isTv,
            id,
            title,
            overview,
            poster,
            releaseDate
        })
    }
    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={poster} />
                <Data>
                    <Title>{trimText(title, 10)}</Title>
                        {releaseDate ? <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate> : null}
                    <Overview>{trimText(overview, 130)}</Overview>
                </Data>
            </Container>
        </TouchableOpacity>
    )
}

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string,
  releaseDate: PropTypes.string
};

export default Horizontal;
