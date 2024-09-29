import React, { ReactNode } from "react";
import { Layout, Menu} from "antd";
import { ChatRounded, Dashboard, MoneyOffRounded, VerifiedUserOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const { Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
};



const LyoutComp = ( {children}:{children:ReactNode}) => {
 const navigate = useNavigate(); 

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: "/",
              icon: <Dashboard />,
              label: "داشبورد",
            },
            {
              key: "/Sefaresh",
              icon: <MoneyOffRounded />,
              label: "سفارش ها ",
            },
            {
              key: "/Customers",
              icon: <VerifiedUserOutlined />,
              label: "مشتریان",
            },
            {
              key: "/Data",
              icon: <ChatRounded />,
              label: "گزارش ها",
            },
          ]}
        />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          design by ©{new Date().getFullYear()} alirezaheibati
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LyoutComp;
