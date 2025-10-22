import { useParams } from "react-router-dom";

function UserDetails() {
   const param =  useParams();
   const userid = param.id;
    return (
        <div>
            <h1>User Details Component</h1>
            <p>This is the User Details component.</p>

            <h2>User ID: {userid}</h2>
        </div>
    );
}

export default UserDetails;