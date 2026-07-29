import { Outlet, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import './Layout.css'

const Layout = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="app">
        <header className="navbar">
            <div className="navbar-brand">
            <span className="brand-name">K'lliao</span>
            <span className="brand-sub">POS</span>
            </div>

            <nav className="navbar-nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Sales
            </NavLink>
            <NavLink to="/inventory" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Inventory
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Products
            </NavLink>
            </nav>

            <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </header>

        <main className="main-content">
            <Outlet />
        </main>
        </div>
    )
}

export default Layout