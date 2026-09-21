import UpdateUser from './UpdateUser';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';

const IndexUserContext = () => {
  return (
    <div>
        <UserProvider>
            <UserProfile/>
            <UpdateUser/>
        </UserProvider>
    </div>
  )
}

export default IndexUserContext