import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
function Sidebar() {
    return (
        <nav className="h-screen w-min bg-gray-800 text-gray-400 text-base">
            <div className="p-6 items-center text-white">
                Dongguk Smart Campus
            </div>
            <ul>
                { SidebarData.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={item.path} key={index} activeClassName="bg-gray-700 text-white" className="flex flex-row pl-8 pr-24 py-5 items-center hover:bg-gray-700">
                                {item.icon}
                                <span className="pl-6">{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
  }
  
  export default Sidebar;
  