import React from "react";
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineStock } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";

export const links = [
    {
        title: "Dashboard",
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 24.00 24.00"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#cccccc"
                transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#fff"
                    stroke-width="4.8"
                >
                    <path
                        d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        opacity="0.5"
                        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                        stroke="#fff"
                        stroke-width="1.5"
                    ></path>
                </g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z"
                        stroke="#fff"
                        stroke-width="1.248"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        opacity="0.5"
                        d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                        stroke="#fff"
                        stroke-width="1.248"
                    ></path>
                </g>
            </svg>
        ),
    },

    {
        title: "Product",
        icon: (
            <svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                    <path d="m2 9v-2c0-3 2-5 5-5h10c3 0 5 2 5 5v2" stroke-miterlimit="10" />
                    <path d="m2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2" stroke-miterlimit="10" />
                    <path d="m6.69995 9.26001 5.30005 3.06999 5.2599-3.04997" />
                    <path d="m12 17.7701v-5.45" />
                    <path d="m10.76 6.29006-3.20002 1.78003c-.72.4-1.31999 1.40999-1.31999 2.24001v3.39c0 .83.58999 1.84 1.31999 2.24l3.20002 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.39c0-.83002-.59-1.84001-1.32-2.24001l-3.2-1.78003c-.69-.39-1.81-.39-2.49 0z" />
                </g>
            </svg>
        ),
    },
    {
        title: "Customers",
        icon: (
            <svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                    <path d="m18.14 21.62c-.88.26-1.92.38-3.14.38h-6.00002c-1.22 0-2.25999-.12-3.13999-.38.22-2.6 2.88999-4.65 6.14001-4.65 3.25 0 5.92 2.05 6.14 4.65z" />
                    <path d="m15 2h-6c-5 0-7 2-7 7v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65s5.92 2.05 6.14 4.65c2.72-.77 3.86-2.84 3.86-6.62v-6c0-5-2-7-7-7zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59 0-1.97998 1.6-3.58 3.58-3.58s3.58 1.60002 3.58 3.58c0 1.98-1.6 3.59-3.58 3.59z" />
                    <path d="m15.58 10.58c0 1.98-1.6 3.59-3.58 3.59s-3.57996-1.61-3.57996-3.59c0-1.97998 1.59996-3.58 3.57996-3.58s3.58 1.60002 3.58 3.58z" />
                </g>
            </svg>
        ),
    },
    {
        title: "Income",
        icon: (
            <svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                <g fill="#fff">
                    <path d="m7.1698 22.7501c-2.38 0-4.32996-1.73-4.32996-3.86v-2.04c0-.41.34-.75.75-.75s.75.34.75.75c0 1.25 1.20996 2.19 2.82996 2.19s2.83002-.94 2.83002-2.19c0-.41.33998-.75.74998-.75s.75.34.75.75v2.04c0 2.13-1.94 3.86-4.33 3.86zm-2.57001-2.88c.44.82 1.43001 1.38 2.57001 1.38s2.13001-.57 2.57001-1.38c-.71.43-1.59001.68-2.57001.68s-1.86001-.25-2.57001-.68z" />
                    <path d="m7.1698 17.7999c-1.64 0-3.10997-.75-3.83997-1.94-.32-.52-.48999-1.13-.48999-1.75 0-1.05.45999-2.03 1.29999-2.76 1.62-1.41998 4.40998-1.41993 6.03997-.0099.84.74 1.31 1.7199 1.31 2.7699 0 .62-.17 1.23-.49 1.75-.72 1.19-2.19 1.94-3.83 1.94zm0-6.05c-.78 0-1.49998.26-2.03998.73-.51.44-.78998 1.02-.78998 1.63 0 .35.08996.6701.26996.9701.46.76 1.44 1.2299 2.56 1.2299s2.09999-.4699 2.54999-1.2199c.18-.29.27002-.6201.27002-.9701 0-.61-.27998-1.19-.78998-1.64-.53-.47-1.25003-.73-2.03003-.73z" />
                    <path d="m7.1698 20.55c-2.47 0-4.32996-1.59-4.32996-3.69v-2.75c0-2.13 1.93996-3.86 4.32996-3.86 1.13 0 2.21002.39 3.02 1.09.84.74 1.31 1.72 1.31 2.77v2.75c0 2.1-1.86 3.69-4.33 3.69zm0-8.8c-1.56 0-2.82996 1.06-2.82996 2.36v2.75c0 1.25 1.20996 2.19 2.82996 2.19s2.83002-.94 2.83002-2.19v-2.75c0-.61-.27998-1.19-.78998-1.64-.54-.46-1.26004-.72-2.04004-.72z" />
                    <path d="m19.0399 14.8002c-1.51 0-2.79-1.12-2.91-2.56-.08-.83.22-1.64.82-2.23.5-.52001 1.21-.81 1.96-.81h2.09c.99.03 1.75.81 1.75 1.77v2.06c0 .96-.76 1.74-1.72 1.77zm1.93-4.1h-2.05c-.35 0-.67.13-.9.37-.29.28-.43.66-.39 1.04.05.66.69 1.19 1.41 1.19h1.96c.13 0 .25-.12.25-.27v-2.06c0-.15-.12-.26-.28-.27z" />
                    <path d="m16.0002 21.25h-2.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.58 0 4.25-1.67 4.25-4.25v-.7h-1.21c-1.51 0-2.79-1.12-2.91-2.56-.08-.83.2201-1.64.8201-2.23.5-.51999 1.2099-.80999 1.9599-.80999h1.33v-.70001c0-2.34-1.3699-3.95002-3.5899-4.21002-.24-.04-.4501-.03998-.6601-.03998h-8.99997c-.24 0-.47001.01999-.70001.04999-2.2.28-3.54999 1.88001-3.54999 4.20001v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-3.08 1.90004-5.30999 4.85004-5.67999.27-.04.57996-.07001.89996-.07001h8.99997c.24 0 .55.01.87.06 2.95.34 4.88 2.58 4.88 5.69v1.45001c0 .40999-.34.74999-.75.74999h-2.08c-.35 0-.6699.13-.8999.37-.29.28-.4301.66-.3901 1.04.05.66.6901 1.19 1.4101 1.19h1.9699c.41 0 .75.34.75.75v1.45c0 3.44-2.31 5.75-5.75 5.75z" />
                </g>
            </svg>
        ),
    },
    {
        title: "Promote",
        icon: (
            <svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m11.235 3.10898c.4516-.34531 1.0784-.34531 1.53 0l.5012-.65546-.5012.65546 1.59 1.21606c.4101.31359.895.51447 1.4067.58267l1.9843.26448c.5634.07511 1.0067.51837 1.0818 1.08181l.2645 1.98425c.0682.5117.2691.99665.5827 1.4067l1.216 1.59005c.3453.4516.3453 1.0784 0 1.53l-1.216 1.59c-.3136.4101-.5145.8951-.5827 1.4067l-.2645 1.9843c-.0751.5634-.5184 1.0067-1.0818 1.0818l-1.9843.2645c-.5116.0682-.9966.2691-1.4067.5827l-1.59 1.216c-.4516.3453-1.0784.3453-1.53 0l-1.59005-1.216c-.41005-.3136-.895-.5145-1.4067-.5827l-1.98424-.2645c-.56345-.0751-1.00671-.5184-1.08182-1.0818l-.26448-1.9843c-.0682-.5116-.26908-.9966-.58267-1.4067l-1.21606-1.59c-.34531-.4516-.34531-1.0784 0-1.53l1.21606-1.59005c.31359-.41005.51447-.895.58267-1.4067l.26448-1.98424c.07511-.56345.51837-1.00671 1.08182-1.08182l1.98424-.26448c.5117-.0682.99665-.26908 1.4067-.58267z"
                    stroke="#fff"
                    stroke-width="1.7"
                />
                <path d="m14.1092 9.89075-4.21845 4.21845" stroke="#fff" stroke-linecap="round" stroke-width="1.7" />
                <g fill="#fff">
                    <circle cx="9.89079" cy="9.89079" r="1.05461" />
                    <circle cx="14.1092" cy="14.1092" r="1.05461" />
                </g>
            </svg>
        ),
    },
    {
        title: "Help",
        icon: (
            <svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                <g fill="#fff">
                    <path d="m8 22.3199c-.28 0-.57002-.07-.83002-.21-.57-.3-.91998-.9-.91998-1.54v-1.4199c-3.02-.31-5-2.5301-5-5.7101v-5.99996c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v5.99996c0 3.44-2.31 5.75-5.75 5.75h-3.77l-4.26003 2.8401c-.29.19-.62997.2899-.96997.2899zm-1-19.13997c-2.58 0-4.25 1.67-4.25 4.25v6.00007c0 2.58 1.67 4.25 4.25 4.25.41 0 .75.34.75.75v2.13c0 .13.08.19.13.22.05001.03.15001.06.26001-.01l4.44999-2.96c.12-.08.27-.13.42-.13h4c2.58 0 4.25-1.67 4.25-4.25v-6.00007c0-2.58-1.67-4.25-4.25-4.25z" />
                    <path d="m11.9998 12.1099c-.41 0-.75-.34-.75-.75v-.21c0-1.16.85-1.73001 1.17-1.95001.37-.25.49-.41999.49-.67999 0-.5-.41-.91004-.91-.91004s-.91.41004-.91.91004c0 .41-.34.75-.75.75-.40996 0-.74996-.34-.74996-.75 0-1.33 1.07996-2.41004 2.40996-2.41004s2.41 1.08004 2.41 2.41004c0 1.14-.84 1.71-1.15 1.92-.39.26-.51.43-.51.71v.21c0 .42-.34.75-.75.75z" />
                    <path d="m12 14.6001c-.42 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.33.75-.75.75z" />
                </g>
            </svg>
        ),
    },
];
