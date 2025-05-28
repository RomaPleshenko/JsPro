import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";

const { Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout className="min-h-screen flex flex-col">
      <Header />
      <Content className="flex-grow">{children}</Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
