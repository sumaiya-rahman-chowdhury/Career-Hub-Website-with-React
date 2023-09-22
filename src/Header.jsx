import { NavLink } from 'react-router-dom';
import './Style.css'
const Header = () => {
    return (
        <div className=''>
            <nav className=' flex justify-between lg:flex-row flex-col gap-y-3 mb-10 items-center'>
                {/* logo */}
                <div>
                <h3 className=' text-[30px] font-[800]'>CareerHub</h3>
                </div>
                {/* nav tabs */}
                <div className=' space-x-4 '>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    <NavLink to='/appliedJobs'>Applied Jobs</NavLink>
                    <NavLink to='/blogs'>Blog</NavLink>
                </div>
                {/* button */}
                <div>
                    <button className='main-btn lg:px-[28px] py-[19px] bg-amber-400 w-full'>Star Applying</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;