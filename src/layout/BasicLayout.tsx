import React from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";

interface BasicLayoutProps {
  // headerTitle?: string;
  // headerSubtitle?: string;
}

export default class BasicLayout extends React.Component<BasicLayoutProps> {
  render() {
    return (
      <>
        <Navbar />
        <Header />
      </>
    );
  }
}
