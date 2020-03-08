import React from "react";
import { PageHeader } from "antd";

interface HeaderProps {
  // title?: string;
  // subtitle?: string;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <PageHeader
        className="site-page-header"
        title="Title"
        subTitle="Subtitle"
      />
    );
  }
}
