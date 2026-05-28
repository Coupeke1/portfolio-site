import type { Dict } from './nl';

export const en: Dict = {
    nav: {
        home: 'home',
        projects: 'projects',
        about: 'about',
    },
    a11y: {
        skipToContent: 'Skip to main content',
        toggleTheme: 'Toggle between light and dark theme',
        toggleLanguage: 'Switch language (English ↔ Nederlands)',
        currentTheme: 'Current theme',
        themeLight: 'Light',
        themeDark: 'Dark',
        themeSystem: 'System',
    },
    hero: {
        prompt: '$ whoami',
        lines: [
            '> Mathias Meeus',
            '> Full-stack developer · Antwerp',
            '> 3rd-year Applied Informatics · KdG',
        ],
        intro:
            'I build maintainable backends, deliberate architectures and ' +
            'frontends that stay fast and readable. Domain-Driven Design, ' +
            'microservices and TypeScript are my daily tools.',
        ctaPrimary: './view-projects',
        ctaSecondary: './about-me',
        ctaPrimaryHref: '/en/projects',
        ctaSecondaryHref: '/en/about',
    },
    featured: {
        eyebrow: '// recent_work.json',
        title: 'Featured project',
        viewProject: 'open_project()',
    },
    skills: {
        title: 'tech_stack',
        backend: 'backend',
        frontend: 'frontend',
        tools: 'tools',
    },
    cta: {
        title: 'Open to internships & junior roles',
        description:
            'I am actively looking for an internship or junior dev role where ' +
            'I can build real software with a team that takes code quality seriously.',
        primary: 'email me',
        primaryHref: 'mailto:mathiasmeeus2@gmail.com',
        secondary: 'github →',
        secondaryHref: 'https://github.com/Coupeke1',
    },
    footer: {
        roleLine: 'Full-stack developer in training',
        eduLine: 'Bachelor Applied Informatics · KdG',
        contact: 'contact',
        follow: 'follow',
        rights: 'All rights reserved.',
    },
    about: {
        heroTitle: 'about_mathias.md',
        introTitle: "Hey, I'm Mathias",
        introText:
            'Third-year Applied Informatics student at Karel de Grote Hogeschool ' +
            '(Antwerp). I specialise in software architecture, full-stack ' +
            'development and data engineering.',
        whatIDoTitle: 'what I do',
        strengthsTitle: 'where I excel',
        motivationTitle: 'why I do this',
        motivationText:
            'I like thinking in systems that are logical, scalable and elegant ' +
            '— under the hood as much as in the UI. I gravitate towards projects ' +
            'that are technically challenging and have real impact.',
        skillsTitle: 'technical skills',
        cards: {
            architecture: {
                title: 'Software architecture & Microservices',
                items: [
                    'DDD, bounded contexts & context maps',
                    'Event-driven communication with RabbitMQ',
                    'PostgreSQL, Neo4j, Keycloak, Docker',
                ],
            },
            framework: {
                title: 'Framework Development (Reverb)',
                items: [
                    'Custom Java MVC framework',
                    'Custom template engine with ANTLR',
                    'Routing, controllers, DI, HTTP abstractions',
                ],
            },
            data: {
                title: 'Data Engineering & Analytics',
                items: [
                    'Spark / Delta Lake ETL pipeline',
                    'Neo4j graph imports & Cypher queries',
                    'Dashboards & large datasets',
                ],
            },
            frontend: {
                title: 'Front-end Engineering',
                items: [
                    'React + TypeScript domotica UI',
                    'Zustand & React Query',
                    'Custom UI design',
                    'Portfolio in Astro + Tailwind',
                ],
            },
            strengths: [
                'Software architecture & DDD',
                'Microservices & messaging',
                'Java, Kotlin, TypeScript',
                'Spark, Neo4j, SQL',
            ],
        },
        skillSections: {
            backend: 'Backend Development',
            frontend: 'Frontend Development',
            tools: 'Tools & Platforms',
        },
    },
    projects: {
        title: 'projects/',
        intro: 'A selection of projects I built during my studies and in my own time.',
        viewProject: 'open',
        liveDemo: 'live demo',
        repository: 'repository',
        myRole: 'my role',
        keyFeatures: 'key features',
        techStack: 'tech stack',
        published: 'published',
        updated: 'updated',
        technologies: 'technologies',
        features: 'features',
        backToProjects: '← back to projects',
    },
    meta: {
        home: {
            title: 'Mathias Meeus · Full-Stack Developer',
            description:
                'Portfolio of Mathias Meeus — third-year Applied Informatics student at KdG (Antwerp). DDD, microservices, full-stack TypeScript and Java.',
        },
        about: {
            title: 'About · Mathias Meeus',
            description:
                'Who is Mathias Meeus? Software architecture, DDD, full-stack and data engineering — a student-developer in Antwerp.',
        },
        projects: {
            title: 'Projects · Mathias Meeus',
            description:
                'Selection of projects by Mathias Meeus — citizen panels, smart-home dashboards, microservices platforms, Android apps and more.',
        },
    },
};
