import React from "react";

const Navbar = () => {
    return (
        <div>
            <navbar>
                <div className="navbar navbar--vue">
                    <div className="container">
                    <div className="navbar__inner flex">
                        <h1 className="vue-color"> Générateur de Citations React</h1>
                        <nav>
                            <ul>
                                <li><a href="../../../vuejs/generator/dist/index.html">VanillaJS</a></li>
                                <li><a href="../../../../vue/generator/">Vuejs</a></li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                </div>
  </navbar>
            
        </div>
    )
}

export default Navbar
