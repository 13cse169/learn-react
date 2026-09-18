const UserStatus = (props) => {
    if (props.loggedIn && props.isAdmin) {
        return <h4>Welcome Admin!!</h4>
    } else {
        return <h4>Welcome User!!</h4>
    }
}

export default UserStatus