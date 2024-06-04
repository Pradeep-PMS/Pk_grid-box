import React from "react";
import "./page.css";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Card, Col, Flex, Row } from "antd";
import Link from "antd/es/typography/Link";

const Page2 = () => {
  return (
    <>
    <Card>
      <Flex className=" flex justify-between ">
        <MinusCircleOutlined />
        <Link href="">
          <PlusCircleOutlined />
        </Link>
      </Flex>
    </Card>
     
     {/* <Row >
     <Col span={10} className="bg-cyan-400 ">col-12</Col>
     <Col span={10} className="bg-red-400">col-12</Col>
   </Row> */}

   <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row " span={12}>
        <div style={{backgroundColor:'yellow'}}>pp</div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={{backgroundColor:'green'}}>pp</div>
      </Col>
      {/* <Col className="gutter-row" span={6}>
        <div style={{backgroundColor:'pink'}}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={{backgroundColor:'yellow'}}>col-6</div>
      </Col> */}
    </Row>
     
     </>
  );
};

export default Page2;
