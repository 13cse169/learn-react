import { useState } from "react";

const Profile = () => {

    const [profile, setProfile] = useState({
        name: '',
        age: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    return (
        <div>
            <h1>Profile:</h1>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>

            <label>
                Name: 
                <input type="text" name="name" value={profile.name} onChange={handleChange} />
            </label>
            <label>
                Age: 
                <input type="number" name="age" value={profile.age} onChange={handleChange} />
            </label>
        </div>
    )
}

export default Profile