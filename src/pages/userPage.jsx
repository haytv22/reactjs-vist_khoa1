import UserTable from "../component/user/user.table";
import UserForm from "../component/user/user.form";
import { useEffect, useState } from "react";
import { FetchAllUserAPI } from "../services/api_Services";
export default function User() {
  const [current, setCurent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    loandUser();
    return;
  }, [current]);

  const loandUser = async () => {
    const res = await FetchAllUserAPI(current, pageSize);

    if (res.data) {
      setDataUser(res.data.result);
      setCurent(res.data.meta.current);
      //   setPageSize(res.data.pageSize);
      setTotal(res.data.meta.total);
    }
  };
  return (
    <>
      <UserForm loandUser={loandUser} />
      <UserTable
        dataUser={dataUser}
        loandUser={loandUser}
        current={current}
        pageSize={pageSize}
        total={total}
        setCurent={setCurent}
        setPageSize={setPageSize}
      />
    </>
  );
}
