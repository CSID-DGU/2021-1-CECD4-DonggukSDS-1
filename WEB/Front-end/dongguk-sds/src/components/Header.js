import { useLocation } from 'react-router-dom';

function Header() {
    let location = useLocation();
    let headerName = location.pathname.split('/');
    return (
        <div className="flex flex-row w-full items-center px-7 py-4 justify-between">
            <p className="w-min text-xl font-bold text-gray-800">{headerName[1]}</p>
            <div className="flex flex-row items-center">
                <p className="text-sm font-medium">{localStorage.getItem('user')}</p>
                <img className="w-9 h-9 rounded-full items-end ml-3" alt="" src="/hedgehog.jpeg" />
            </div>
        </div>
    );
}

export default Header;