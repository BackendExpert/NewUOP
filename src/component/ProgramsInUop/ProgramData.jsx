import shortcourse from '../../assets/workshop.jpg'
import certificate from '../../assets/certificates.jpg'
import degree from '../../assets/degrees.jpg'
import PGAI from '../../assets/PGIA.jpg'
import PGIS from '../../assets/PGIS.jpg'
import PGIHS from '../../assets/PGIHS.jpg'
import PGIMS from '../../assets/medicine.jpg'
import AHS from '../../assets/AHS.jpg'
import VETERNERY from '../../assets/VET.jpg'
import MANAGEMENT from '../../assets/MANAGEMENT.jpg'
import ENGINEERING from '../../assets/ENGINEERING.jpg'
import dental2 from '../../assets/dental2.jpg'


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
                link: '#'
            },
            {
                id: 2,
                name: 'Diploma Programmes',
                img: 'https://wallpapercave.com/wp/wp8722693.jpg',
                link: '#'
            },
            {
                id: 3,
                name: 'Certificate Programmes',
                img: certificate,
                link: '#'
            },
            {
                id: 4,
                name: 'Short Courses & Workshops',
                img: shortcourse,
                link: '#'
            },
        ]
    },
    {
        id: 2,
        name: 'Postgraduate Programmes',
        desc: 'Postgraduate Programmes of University of Peradeniya',
        link: '#',
        courses: [
            {
                id: 1,
                name: 'Postgraduate Institute of Agriculture (PGIA)',
                img: PGAI,
                link: '#',
            },
            {
                id: 2,
                name: 'Postgraduate Institute of Science (PGIS)',
                img: PGIS,
                link: '#',
            },
            {
                id: 3,
                name: 'Postgraduate Institute of Humanities and Social Sciences (PGIHS)',
                img: PGIHS,
                link: '#',
            },
            {
                id: 4,
                name: 'Postgraduate Institute of Medical Science (PGIMS)',
                img: PGIMS,
                link: '#',
            },
            {
                id: 5,
                name: "Postgraduate Programmes in Faculty of Allied Health Sciences",
                img: AHS,
                link: '#',
            },
            {
                id: 6,
                name: 'Postgraduate Programmes in Faculty of Dental Sciences',
                img: dental2,
                link: '#',
            },
            {
                id: 7,
                name: 'Postgraduate Programmes in Faculty of Engineering',
                img: ENGINEERING,
                link: '#',
            },
            {
                id: 8,
                name: 'Postgraduate Programmes in Faculty of Management',
                img: MANAGEMENT,
                link: '#',
            },
            {
                id: 9,
                name: 'Postgraduate Programmes in Faculty of Veterinary Medicine and Animal Science',
                img: VETERNERY,
                link: '#',
            }
        ]
    },

]

export { programData }