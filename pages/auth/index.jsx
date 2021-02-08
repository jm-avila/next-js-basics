import React from "react";
import User from "../../components/User";

const authIndexPage = () => (
    <div>
        <h1>The Auth Page</h1>
        <User 
            name="Jose"
            age={30}
        />
    </div>
);

export default authIndexPage;