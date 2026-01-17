import './header.css'
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';

const Header = () => {

    const [searchCountry, setSearchCountry] = useState('');

    const [countryDropDownOpen, setCountryDropDown] = useState(false);

    const openCountryDropDown = () => {
        setCountryDropDown(!countryDropDownOpen)
    };

    const searchCountryHandler = (e) => {
        const value = e.target.value;
        setSearchCountry(value);

        const filtered = countries.filter(country =>
            country.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredCountries(filtered);
    };





    return (
        <section className='header_section py-2 text-sm'>
            <div className="container ">
                <div className="topHeader flex  justify-between">
                    <div className="logo">
                        <img src="./logo.jpg" alt="Logo Image" width={150} />
                    </div>

                    <div className="search border border-gray-300 w-[40%] flex items-center justify-between  px-3 py-2 rounded">
                        <form action="" className='w-full'>
                            <input type="text"
                                placeholder='Search for items...'
                                className='w-full outline-none'

                            />

                        </form>
                        <span>
                            <CiSearch size={20} />
                        </span>
                    </div>
                    <div className="header_middle w-[10%]">
                        <div className='border w-full border-gray-300 flex items-center justify-between  px-3 py-2 rounded relative'>
                            <div className='flex items-center gap-1'>
                                <IoLocationOutline size={20} />
                                All
                            </div>

                            <span>
                                <IoIosArrowDown size={20} onClick={openCountryDropDown} className='cursor-pointer' />
                            </span>
                            {countryDropDownOpen ?
                                <div className='absolute country_dropdown top-full overflow-y-scroll  left-0 bg-white border border-gray-100 shadow-lg w-full p-2 h-50'>
                                    <form action="" className='w-full'>
                                        <input type="search" onChange={searchCountryHandler} value={searchCountry} placeholder='search...' className='bg-gray-200 p-1 border w-full' />

                                        <ul className='mt-3 text-[13px]'>
                                            {countries.map((country, index) => (
                                                <li className='transition duration-200 py-1 px-2 rounded cursor-pointer' key={index} value={country}>
                                                    {country}
                                                </li>
                                            ))}
                                        </ul>
                                    </form>
                                </div> : null}
                        </div>
                    </div>
                    <div className="header_right  items-center justify-between gap-5  ">


                        <div className='flex items-center justify-end gap-6 '>
                            <div className="wishlist flex  items-center gap-1 relative">
                                <CiHeart size={25} />
                                Wishlist
                                <span className='absolute -top-1 -left-1 w-5 h-5 rounded-full p-2 flex justify-center items-center text-[12px]'>0</span>
                            </div>

                            <div className="shopping_cart flex items-center gap-1 relative">
                                <IoCartOutline size={25} />
                                Cart
                                <span className='absolute -top-1 -left-1 w-5 h-5 rounded-full p-2 flex justify-center items-center text-[12px]'>0</span>
                            </div>

                            <div className="sign_in">
                                <button className='rounded px-3 py-2'>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "DR Congo",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of the Congo",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

export default Header