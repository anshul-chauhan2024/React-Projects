import "../App.css"
import images from '../assets/images/index.js'

import MenuIcon from '@mui/icons-material/Menu';


document.addEventListener('scroll', function () {
    const navScroll = document.querySelector('#header');
    if (window.scrollY > 100) {
        navScroll.style.background = ' rgba(0, 67, 139, 1)';
        navScroll.style.transition = 'all 0.5s ease';
        navScroll.style.paddingBlock = '10px';
    } else {
        navScroll.style.background = 'transparent';
        navScroll.style.paddingBlock = '0';

    }
});

function NavBar() {

    

        return (
            <>
                <header id="header">
                    <nav className="navBar grid grid-cols-2 items-center gap-20">
                        <div className="navLogo">
                            <img src={images.logo} alt="" />
                        </div>
                        <div className="navLinks">
                            <a href="#" className="active">Home</a>
                            <a href="#">About</a>
                            <a href="#">Service</a>
                            <a href="#">Pricing</a>
                            <a href="#">Contact</a>
                        </div>

                        <div className="hamburger text-right">
                            <MenuIcon className="text-xl" />

                            <div className="navLinks2">
                                <a href="#" className="active">Home</a>
                                <a href="#">About</a>
                                <a href="#">Service</a>
                                <a href="#">Pricing</a>
                                <a href="#">Contact</a>
                            </div>
                        </div>
                    </nav>


                </header>
            </>
        )
    }
    export default NavBar