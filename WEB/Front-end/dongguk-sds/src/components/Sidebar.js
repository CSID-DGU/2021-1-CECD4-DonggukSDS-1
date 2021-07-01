import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
function Sidebar() {
    return (
        <nav className="h-screen w-min bg-gray-800 text-gray-400 text-base">
            <div className="p-5 items-center text-white">
                서비스명 들어갈 자리
            </div>
            <ul>
                { SidebarData.map((item, index) => {
                    return (
                        <li>
                            <NavLink to={item.path} key={index} activeClassName="bg-gray-700 text-white" className="flex flex-row px-8 py-5 items-center hover:bg-gray-700">
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
  