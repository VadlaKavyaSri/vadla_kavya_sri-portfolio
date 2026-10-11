import primePlayerImg from '../assets/svg/achievements/primePlayerAward.svg'
import btechImg from '../assets/svg/achievements/btechAcademicExcellence.svg'
import galaxyImg from '../assets/svg/achievements/galaxyExplorerProject.svg'

export const achievementData = {
    bio: "Recognized for performance in Generative AI evaluation at Amazon, with a strong commitment to continuous learning, technical development, and delivering quality results.",
    achievements : [
        {
            id: 1,
            title: 'Prime Player Award',
            details: 'Recognized for strong performance and contributions to the AWS Bedrock team at Amazon.',
            date: 'Jan & Sep 2025',
            field: 'Professional Recognition',
            image: primePlayerImg
        },
        {
            id: 2,
            title: 'B.Tech Academic Excellence',
            details: 'Graduated with a CGPA of 8.47/10 in Computer Science and Engineering from RGUKT RK Valley.',
            date: '2024',
            field: 'Academic Achievement',
            image: btechImg
        },
        {
            id: 3,
            title: 'Web Development Project – Galaxy Explorer',
            details: 'Built an interactive space-exploration website using HTML, CSS, JavaScript, PHP, and MySQL, demonstrating practical web development skills.',
            date: '2022 – 2023',
            field: 'Technical Project',
            image: galaxyImg
        },
    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/