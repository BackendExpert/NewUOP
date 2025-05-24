import { FaBook, FaUniversity, FaBookReader } from "react-icons/fa";
import { FaFaceGrimace, FaSchoolFlag } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";


const researchstats = [
    {
        id: 1,
        name: 'Journals',
        icon: FaBook,
        link: 'https://www.pdn.ac.lk/journals/'
    },
    {
        id: 2,
        name: 'iPURSE',
        icon: FaBook,
        link: 'https://www.pdn.ac.lk/ipurse/'
    },
    {
        id: 3,
        name: 'University Research Council',
        icon: FaUniversity,
        link: 'https://site.pdn.ac.lk/centers/urc/'
    },
    {
        id: 4,
        name: 'Center for Research in Oral Cancer',
        icon: FaFaceGrimace,
        link: 'https://site.pdn.ac.lk/centers/croc/'
    },
    {
        id: 5,
        name: 'International Relations Office',
        icon: BsGlobe,
        link: 'https://inro.pdn.ac.lk/index.php'
    },
    {
        id: 6,
        name: 'Multidisciplinary Research Centre (MDRC)',
        icon: FaSchoolFlag,
        link: 'https://www.pdn.ac.lk/wp-content/uploads/2024/04/Multidisciplinary-Reseaech-center.pdf'
    },
    {
        id: 7,
        name: 'Research Publications',
        icon: FaBookReader,
        link: 'https://www.pdn.ac.lk/students/research-publications-2/'
    },
]

export  { researchstats }