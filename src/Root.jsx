import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Root = () => {
    return (
        <div>
            <div className=' w-11/12 mx-auto mt-10 '>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;