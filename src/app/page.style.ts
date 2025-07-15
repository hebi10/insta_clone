import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfaf9;
  width: 100%;
  height: 100dvh;
`;

export const LoadingImage = styled.div`
  position: relative;
  max-width: 300px;
  aspect-ratio: 1 / 1;
  width: 90%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;