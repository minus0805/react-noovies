import React from "react";
import styled from "styled-components/native";

const Container = styled.Text`
    color: rgb(220, 220, 220);
    font-size: 12px;
    font-weight: 500;
`;

const Votes = ({ votes }) => <Container>⭐️{votes}</Container>

export default Votes;
