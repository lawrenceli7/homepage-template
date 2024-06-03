import {
  HomeOutlined,
  MailOutlined,
  ProjectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-scroll";

const { Header } = Layout;

const items = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: (
      <Link to="home" smooth={true} duration={500}>
        Home
      </Link>
    ),
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: (
      <Link to="about" smooth={true} duration={500}>
        About
      </Link>
    ),
  },
  {
    key: "3",
    icon: <ProjectOutlined />,
    label: (
      <Link to="projects" smooth={true} duration={500}>
        Projects
      </Link>
    ),
  },
  {
    key: "4",
    icon: <MailOutlined />,
    label: (
      <Link to="contact" smooth={true} duration={500}>
        Contact
      </Link>
    ),
  },
];

const Navbar = () => (
  <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
    <div
      className="logo"
      style={{
        float: "left",
        color: "white",
        fontSize: "20px",
        marginRight: "20px",
      }}
    >
      My Portfolio
    </div>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      items={items}
    />
  </Header>
);

export default Navbar;
