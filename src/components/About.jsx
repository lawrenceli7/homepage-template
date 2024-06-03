import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const About = () => (
  <Content
    style={{
      minHeight: "100vh",
      padding: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    }}
  >
    <Title level={2} style={{ marginBottom: "20px" }}>
      About Me
    </Title>
    <Paragraph style={{ maxWidth: "800px" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      lacus id arcu dapibus fermentum. Quisque in purus eu felis facilisis
      viverra. Sed accumsan euismod commodo. Proin vel vehicula felis.
    </Paragraph>
  </Content>
);

export default About;
