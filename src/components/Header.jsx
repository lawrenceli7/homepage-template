import { Layout, Menu } from "antd";

const { Header } = Layout;

const HeaderComponent = () => {
  <Header>
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Projects</Menu.Item>
        <Menu.Item key="4">Contact</Menu.Item>
      </Menu>
    </div>
  </Header>;
};

export default HeaderComponent;
