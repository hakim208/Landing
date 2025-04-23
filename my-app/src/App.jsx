import React, { useEffect } from 'react'

import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

import ImgNavbar from "./assets/IMAGE (64).png"
import ImgSec1 from "./assets/IMAGE (65).png"
import ImgSec2 from "./assets/IMAGE (66).png"
import ImgSec3 from "./assets/IMAGE (67).png"
import imgSec4 from "./assets/Frame (26).png"
import imgSec5 from "./assets/Frame (27).png"
import imgSec6 from "./assets/1.png"
import ImgSec4 from "./assets/IMAGE (69).png"
import ImgSec5 from "./assets/IMAGE (70).png"
import ImgSec6 from "./assets/IMAGE (71).png"
import ImgSec7 from "./assets/IMAGE (72).png"
import ImgSec8 from "./assets/IMAGE (73).png"
import ImgSec9 from "./assets/IMAGE (74).png"
import imgSec8 from "./assets/Frame (29).png"
import ImgSec10 from "./assets/IMAGE (75).png"

const App = () => {
    function handleClick() {
        if (localStorage.theme === "dark" || !("theme" in localStorage)) {
            //add class=dark in html element
            document.documentElement.classList.add("dark");
        } else {
            //remove class=dark in html element
            document.documentElement.classList.remove("dark");
        }

        if (localStorage.theme === "dark") {
            localStorage.theme = "light";
        } else {
            localStorage.theme = "dark";
        }
    }
    useEffect((() => {
        handleClick()
    }))
    return (
        <div className='max-w-[1900px] m-auto '>
            <div className='flex items-center w-[90%] m-auto justify-between mt-[20px] '>
                <img src={ImgNavbar} alt="" />
                <div className="hidden md:flex gap-[50px] ">
                    <p>all products</p>
                    <p>Solutions</p>
                    <p>ABOUT</p>
                    <p>Support</p>
                </div>
                <div className="flex items-center gap-[20px] ">
                    <SearchRoundedIcon />
                    <ShoppingCartRoundedIcon />
                    <BedtimeRoundedIcon onClick={handleClick} />
                </div>
            </div>
            <div className='flex-row text-black md:flex pt-[30px] p-[30px] bg-[#DCE5E2] w-[90%] m-auto rounded-[40px] mt-[50px] items-center justify-around'>
                <div className='flex flex-col items-start gap-[30px] '>
                    <p className=' text-[20px] md:text-[40px]  '>The new phones are <br /> here take a look.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est <br /> dui, aliquam, tempor. Faucibus morbi turpis.</p>
                    <button className='p-[10px] border-[1px] pl-[40px] pr-[40px] rounded-[50px] '>Explore</button>
                </div>
                <img className='w-[200px] ml-[50px] md:w-[600px]' src={ImgSec1} alt="" />
            </div>
            <p className='mt-[70px] text-center text-[40px] pr-[10px] mb-[30px] '>Shop our latest offers and categories</p>
            <p className='text-center pr-[25px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, <br /> tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className='w-[90%] m-auto mt-[50px] flex flex-row items-center '>
                <div>
                    <div className='shadow-xl w-[50%] rounded-[30px] p-[10px] '>
                        <img src={ImgSec2} alt="" />
                        <div className='text-end'>
                            <p>Laptops</p>
                            <p className='text-[25px] '>True Laptop <br /> Solution</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-[30px] shadow-xl justify-between w-[50%] '>
                        <img src={ImgSec3} alt="" />
                        <div className='text-end'>
                            <p>Watch</p>
                            <p className='text-[25px]'>Not just <br /> stylisht</p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img src={imgSec4} alt="" />
                    </div>
                    <div>
                        <img src={imgSec5} alt="" />
                    </div>
                </div>
            </div>
            <p className='mt-[70px] text-center text-[40px] pr-[10px] mb-[20px] '>Save on our most selled items.</p>
            <p className='text-center pr-[25px]' >Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            <div className='flex flex-col items-center md:flex-row justify-between w-[90%] m-auto mt-[40px] '>
                <div className='flex flex-col items-start gap-[20px]'>
                    <img src={imgSec6} alt="" />
                    <p>MacBook Pro 13</p>
                    <p>Neque porro quisquam est qui dolorem <br /> ipsum quia dolor sit amet</p>
                    <p>$ 1,200.00 USD</p>
                </div>
                <div className='flex flex-col items-start gap-[20px]'>
                    <img src={ImgSec4} alt="" />
                    <p>MacBook Pro 13</p>
                    <p>Neque porro quisquam est qui dolorem <br /> ipsum quia dolor sit amet</p>
                    <p>$ 1,200.00 USD</p>
                </div>
                <div className='flex flex-col items-start gap-[20px]'>
                    <img src={ImgSec5} alt="" />
                    <p>MacBook Pro 13</p>
                    <p>Neque porro quisquam est qui dolorem <br /> ipsum quia dolor sit amet</p>
                    <p>$ 1,200.00 USD</p>
                </div>
                <div className='flex flex-col items-start gap-[20px]'>
                    <img src={ImgSec6} alt="" />
                    <p>MacBook Pro 13</p>
                    <p>Neque porro quisquam est qui dolorem <br /> ipsum quia dolor sit amet</p>
                    <p>$ 1,200.00 USD</p>
                </div>
            </div>
            <p className='mt-[70px] text-center text-[40px] pr-[10px] mb-[20px] '>See the best around here</p>
            <p className='text-center pr-[25px]' >Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            <div className='flex flex-col text-black items-center gap-[40px] md:flex-row w-[90%] m-auto mt-[30px] justify-around '>
                <div className='flex flex-col gap-[20px] items-center rounded-[20px] bg-[#DCE5E2] pl-[30px] pr-[30px] p-[10px] '>
                    <p>Smart light bulb pack</p>
                    <p className='text-[20px] '>Latest and gratest</p>
                    <button>Explore</button>
                    <img src={ImgSec7} alt="" />
                </div>
                <div className='flex flex-col gap-[20px] items-center rounded-[20px] bg-[#DCE5E2]  pl-[30px] pr-[30px] p-[10px]'>
                    <p>Smart light bulb pack</p>
                    <p className='text-[20px] '>Latest and gratest</p>
                    <button>Explore</button>
                    <img src={ImgSec8} alt="" />
                </div>
                <div className='flex flex-col gap-[20px] items-center rounded-[20px] bg-[#DCE5E2] pl-[30px] pr-[30px] p-[10px] '>
                    <p>Smart light bulb pack</p>
                    <p className='text-[20px] '>Latest and gratest</p>
                    <button>Explore</button>
                    <img src={ImgSec9} alt="" />
                </div>
            </div>
            <p className='mt-[70px] text-center text-[40px] pr-[10px] mb-[20px] '>Ideas have a place here</p>
            <p className='text-center pr-[25px]' >Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            <div className='flex flex-col gap-[20px] items-center md:flex-row w-[90%] m-auto mt-[40px] '>
                <img src={imgSec8} alt="" />
                <div className='text-[15px] md:text-[28px] '>
                    <p>We Make It Easy To Find The Great Design Talent, <br /> Easier...</p>
                    <p>Road Design Handbook For The International Road...</p>
                    <p>The Best Kept Secrets About Creative People</p>
                    <p>We Make It Easy To Find The Great Design Talent, <br /> Easier...</p>
                </div>
            </div>
            <p className='text-center pr-[25px] mt-[30px] ' >See all</p>
            <p className='mt-[50px] text-center text-[40px] pr-[10px] mb-[20px] '>Looking for anything else?</p>
            <div className=' w-[300px] md:w-[700px] flex m-auto items-center gap-[20px] rounded-[40px] border-2 '>
                <SearchRoundedIcon />
                <input type="text" className='p-[5px] pr-[100px] rounded-[40px] text-gray-600 ' placeholder='Search keyword' />
            </div>
            <div className='w-[90%] m-auto md:w-[45%] mt-[30px] flex flex-wrap gap-[10px]'>
                <button className='rounded-[40px] border-2 p-[10px] pl-[30px] pr-[30px] '>iPhone</button>
                <button className='rounded-[40px] border-2 p-[10px] pl-[30px] pr-[30px] '>Charger</button>
                <button className='rounded-[40px] border-2 p-[10px] pl-[30px] pr-[30px] '>Gift</button>
                <button className='rounded-[40px] border-2 p-[10px] pl-[30px] pr-[30px] '>Google Pixel 3</button>
                <button className='rounded-[40px] border-2 p-[10px] pl-[30px] pr-[30px] '>Keyboard</button>
                <button className='rounded-[40px] border-2 p-[10px] pl-[30px] pr-[30px] '>13 Pro Max</button>
                <button className='rounded-[40px] border-2 p-[10px] pl-[30px] pr-[30px] '>iPhone 12 </button>
                <button className='rounded-[40px] border-2 p-[10px] pl-[30px] pr-[30px] '>Laptop</button>
                <button className='rounded-[40px] border-2 p-[10px] pl-[30px] pr-[30px] '>Mobile</button>
            </div>
            <div className='flex flex-col gap-[20px] bg-[#DCE5E2] items-center mt-[50px] w-[90%] p-[30px] rounded-[40px] text-black m-auto '>
                <p>Never miss a thing</p>
                <p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
                <img src={ImgSec10} alt="" />
                <div className='rounded-[50px] border-2 pl-[20px] '>
                    <input type="text" className='pr-[0px] md:pr-[100px]' placeholder='Your email' />
                    <button className='text-white bg-[#000000] p-[10px] rounded-br-[20px] rounded-r-2xl '>Sign up</button>
                </div>
            </div>
            <div className='flex flex-wrap gap-[20px] md:flex-row text-gray-600 bg-[#F8F9FA] p-[20px] pl-[40px] pr-[40px] justify-around '>
                <div className='flex flex-col gap-[20px] items-start '>
                    <img src={ImgNavbar} alt="" />
                    <p>Sign up for texts to be notified about <br /> our best offers on the perfect gifts.</p>
                </div>
                <div className='flex flex-col gap-[20px] items-start '>
                    <p className='text-[20px] text-black '>All products</p>
                    <p>Phones</p>
                    <p>Watch</p>
                    <p>Tablet</p>
                    <p>Laptops</p>
                </div>
                <div className='flex flex-col gap-[20px] items-start '>
                    <p className='text-[20px] text-black '>Company  </p>
                    <p>About</p>
                    <p>Support</p>
                </div>
                <div className='flex flex-col gap-[20px] items-start '>
                    <p className='text-[20px] text-black '>Support    </p>
                    <p>Style Guide</p>
                    <p>Licensing</p>
                    <p>Change Log</p>
                    <p>Contact</p>
                </div>
                <div className='flex flex-col gap-[20px] items-start '>
                    <p className='text-[20px] text-black '>Follow Us</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>LinkedIn</p>
                    <p>Youtube</p>
                </div>
            </div>
        </div>
    )
}
export default App
