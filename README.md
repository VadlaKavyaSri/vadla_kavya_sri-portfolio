# V Kavya Sri | Portfolio

Personal portfolio website showcasing my education, skills, experience, projects, and achievements.

[GitHub](https://github.com/VadlaKavyaSri) · [LinkedIn](https://www.linkedin.com/in/vadlakavyasri/) · [Email](mailto:vadlakavyasri3@gmail.com)

---

## About

Computer Science graduate and aspiring Software Developer with a growing interest in Python, web development, and AI-driven applications. Previously worked as an ML Data Associate I (Generative AI Evaluation) at Amazon.

## Built With

- React 17
- Material-UI
- React Router
- EmailJS (contact form)
- CSS3 / HTML5

## Run Locally

```bash
npm install
npm start
```

The app opens at http://localhost:3000.

## Build for Production

```bash
npm run build
```

## Customising Content

All portfolio content lives in `src/data/`:

| File | Controls |
| --- | --- |
| `headerData.js` | Name, title, intro, profile photo, resume |
| `aboutData.js` | About section |
| `educationData.js` | Education |
| `skillsData.js` | Skills |
| `experienceData.js` | Work experience |
| `projectsData.js` | Projects |
| `achievementData.js` | Achievements |
| `servicesData.js` | Services |
| `contactsData.js` / `socialsData.js` | Email and social links |
| `themeData.js` | Colour theme |

## Contact Form (EmailJS)

Create a `.env` file in the project root:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Credits

Based on the open-source [developer-portfolio](https://github.com/hhhrrrttt222111/developer-portfolio) template by hhhrrrttt222111, licensed under the terms in `LICENSE`.
