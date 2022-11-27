import {NavLink, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div className="App">
            <header>
                <NavLink end to="/">
                    To main
                </NavLink>
                <NavLink to="/users">
                    To users
                </NavLink>
                <NavLink to="/albums">
                    To albums
                </NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </div>

    )
}