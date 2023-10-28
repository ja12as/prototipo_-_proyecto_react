import { NavLink } from "react-router-dom";

export const Sidebars = () => {
    return (
        <>
            <h1 className="visually-hidden">Sidebars examples</h1>

            <div className=" col-2 d-flex flex-column flex-shrink-0 p-3 text-bg-dark" height=" 100%">
                <NavLink href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"><use href="#bootstrap"/></svg>
                    <span className="fs-4">Sidebar</span>
                </NavLink>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to='/' href="#" className="nav-link active" aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16"><use href="#home"/></svg>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16"><use href="#speedometer2"/></svg>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16"><use href="#table"/></svg>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16"><use href="#grid"/></svg>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/supplier' href="#" className="nav-link text-white">
                            <svg className="bi pe-none me-2" width="16" height="16"><use href="#people-circle"/></svg>
                            Supplier
                        </NavLink>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown">
                    <NavLink href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>mdo</strong>
                    </NavLink>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><NavLink className="dropdown-item" href="#">New project...</NavLink></li>
                        <li><NavLink className="dropdown-item" href="#">Settings</NavLink></li>
                        <li><NavLink className="dropdown-item" href="#">Profile</NavLink></li>
                        <li><NavLink className="dropdown-item" href="#">Sign out</NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="b-example-divider b-example-vr"></div>
        </>
    );
};
