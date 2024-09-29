import React from "react";
import Card from "antd/es/card/Card";
import Statistic from "antd/es/statistic/Statistic";
type cardData = {
  data:number |undefined ;
  title: string;
};

export const CardComp: React.FC<cardData> = ({ data, title }) => {

  return (
    <>
      <Card
        title={title}
        style={{ width: 300 }}
        className="shadow-lg h-[120px] m-2"
      >
        <Statistic
          value={data}
          precision={2}
          valueStyle={{ color: "#3f8600" }}
        />
      </Card>
    </>
  );
};
