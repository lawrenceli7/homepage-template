import { Layout } from "antd";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const { Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Navbar />
    <Content>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Content>
    <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
      My Portfolio ©2024 Created by Me
    </Footer>
  </Layout>
);

export default App;
