import { Link, useLocation } from 'react-router-dom';

const NavItems = ({ setMenu }) => {
    const location = useLocation();
    
    const menuItems = [
        { name: 'Shop', path: '' },
        { name: 'Men', path: 'mens' },
        { name: 'Women', path: 'womens' },
        { name: 'Kids', path: 'kids' },
    ];

    const currentPath = location.pathname.replace('/', '');
    const activeMenu = menuItems.find(item => item.path === currentPath)?.name;

    return (
        <ul className="menu">
            {menuItems.map(({ name, path }) => (
                <li key={name} className="menu-item">
                    <Link to={`/${path}`} onClick={() => setMenu(name)}>
                        {name}
                    </Link>
                    {activeMenu === name && <hr className='bottom-line' />}
                </li>
            ))}
        </ul>
    );
};

export default NavItems;
