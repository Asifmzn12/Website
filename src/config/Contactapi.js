import { MdOutlinePlace } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import {FaRegEnvelope } from "react-icons/fa6";
import { LuClock } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
 const contactApi = [
    {
        id: 1,
        icons: MdOutlinePlace,
        title:"Address",
        content: "Abul Fazal Enclave",
        content2: "Jamia Nagar South Delhi"




    },
    {
        id: 2,
        icons: CiPhone,
        title:"Contact ",
        content: "+91-8868873958",
        content2: "+91-9756680778"


    },
    {
        id: 3,
        icons: FaRegEnvelope,
        title:"Email",
        content: "Asifmzn13@gmail.com",
        content2: "Example@gmail.com"

    },
    {
        id: 4,
        icons: LuClock,
        title:"Open Hours",
        content: "Mon-Fri",
        content2: "8:00AM - 8:00PM"

    }
]

 const socialIcons=[

{
    id:1,
    icons:LuFacebook
},
{
    id:2,
    icons:FaInstagram
},
{
    id:3,
    icons:FaXTwitter
},
{
    id:4,
    icons:SlSocialLinkedin
},


]

export {contactApi,socialIcons}