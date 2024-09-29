import React, { useContext } from "react";
import { CardComp } from "../../Components/Card";
import { Chartbar } from "../../Components/Chart";
import TableCopm from "../../Components/Table";
import { Context } from "../../Context/UserContext";
import LyoutComp from "../../Layout";

export const MainPage = () => {
  const user = useContext(Context);

  return (
    <>
      <LyoutComp>
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-evenly m-2 ">
            <div className="flex flex-col justify-around ">
              <div>
                <CardComp data={user?.totalBalance} title="موجودی کل " />
              </div>
              <div>
                <CardComp title="متوسط سن اعضا" data={user?.avgAge} />
              </div>
            </div>
            <div className="h-full ">
              <Chartbar />
            </div>
          </div>
          <div className="w-full my-7">
            <TableCopm />
          </div>
        </div>
      </LyoutComp>
    </>
  );
};
