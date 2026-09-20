import { FaUserGraduate } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

import "./ProfileCard.css";

const ProfileCard = () => {
    const styles = {
        background: "lightgray",
        padding: "15px",
        borderRadius: "8px",
        color: "black",
        margin: "10px 0 10px 0"
    }
    return (
        <div>
            <div className="card-div">
                <div className="card">
                    <h2>Card 1<FaAddressCard color="gold"/></h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ratione dolorem minus natus laboriosam, nam recusandae vitae sapiente, dignissimos tempora dolore. Dignissimos magnam quia voluptatum ullam velit deserunt atque aliquid!</p>
                </div>
                <div className="card card-1">
                    <h2>Card 2<FaAddressCard color="gold"/></h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci ratione dolorem minus natus laboriosam, nam recusandae vitae sapiente, dignissimos tempora dolore. Dignissimos magnam quia voluptatum ullam velit deserunt atque aliquid!</p>
                </div>
                <div className="card card-2">
                    <h2>Card 3<FaAddressCard color="gold"/></h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure sequi at ipsa quos, repellendus fugiat repellat necessitatibus beatae provident nesciunt consequuntur voluptas voluptate nisi odio? Corrupti ex dicta nihil fuga?</p>
                </div>
            </div>
            <div style={{ background: "lightblue", padding: "15px", borderRadius: "8px", color: "blue" }}>
                <h2>Profile 1 <FaUserGraduate size={50} color="gold"/></h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quae, necessitatibus in fugiat ad adipisci a ratione ullam? Ratione consequuntur illum minus soluta consectetur modi doloribus recusandae nesciunt placeat voluptatum?</p>
            </div>
            <div style={styles}>
                <h2>Profile 2 <FaUserCircle /></h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quae, necessitatibus in fugiat ad adipisci a ratione ullam? Ratione consequuntur illum minus soluta consectetur modi doloribus recusandae nesciunt placeat voluptatum?</p>
            </div>
        </div>
    )
}

export default ProfileCard