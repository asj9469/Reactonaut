import styled from "styled-components";
import backgroundImage from './images/stars.gif';

export const ViewContainerRoot = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 110px 15px 35px;
  box-sizing: border-box;
  // background-color: #121214;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  width: 39.26%;
  position: relative;
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-start;
  margin: 0px 0px 101px 0px;
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  width: 276px;
  position: relative;
  gap: 9px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`;
export const LogoText = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 36px;
  font-family: Inter;
  box-sizing: border-box;
`;
export const LogoImage = styled.img`
  width: 54px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
`;

export const CodeEditorRectangle = styled.div`
  height: 80vh;
  width: 89.66%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  padding: 11px 21.2px 657px 21.2px;
  box-sizing: border-box;
`;
export const LiveCodeContainer = styled.div`
  width: 100%;
  position: relative;
  top: 30px,
  height: 672; /* adjust this value as needed */
  overflow: auto;
`;

 export const FileNameContainer = styled.div`
    position: relative;
    color: #ffffff;
    font-size: 20px;
    font-family: Inter;
    box-sizing: border-box;
  `;

  export const FileNameInputStyle = {
    fontSize: "16px",
    color: "white",
    fontFamily: "Inter",
    borderBottom: "2px solid #292c2f",
  };

  export const FirstRectangle = styled.div`
    width: 99.84%;
    height: 75vh;
    left: 1px;
    top: 30px;
    position: absolute;
    border-radius: 12px;
    box-sizing: border-box;
    background-color: #202123;
  `;
  export const SecondRectangle = styled.div`
    width: 100%;
    height: 33px;
    left: 0px;
    top: 16px;
    position: absolute;
    box-sizing: border-box;
    background-color: #292c2f;
  `;
  export const ThirdRectangle = styled.div`
    width: 100%;
    height: 33px;
    left: 0px;
    top: 0px;
    position: absolute;
    border-radius: 12px;
    box-sizing: border-box;
    background-color: #292c2f;
  `;

export const HeaderContainer2 = styled.div`
  width: 54.77%;
  position: relative;
  top: 101px;
  bottom: 101px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
`;

export const TabContainer = styled.div`
  position: relative;
  font-size: 20px;
  font-family: Inter;
  left: 0px;
  top: 0px;
  box-sizing: border-box;
`;

export const PreviewSectionContainer = styled.div`
  height: 80vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 12px;
  box-sizing: border-box;
  background-color: #202123;
`;

export const LivePreviewContainer = styled.div`
  position: absolute;
  top: 70px;
  bottom: 20px;
  left: 20px;
  right:20px;
  box-sizing: border-box;
  overflow: auto;
`;

export const ChatBoxContainer = styled.div`
  height: calc(80vh - 6rem);
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #202123;
  overflow: auto;
`;

export const ChatBox = styled.div`
  max-height: calc(100% - 90px);
  flex-grow: 1;
  padding: 1px;
  overflow: auto;
`;

export const ChatInputBox = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
`

export const ChatInputStyle = {
  outline: 'none',
  paddingLeft: '15px',
  height: "35px",
  width: "70%",
  backgroundColor: "#292c2f",
  borderRadius: "4px",
  fontSize: "16px",
  color: "white",
  fontFamily: "Inter",
}
