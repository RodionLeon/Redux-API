import {fetchUsers} from "../../redux/store/user/actions";
import * as userSelectors from "../../redux/store/user/selectors";
import {Link} from "react-router-dom";
import CustomRenderer from "../../components/CustomRenderer";
import {useSelector} from "react-redux";

export default function Users() {
    const users = useSelector(userSelectors.users);

    return (
        <CustomRenderer request={fetchUsers} selector={userSelectors.all} children={
            users.map(user => (
                <Link to={`/users/${user.id}`} key={user.id}>
                    <div>{user.name}</div>
                </Link>
            ))
        }/>
    )
}

