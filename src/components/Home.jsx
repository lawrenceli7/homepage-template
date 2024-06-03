import { Button, Layout, Typography } from "antd";
import { Link as ScrollLink } from "react-scroll";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => (
  <Content
    style={{
      textAlign: "center",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
    }}
  >
    <Title level={1}>Welcome to My Portfolio</Title>
    <Paragraph style={{ margin: "15px" }}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias atque
      vel, adipisci laudantium nobis sit ipsum perferendis! Iure architecto.
    </Paragraph>
    <div>
      <ScrollLink to="about" smooth={true} duration={500}>
        <Button type="primary" size="large" style={{ margin: "0 10px" }}>
          Learn More About Me
        </Button>
      </ScrollLink>
      <ScrollLink to="projects" smooth={true} duration={500}>
        <Button size="large" style={{ margin: "0 10px" }}>
          View My Projects
        </Button>
      </ScrollLink>
    </div>
  </Content>
);

export default Home;
