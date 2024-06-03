import {
  MailOutlined,
  MessageOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Layout,
  Typography,
  message,
} from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
    message.success(
      "Thank you for your message. I will get back to you shortly."
    );
    form.resetFields();
  };

  return (
    <Content
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f2f5",
        padding: "50px",
      }}
    >
      <Card
        hoverable
        style={{
          width: "100%",
          maxWidth: "600px",
          borderColor: "black",
          boxShadow: "5px 5px 5px #888888",
        }}
      >
        <Title level={2} style={{ textAlign: "center" }}>
          Contact Me
        </Title>
        <Paragraph style={{ textAlign: "center" }}>
          Please fill out the form below to get in touch with us.
        </Paragraph>
        <Form
          form={form}
          layout="vertical"
          style={{ width: "100%" }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name." }]}
          >
            <Input placeholder="Your Name" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email." },
              { type: "email", message: "Please enter a valid email." },
            ]}
          >
            <Input placeholder="Your Email" prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please enter the date." }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message." }]}
          >
            <Input placeholder="Your Message" prefix={<MessageOutlined />} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit <SendOutlined />
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Content>
  );
};

export default Contact;
