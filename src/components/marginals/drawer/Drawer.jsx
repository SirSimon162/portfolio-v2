import {
  MainContainer,
  ChildContainer,
  TranslucentDiv,
  ContentSection,
  ContentSectionDiv,
  Content,
  ContentSectionDivTwo,
  Close,
} from "../../../styles/componentStyles/drawer.styles";
import ContactForm from "./ContactForm";
import Heading from "../../shared/Heading";

function Drawer(props) {
  return (
    <MainContainer className={`${props.isOpen ? "block" : "hidden"}`}>
      <ChildContainer>
        <TranslucentDiv onClick={props.onClose}></TranslucentDiv>
        <ContentSection aria-labelledby="slide-over-heading">
          <ContentSectionDiv>
            <Close onClick={props.onClose}/>
            <ContentSectionDivTwo>
              <Content>
                <Heading>Contact Me</Heading>
                <ContactForm/>
              </Content>
            </ContentSectionDivTwo>
          </ContentSectionDiv>
        </ContentSection>
      </ChildContainer>
    </MainContainer>
  );
}

export default Drawer;
