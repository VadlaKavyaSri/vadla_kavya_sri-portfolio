import one from '../assets/svg/projects/galaxyExplorer.svg'
import two from '../assets/svg/projects/faceMaskDetection.svg'
import three from '../assets/svg/projects/paymentFraudDetection.svg'
import four from '../assets/svg/projects/genAIDashboard.svg'





export const projectsData = [

    {
        id: 1,
        projectName: 'Galaxy Explorer',
        projectDesc: 'Interactive space-exploration website with categorized space content and an engaging interface. Built with HTML, CSS, and JavaScript, with a PHP backend and MySQL for registered-user data management.',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        code: '',
        demo: 'https://vadlakavyasri.github.io/Galaxy-Explorer',
        image: one
    },
    {
        id: 2,
        projectName: 'Face Mask Detection',
        projectDesc: 'Developed a computer vision project to detect faces and identify whether individuals are wearing face masks. Explored CNN and Viola–Jones techniques for face detection and mask classification using Python.',
        tags: ['Python', 'CNN', 'Viola–Jones', 'Computer Vision'],
        code: 'https://github.com/VadlaKavyaSri/Face-Mask-Detection',
        demo: '',
        image: two
    },
    {
        id: 3,
        projectName: 'Online Payment Fraud Detection',
        projectDesc: 'Supervised machine learning project on about 6.36 million transactions to flag potentially fraudulent online payments, using data preprocessing and analysis and comparing algorithms to find the most effective model.',
        tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
        code: 'https://github.com/VadlaKavyaSri/Online-Payment-Fraud-Detection',
        demo: '',
        image: three
    },
    {
        id: 4,
        projectName: 'Generative AI Evaluation Dashboard',
        projectDesc: 'Frontend developer of an internal Generative AI evaluation dashboard for AWS Bedrock workflows, organizing evaluation parameters, guidelines, and examples, with search for quick access.',
        tags: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'AWS Bedrock'],
        code: '',
        demo: '',
        image: four
    }

]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/