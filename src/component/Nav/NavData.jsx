const MainNavData = [
    {
        id: 1,
        name: 'Directory',
        link: 'https://site.pdn.ac.lk/directory.php',
    },
    {
        id: 2,
        name: 'WebMail',
        link: 'https://webmail.pdn.ac.lk/',
    },
    {
        id: 3,
        name: 'Login',
        link: '#',
    },
    {
        id: 4,
        name: 'Emergency',
        link: 'https://www.pdn.ac.lk/emergency/',
    },
    {
        id: 5,
        name: 'IT Services',
        link: 'https://eng.pdn.ac.lk/cc/',
    },
    {
        id: 6,
        name: 'FAQ',
        link: '/faq',
    },

]

const secNavData = [
    // About
    {
        id: 1,
        name: 'About',
        submenu: [
            {
                id: 1,
                name: 'The University',
                menusubL: [
                    { id: 1, link: 'https://www.pdn.ac.lk/about-2/', name: 'History & Heritage' },
                    { id: 2, link: 'https://www.pdn.ac.lk/university-crest/', name: 'University Crest' },
                    { id: 3, link: 'https://www.pdn.ac.lk/vision-and-mission/', name: 'Vision & Mission' },
                    { id: 4, link: 'https://www.pdn.ac.lk/university-organization/', name: 'University Orgnization' },
                    { id: 5, link: 'https://www.pdn.ac.lk/rankings/', name: 'University Ranking' },
                    { id: 6, link: 'https://www.pdn.ac.lk/convocations/', name: 'General Convocation' },
                    { id: 7, link: 'https://www.pdn.ac.lk/calendardates/', name: 'University Calendar Dates' },
                    { id: 8, link: 'https://www.pdn.ac.lk/information-officers/', name: 'Information Officers' },
                ]
            },
            {
                id: 2,
                name: 'Leadership & Governance',
                menusubL: [
                    { id: 1, link: 'https://www.pdn.ac.lk/university-organization/', name: 'University Organization' },
                    { id: 2, link: 'https://www.pdn.ac.lk/officers/', name: 'Officers' },
                    { id: 3, link: 'https://www.pdn.ac.lk/council/', name: 'Council' },
                    { id: 4, link: 'https://www.pdn.ac.lk/senate/', name: 'Senate' },
                    { id: 5, link: '', name: 'Chancellor' },
                    { id: 6, link: 'https://www.pdn.ac.lk/vice-chancellor/', name: 'Vice-Chancellor' },
                    { id: 7, link: 'https://www.pdn.ac.lk/deputy-vice-chancellor-2/', name: 'Deputy Vice-Chancellor' },
                    { id: 8, link: 'https://www.pdn.ac.lk/deans/', name: 'Deans of the Faculties' },
                    { id: 9, link: 'https://www.pdn.ac.lk/librarian/', name: 'Librarian' },
                    { id: 10, link: 'https://www.pdn.ac.lk/registrar/', name: 'Registrar' },
                    { id: 11, link: 'https://www.pdn.ac.lk/bursar/', name: 'Bursar' },
                ]
            },
            {
                id: 3,
                name: 'Past Leaders',
                menusubL: [
                    { id: 1, link: 'https://www.pdn.ac.lk/past-chancellors/', name: 'Past Chancellors' },
                    { id: 2, link: 'https://www.pdn.ac.lk/past-vice-chancellors/', name: 'Past Vice-Chancellors' },
                ]
            },
            {
                id: 4,
                name: 'Sustainability',
                link: 'https://sites.google.com/sci.pdn.ac.lk/sustainabilityatuop/home?authuser=0',
                menusubL: [
                    { id: 1, link: 'https://sites.google.com/gs.pdn.ac.lk/cqa/downloads/council-approved-policies', name: 'Policies' },
                    { id: 2, link: 'https://inro.pdn.ac.lk/index.php', name: 'International Collaborations' },
                ]
            },
        ]
    },

    // Academic

    {
        id: 2,
        name: 'Academic',
        submenu: [
            {
                id: 1,
                name: 'Admission',
                menusubL: [
                    { id: 1, link: 'https://www.pdn.ac.lk/academics__trashed/university-admissions/', name: 'Undergraduate Admissions' },
                    { id: 2, link: 'https://www.pdn.ac.lk/home/postgraduate-admissions/', name: 'Postgraduate Admissions' },
                ]
            },
            {
                id: 2,
                name: 'Faculties',
                menusubL: [
                    { id: 1, link: 'https://agri.pdn.ac.lk/', name: 'Faculty of Agriculture' },
                    { id: 2, link: 'https://ahs.pdn.ac.lk/', name: 'Faculty of Allied Health Sciences' },
                    { id: 3, link: 'https://arts.pdn.ac.lk/', name: 'Faculty of Arts' },
                    { id: 4, link: 'https://dental.pdn.ac.lk/', name: 'Faculty of Dental Sciences' },
                    { id: 5, link: 'https://eng.pdn.ac.lk/', name: 'Faculty of Engineering' },
                    { id: 6, link: 'https://mgt.pdn.ac.lk/', name: 'Faculty of Management' },
                    { id: 7, link: 'https://med.pdn.ac.lk/', name: 'Faculty of Medicine' },
                    { id: 8, link: 'https://sci.pdn.ac.lk/', name: 'Faculty of Science' },
                    { id: 9, link: 'https://vet.pdn.ac.lk/', name: 'Faculty of Veterinary Medicine & Ani' },
                ]
            },
            {
                id: 3,
                name: 'Postgraduate Institutes',
                menusubL: [
                    { id: 1, link: 'http://www.pgia.pdn.ac.lk/', name: 'Postgraduate Institute of Agriculture (PGIA)' },
                    { id: 2, link: 'http://www.pgihs.pdn.ac.lk/', name: 'Postgraduate Institute of Humanities and Social Sciences (PGIHS)' },
                    { id: 3, link: 'https://pgims.pdn.ac.lk/', name: 'Postgraduate Institute of Medical Sciences (PGIMS)' },
                    { id: 4, link: 'http://www.pgis.pdn.ac.lk/', name: 'Postgraduate Institute of Science (PGIS)' },
                ]
            },
            {
                id: 4,
                name: 'Centre for Distance and Continuing Education',
                link: 'https://cdce.pdn.ac.lk/'
            },
            {
                id: 5,
                name: 'Studentships',
                link: 'https://www.pdn.ac.lk/studentships/'
            },
            {
                id: 6,
                name: 'Library',
                link: 'http://www.lib.pdn.ac.lk/'
            },
            {
                id: 7,
                name: 'Scholarships',
                menusubL: [
                    { id: 1, link: 'https://www.pdn.ac.lk/scholarships-2/', name: 'Academic Awards & Prizes' }
                ]
            },
        ]
    },



    // Students

    {
        id: 3,
        name: 'Students',
        submenu: [
            { id: 1, name: 'Student Accomodation', link: 'https://sites.google.com/gs.pdn.ac.lk/stdaccdiv' },
            { id: 2, name: 'Student Admission', link: 'https://www.pdn.ac.lk/students/student-admission/' },
            { id: 3, name: 'Student Societies', link: '/Societies' },
            { id: 4, name: 'Sports Facilities', link: 'https://sites.google.com/gs.pdn.ac.lk/phyedu' },
            { id: 5, name: 'Cultural Activities', link: 'https://www.pdn.ac.lk/cultural-activities/' },
            { id: 6, name: 'Health Centre', link: 'https://sites.google.com/gs.pdn.ac.lk/healthc' },
            { id: 7, name: 'Student Services', link: 'https://sites.google.com/gs.pdn.ac.lk/stdserdiv' },
            { id: 8, name: 'Counselling & Psychological Support', link: 'https://site.pdn.ac.lk/centers/capsu/' },
            { id: 9, name: 'Religious Activities', link: 'https://www.pdn.ac.lk/religious-activities/' },
            { id: 10, name: 'Student Discipline', link: '#' },
        ]
    },

    // Publications

    {
        id: 4,
        name: "Publications",
        submenu: [
            { id: 1, link: 'https://drive.google.com/drive/folders/1pjPejbOJ7UpznaS1Mgwp3tZAvbLFszFl', name: 'Annual Reports' },
            { id: 1, link: 'http://dlib.pdn.ac.lk/', name: 'Digital Library' },
            { id: 1, link: 'https://www.pdn.ac.lk/journals/', name: 'Journals' },
            { id: 1, link: 'https://drive.google.com/drive/u/0/folders/1X9igP-rPeJ0cnz_8UgxDmJx_09SiRUGz', name: 'Newsletters' },
            { id: 1, link: 'https://drive.google.com/drive/folders/1e6JFCgrywZG3rob1zTHBwNecpZm05fVW', name: 'Sustainability Report' },
            { id: 1, link: 'https://drive.google.com/drive/u/0/folders/1BwPR94YX9Azg2JkDBoH2_WcKCwGhSUDg', name: 'Statistical Handbook' },
            { id: 1, link: 'https://www.pdn.ac.lk/university-calendars/', name: 'University Calendar' },
            { id: 1, link: 'https://www.pdn.ac.lk/wp-content/uploads/2024/08/Booklet-CDP-2042.pdf', name: 'Centenary Development Plan' },
            { id: 1, link: 'https://www.pdn.ac.lk/wp-content/uploads/2024/09/Action-plan-2024-1.pdf', name: 'Action Plan' },
        ]
    },

    // Research

    {
        id: 5,
        name: 'Research',
        link: '/RsearchAll'
    },

    // Centers & Units

    {
        id: 6,
        name: 'Centers & Units',
        link: 'https://www.pdn.ac.lk/units-centres/'
    },



    // administration

    {
        id: 7,
        name: "Administration",
        submenu: [
            {
                id: 1,
                name: 'Administrative Division',
                menusubL: [
                    { id: 1, link: 'https://sites.google.com/gs.pdn.ac.lk/acdestdiv', name: 'Academic Establishments' },
                    { id: 2, link: 'https://sites.google.com/gs.pdn.ac.lk/capwrkdiv', name: 'Capital Works' },
                    { id: 3, link: 'https://sites.google.com/gs.pdn.ac.lk/copmgtdiv', name: 'Corporate Management' },
                    { id: 4, link: 'https://sites.google.com/gs.pdn.ac.lk/cadiv', name: 'Council & Academic' },
                    { id: 5, link: 'https://sites.google.com/gs.pdn.ac.lk/genserdiv', name: 'General Service' },
                    { id: 6, link: 'https://sites.google.com/gs.pdn.ac.lk/legaldiv', name: 'Legal & Documentation' },
                    { id: 7, link: 'https://sites.google.com/gs.pdn.ac.lk/nonacdestdiv', name: 'Non-Academic Estab.' },
                    { id: 8, link: 'https://sites.google.com/gs.pdn.ac.lk/stdregdiv', name: 'Student Registration' },
                    { id: 9, link: 'https://sites.google.com/gs.pdn.ac.lk/stdserdiv', name: 'Student Service' },
                ]
            },
            {
                id: 2,
                name: 'Financial Division',
                menusubL: [
                    { id: 1, link: 'https://www.pdn.ac.lk/finance/', name: 'Final Accounts' },
                    { id: 2, link: 'https://www.pdn.ac.lk/foreign-supplies-unit/', name: 'Foriegn Supplies' },
                    { id: 3, link: 'https://www.pdn.ac.lk/loans-and-erp-system/', name: 'Loans & ERP' },
                    { id: 4, link: 'https://www.pdn.ac.lk/local-supplies-division/', name: 'Local Supplies' },
                    { id: 5, link: 'https://www.pdn.ac.lk/payment-division-budgetary-control/', name: 'Payment & Budgetary' },
                    { id: 6, link: 'https://www.pdn.ac.lk/portfolio-investment/', name: 'Portfolio Investment' },
                    { id: 7, link: 'https://www.pdn.ac.lk/research-funds-publication-self-financing-activitie/', name: 'Research, Funds & Publica.' },
                    { id: 8, link: '#', name: 'Retirement Benefits' },
                    { id: 9, link: '#', name: 'Revenue' },
                    { id: 10, link: 'https://www.pdn.ac.lk/salaries-and-wages/', name: 'Salaries & Wages' },
                    { id: 11, link: 'https://www.pdn.ac.lk/stores-management-section/', name: 'Stores Management' },
                    { id: 12, link: '#', name: 'Student Services' },
                ]
            },
            {
                id: 3,
                name: 'Services',
                menusubL: [
                    { id: 1, link: 'https://www.pdn.ac.lk/capital-project-unit/', name: 'Capital Works' },
                    { id: 2, link: 'https://sites.google.com/gs.pdn.ac.lk/maindiv', name: 'Maintenance' },
                    { id: 3, link: 'https://sites.google.com/gs.pdn.ac.lk/msldiv', name: 'Marshal Division' },
                    { id: 4, link: 'https://sites.google.com/gs.pdn.ac.lk/landscape-division', name: 'Landscape' },
                    { id: 5, link: 'https://sites.google.com/gs.pdn.ac.lk/phyedu', name: 'Physical Education' },
                    { id: 6, link: 'https://sites.google.com/gs.pdn.ac.lk/pro', name: 'Public Relations' },
                    { id: 7, link: 'https://www.pdn.ac.lk/security-department/', name: 'Security' },
                    { id: 8, link: 'https://sites.google.com/gs.pdn.ac.lk/statdiv', name: 'Statistics & Information' },
                    { id: 9, link: 'https://sites.google.com/gs.pdn.ac.lk/stdaccdiv', name: 'Student Accommodation' },
                ]
            },
            {
                id: 4,
                name: 'Others',
                menusubL: [
                    { id: 1, link: 'https://sites.google.com/gs.pdn.ac.lk/intaudtdiv', name: 'Internal Audit' },
                ]
            }
        ]
    },

    // Alumni

    {
        id: 8,
        name: 'Alumni',
        link: 'https://www.pdn.ac.lk/uop-alumni/'
    },

    // Vacancies

    {
        id: 9,
        name: 'Vacancies',
        link: 'https://www.pdn.ac.lk/vacancies/'
    }
]

export { MainNavData, secNavData };