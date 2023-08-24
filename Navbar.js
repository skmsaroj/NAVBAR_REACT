import React, { useState } from 'react';
import './nav.css';
function Nav(props) {

    const [nav, setNav] = useState(0);
    const [divwidth, setDivwidth] = useState("");

    function opennav() {
        if (nav === 0) {
            setDivwidth('100%');
            setNav(1)
        }else{
            setDivwidth('0px');
            setNav(0);
        }
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1> navbar </h1>

                <div style={{width:divwidth}}>
                    <button onClick={opennav}> click </button>
                    <ul>
                        <li>home</li>
                        <li>services</li>
                        <li>contact</li>
                        <li>home</li>
                    </ul>
                </div>

            </div>



        </>
    );
}

export default Nav;