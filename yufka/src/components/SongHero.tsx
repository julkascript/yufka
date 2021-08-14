import styled from "styled-components";

const SongTitle = styled.h1`
  display: flex;
  color: whitesmoke;
`;

const ArtistName = styled.h2`
  font-size: 1.1em;
  color: #ffa33a;
`;

const SongImage = styled.img`
  width: 160px;
  height: 160px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 1.5rem;
`;

const SongInfoWrapper = styled.div`
  display: flex;
  width: 50%;
`;

const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: black;
`;

const SongHero = () => {
  return (
    <OuterWrapper>
      <SongInfoWrapper>
        <SongImage src="https://static01.nyt.com/images/2020/03/19/smarter-living/00well-handwashing-psa-music-notes/00well-handwashing-psa-music-notes-articleLarge-v3.gif?quality=75&auto=webp&disable=upscale" />
        <SongInfo>
          <SongTitle>Some song title</SongTitle>
          <ArtistName>Drake</ArtistName>
        </SongInfo>
      </SongInfoWrapper>
    </OuterWrapper>
  );
};

export default SongHero;
