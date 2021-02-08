import React from "react";
import User from "../../components/User";

const authIndexPage = ({ isAdmin }) => (
    <div>
        <h1>The Auth Page</h1>
        <User 
            name="Jose"
            age={30}
        />
        {
            isAdmin && (<p>You are admin.</p>)
        }
    </div>
);

authIndexPage.getInitialProps = async (context) => {
    return {isAdmin: true};
}

export default authIndexPage;