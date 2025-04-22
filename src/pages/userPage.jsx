import UserTable from "../component/user/user.table";
import UserForm from "../component/user/user.form"
export default function User() {
    return <>
        <UserForm style={{ padding: "20px" }} />
        <UserTable />
    </>


}