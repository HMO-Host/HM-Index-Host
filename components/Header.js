import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = (props) => (
    <header id="header" className="alt">
        <Link href="/">
            <a className="logo"><strong>Hikari</strong> <span>Mind</span></a>
        </Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">菜单 / Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
