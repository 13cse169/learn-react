const UserList = () => {
    const usersInfo = [
        {
            "username": "rahul123",
            "email": "rahul@example.com",
            "location": "Pune"
        },
        {
            "username": "priya456",
            "email": "priya@example.com",
            "location": "Mumbai"
        },
        {
            "username": "amit789",
            "email": "amit@example.com",
            "location": "Delhi"
        },
        {
            "username": "neha321",
            "email": "neha@example.com",
            "location": "Bangalore"
        },
        {
            "username": "rohit654",
            "email": "rohit@example.com",
            "location": "Hyderabad"
        }
    ];

    return (
        <main>
            <ul>
                { usersInfo.map(user => (
                    <li key={user.username}>
                        {user.username} - {user.email} - {user.location}
                    </li>
                )) }
            </ul>
            <hr/>
            <ul>
                { usersInfo.map(({username, email, location}) => (
                    <li key={username}>
                        {username} - {email} - {location}
                    </li>
                )) }
            </ul>
            <hr />
        </main>
    )
}

export default UserList