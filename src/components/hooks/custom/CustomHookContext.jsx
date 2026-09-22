import useUser from "../../../hooks/useUser";

const CustomHookContext = () => {

    const { user, updateUser } = useUser();

    return (
        <div>
            <h2>CustomHookContext</h2>
            <h1>{user.name}</h1>

            <p>{user.email}</p>

            <button onClick={() => updateUser("Rahul")}>
                Change Name
            </button>
        </div>
    )
}

export default CustomHookContext