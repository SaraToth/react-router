
import DefaultProfile from "./DefaultProfile";
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { name } = useParams();
    console.log("name param:", name);
    return(
        <div>
            <h1>Hello from profile page!</h1>
            <p>So, how are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
            {name === "popeye"? (
                <Popeye />
            ) : name === "spinach" ? (
                <Spinach />
            ) : (
                <DefaultProfile />
            )}
        </div>
    )
}

export default Profile;