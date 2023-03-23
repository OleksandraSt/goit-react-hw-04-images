import styled from '@emotion/styled';

export const GalleryContainer = styled.div`
  display: block;
  justify-content: center;
  justify-items: center;
`;

export const ImageGalleryContainer = styled.ul`
display: grid;
max-width: calc(100vw - 48px);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 16px;
margin-top: 0;
margin-bottom: 0;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;
margin-top: 16px;
margin-bottom: 16px;
`;

export const Request = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin: auto;
  margin-top: 40px;
  justify-content: center;
  width: 400px;
  padding: 15px;
  color: green;
`;

export const ErrorMessage = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin: auto;
  margin-top: 40px;
  justify-content: center;
  width: 400px;
  padding: 15px;
  color: red;
`;