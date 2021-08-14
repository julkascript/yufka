import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  background-color: white;
  margin: 0 auto;
  padding: 1.5rem;
`;

const OuterContainer = styled.div`
  width: 100%;
  background-color: #f2f1f3;
`;

const SongTitle = styled.h3`
  color: palevioletred;
  padding-bottom: 3rem;
`;

const TextWrapper = styled.div`
  width: 55%;
  padding-right: 0.5rem;
`;

const SidesWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommentsWrapper = styled.div`
  width: 45%;
  padding-left: 0.5rem;
`;

type SongLyricsProps = {
    lyrics: string;
}

const SongLyrics = ({lyrics}:SongLyricsProps) => {
  return (
    <OuterContainer>
      <Container>
        <SongTitle>Some song title lyrics</SongTitle>
        <SidesWrapper>
          <TextWrapper>
            <p>
              {lyrics}
            </p>
          </TextWrapper>
          <CommentsWrapper>
            <p>Hihi</p>
          </CommentsWrapper>
        </SidesWrapper>
      </Container>
    </OuterContainer>
  );
};

export default SongLyrics;
