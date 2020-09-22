import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import List from "../../components/List";
import Slide from "../../components/Slide";
import Slider from "../../components/Slider";

const Container = styled.View`
    margin-top: 30px;
`;

export default ( {refreshFn, loading, topRated, popular, today, thisWeek} ) => (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
        <Container>
            <HorizontalSlider title="Popular Shows">
                {popular.map(show => (
                    <Vertical
                        isTv={true}
                        id={show.id}
                        key={show.id}
                        poster={show.poster_path}
                        title={show.name}
                        votes={show.vote_average}
                />))}
            </HorizontalSlider>
            <HorizontalSlider title="Top Rated">
                {topRated.map(show => (
                    <Vertical
                        isTv={true}
                        id={show.id}
                        key={show.id}
                        poster={show.poster_path}
                        title={show.name}
                        votes={show.vote_average}
                />))}
            </HorizontalSlider>
            <Slider>
                    {thisWeek.map(show => (
                        <Slide
                          key={show.id}
                          id={show.id}
                          title={show.name}
                          overview={show.overview}
                          votes={show.vote_average}
                          backgroundImage={show.poster_path}
                          poster={show.poster_path}
                        />
                    ))}
            </Slider>
            <List title="Airing Today">
                {today.map(show => (
                    <Horizontal
                        isTv={true}
                        key={show.id}
                        id={show.id}
                        title={show.name}
                        poster={show.poster_path}
                        overview={show.overview}
                    />
                ))}
            </List>
        </Container>
    </ScrollContainer>
);
