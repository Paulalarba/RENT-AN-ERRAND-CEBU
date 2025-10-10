import React from "react";
import { NavLink } from "react-router-dom";

function NoMatch(){
    return(
        <>
        <div className="NoMatch align-items-center px-10 py-10">
            <a>Error 404! Page not found</a>
            <NavLink to="NavBar">
                <button type="Buttoon" className="nomatch"
                style={{
                    burder: "2px solid #420909"
                }}>
                    Return To Home
                </button>
            </NavLink>
        </div>
        </>
    );
};
export default NoMatch;