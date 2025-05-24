import shortcourse from '../../assets/scw.jpg'
import certificate from '../../assets/cert4.jpg'
import degree from '../../assets/external.jpg'
import diploma from '../../assets/pg/diploma4.png'
import PGAI from '../../assets/pg/pgia.jpg'
import PGIS from '../../assets/pg/pgis.jpg'
import PGIHS from '../../assets/pg/pgihs.jpg'
import PGIMS from '../../assets/pg/pgims1.png'
import AHS from '../../assets/pg/ahs.jpg'
import VETERNERY from '../../assets/pg/veternery.png'
import MANAGEMENT from '../../assets/pg/mgt1.jpg'
import ENGINEERING from '../../assets/pg/eng.jpg'
import dental2 from '../../assets/pg/dental.jpg'


const programData = [
    {
        id: 1,
        name: 'Undergraduate Programmes & Other Courses.',
        desc: 'The University of Peradeniya is the pioneering institution that initiated offering external degrees in the country since 1964.',
        link: '#',
        courses: [
            {
                id: 1,
                name: 'External-Degree Programmes',
                img: degree,
                link:'https://cdce.pdn.ac.lk/Deg.php'
            },
            {
                id: 2,
                name: 'Diploma Programmes',
                img: diploma,
                link: '/diplomas'
            },
            {
                id: 3,
                name: 'Certificate Programmes',
                img: certificate,
                link: '/certificates'
            },
            {
                id: 4,
                name: 'Short Courses & Workshops',
                img: shortcourse,
                link: 'https://cdce.pdn.ac.lk/short-courses.php'
            },
        ]
    },
    {
        id: 2,
        name: 'Postgraduate Programmes',
        desc: 'The University of Peradeniya offers over 100 postgraduate programmes, including Master\'s, M.Phil., and Ph.D. degrees across diverse fields, fostering research excellence.',
        link: '#',
        courses: [
            {
                id: 1,
                name: 'Postgraduate Institute of Agriculture (PGIA)',
                img: PGAI,
                link: 'http://www.pgia.pdn.ac.lk/',
            },
            {
                id: 2,
                name: 'Postgraduate Institute of Science (PGIS)',
                img: PGIS,
                link: 'http://www.pgis.pdn.ac.lk/',
            },
            {
                id: 3,
                name: 'Postgraduate Institute of Humanities and Social Sciences (PGIHS)',
                img: PGIHS,
                link: 'https://web.pgihs.ac.lk/',
            },
            {
                id: 4,
                name: 'Postgraduate Institute of Medical Science (PGIMS)',
                img: PGIMS,
                link: 'https://pgims.pdn.ac.lk/',
            },
            {
                id: 5,
                name: "Postgraduate Programmes in Faculty of Allied Health Sciences",
                img: AHS,
                link: 'https://ahs.pdn.ac.lk/higherStudies',
            },
            {
                id: 6,
                name: 'Postgraduate Programmes in Faculty of Dental Sciences',
                img: dental2,
                link: 'https://dental.pdn.ac.lk/post_pro.php',
            },
            {
                id: 7,
                name: 'Postgraduate Programmes in Faculty of Engineering',
                img: ENGINEERING,
                link: 'https://eng.pdn.ac.lk/postgraduate-programmes/',
            },
            {
                id: 8,
                name: 'Postgraduate Programmes in Faculty of Management',
                img: MANAGEMENT,
                link: 'https://mgt.pdn.ac.lk/postgraduate_unit/',
            },
            {
                id: 9,
                name: 'Postgraduate Programmes in Faculty of Veterinary Medicine and Animal Science',
                img: VETERNERY,
                link: 'https://vet.pdn.ac.lk/vpeu/courses.php',
            }
        ]
    },

]

export { programData }