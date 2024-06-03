import { Card, Col, Layout, Row, Typography } from "antd";

const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt quas commodi minima sit a dolore, ea perspiciatis libero iste ut voluptates velit doloribus doloremque ab inventore laborum eaque repellendus!",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt quas commodi minima sit a dolore, ea perspiciatis libero iste ut voluptates velit doloribus doloremque ab inventore laborum eaque repellendus!",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nesciunt quas commodi minima sit a dolore, ea perspiciatis libero iste ut voluptates velit doloribus doloremque ab inventore laborum eaque repellendus!",
  },
];

const Projects = () => (
  <Content
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      padding: "50px",
    }}
  >
    <Title level={2} style={{ textAlign: "center", marginBottom: "50px" }}>
      Projects
    </Title>
    <Row gutter={[16, 16]} justify="center">
      {projects.map((project, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable style={{ borderColor: "black" }}>
            <Meta title={project.title} description={project.description} />
          </Card>
        </Col>
      ))}
    </Row>
  </Content>
);

export default Projects;
