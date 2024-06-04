import React, { useState } from "react";
import "./page.css";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";

const Page1 = () => {
  const bx = `<Col span={11}`;

  const [box, setBox] = useState<any>(["1"]);

  const addBox = () => {
    if (box.length === 5) {
      return null;
    }
    setBox([...box, bx]);
  };

  const removeBox = () => {
    if (box.length === 1) {
      return null;
    }
    const updatedBox = box.slice(0, -1);
    setBox(updatedBox);
  };

  return (
    <Card
      type="inner"
      title={<MinusCircleOutlined onClick={removeBox} />}
      extra={<PlusCircleOutlined onClick={addBox} />}
    >
      <Row justify={"center"}>
        {box.map((item: any, index: number) => {
          return (
            <Col
              key={index}
              span={11}
              className="bg-sky-300 m-2 h-96 "
            ></Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default Page1;
