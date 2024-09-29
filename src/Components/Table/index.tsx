import { Table } from "antd";
import type { TableProps } from "antd";
import { Context, User } from "../../Context/UserContext";
import { useContext } from "react";

const columns: TableProps<User>["columns"] = [
  {
    title: "",
    dataIndex: "img",
    key: "img",
    render: (img) => (
      <img src={img} alt="user" style={{ width: 50, borderRadius: "50%" }} />
    ), 
  },
  {
    title: "نام و نام خانوادگی",
    key: "name",
    render: (_, record) => (
      <>
        {record.firstName} {record.lastName} 
      </>
    ),
  },
  {
    title: "شهر سکونت",
    dataIndex: "city",
    key: "address",
  },
  {
    title: "شغل",
    dataIndex: "job",
    key: "job",
  },
  {
    title: "سن",
    key: "age",
    render: (_, record) => <>{record.age}</>, 
  },
  {
    title: "موجودی",
    dataIndex: "deposit",
    key: "deposit",
  },
];

const TableComp: React.FC = () => {
  const userContext = useContext(Context);

  return (
    <Table<User>
      columns={columns}
      dataSource={userContext?.list} 
      rowKey="id"
      className="shadow-lg"
    />
  );
};

export default TableComp;
