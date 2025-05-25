import { FaUserGraduate } from "react-icons/fa";
import { FaSchool, FaUserTie, FaUserLock } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";

const dataforcount = [
    {
        id: 1,
        name: 'Internal Students',
        value: 10000,
        icon: FaUserGraduate,
    },
    {
        id: 2,
        name: 'External Students',
        value: 2000,
        icon: IoIosSchool,
    },
    {
        id: 3,
        name: 'Faculties',
        value: 9,
        icon: FaSchool,
    },
    {
        id: 4,
        name: 'Academic Staff',
        value: 500,
        icon: FaUserTie,
    },
    {
        id: 5,
        name: 'Administrative Staff',
        value: 1000,
        icon: FaUserLock,
    },
]

export { dataforcount }