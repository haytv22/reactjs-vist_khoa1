import UserTable from "../component/user/user.table";
import UserForm from "../component/user/user.form"
import { useEffect, useState } from "react";
import { FetchAllUserAPI } from "../services/api_Services";
export default function User() {
    const [dataUser, setDataUser] = useState([])
    useEffect(() => {
        loandUser()
    }, [])

    const loandUser = async () => {
        const res = await FetchAllUserAPI()

        if (res.data) {
            setDataUser(res.data.result)
        }
    }
    return <>
        <UserForm loandUser={loandUser} />
        <UserTable
            dataUser={dataUser}
            loandUser={loandUser}
        />
    </>
}