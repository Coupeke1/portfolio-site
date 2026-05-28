export const nl = {
    nav: {
        home: 'home',
        projects: 'projects',
        about: 'about',
    },
    a11y: {
        skipToContent: 'Sla navigatie over',
        toggleTheme: 'Schakel tussen licht en donker thema',
        toggleLanguage: 'Schakel taal (Nederlands ↔ English)',
        currentTheme: 'Huidig thema',
        themeLight: 'Licht',
        themeDark: 'Donker',
        themeSystem: 'Systeem',
    },
    hero: {
        prompt: '$ whoami',
        lines: [
            '> Mathias Meeus',
            '> Full-stack developer · Antwerpen',
            '> 3de jaar Toegepaste Informatica · KdG',
        ],
        intro:
            'Ik bouw onderhoudbare backends, doordachte architecturen en ' +
            'frontends die snel én leesbaar blijven. Domain-Driven Design, ' +
            'microservices en TypeScript zijn mijn dagelijkse gereedschap.',
        ctaPrimary: './bekijk-projecten',
        ctaSecondary: './over-mij',
        ctaPrimaryHref: '/projects',
        ctaSecondaryHref: '/about',
    },
    featured: {
        eyebrow: '// recent_werk.json',
        title: 'Uitgelicht project',
        viewProject: 'open_project()',
    },
    skills: {
        title: 'tech_stack',
        backend: 'backend',
        frontend: 'frontend',
        tools: 'tools',
    },
    cta: {
        title: 'Open voor stage & junior posities',
        description:
            'Ik zoek actief een stage- of junior dev-rol waar ik kan bouwen ' +
            'aan échte software met een team dat hoge code-kwaliteit serieus neemt.',
        primary: 'mail mij',
        primaryHref: 'mailto:mathiasmeeus2@gmail.com',
        secondary: 'github →',
        secondaryHref: 'https://github.com/Coupeke1',
    },
    footer: {
        roleLine: 'Full-stack developer in opleiding',
        eduLine: 'Bachelor Toegepaste Informatica · KdG',
        contact: 'contact',
        follow: 'volg',
        rights: 'Alle rechten voorbehouden.',
    },
    about: {
        heroTitle: 'over_mathias.md',
        introTitle: 'Hey, ik ben Mathias',
        introText:
            'Derdejaars Toegepaste Informatica student aan Karel de Grote Hogeschool ' +
            '(Antwerpen). Ik specialiseer me in software-architectuur, full-stack ' +
            'development en data engineering.',
        whatIDoTitle: 'wat ik doe',
        strengthsTitle: 'waar ik sterk in ben',
        motivationTitle: 'waarom ik dit doe',
        motivationText:
            'Ik denk graag in systemen die logisch, schaalbaar en elegant zijn ' +
            '— zowel onder de motorkap als in de UI. Ik hou van projecten die ' +
            'technisch uitdagend zijn en echte impact hebben.',
        skillsTitle: 'technische skills',
        cards: {
            architecture: {
                title: 'Software-architectuur & Microservices',
                items: [
                    'DDD, bounded contexts & context maps',
                    'Event-driven communicatie met RabbitMQ',
                    'PostgreSQL, Neo4j, Keycloak, Docker',
                ],
            },
            framework: {
                title: 'Framework Development (Reverb)',
                items: [
                    'Eigen Java-MVC framework',
                    'Custom template engine met ANTLR',
                    'Routing, controllers, DI, HTTP abstractions',
                ],
            },
            data: {
                title: 'Data Engineering & Analytics',
                items: [
                    'Spark/Delta Lake ETL pipeline',
                    'Neo4j graph imports & Cypher-queries',
                    'Dashboards & grote datasets',
                ],
            },
            frontend: {
                title: 'Front-End Engineering',
                items: [
                    'React + TypeScript domotica UI',
                    'Zustand & React Query',
                    'Custom UI design',
                    'Portfolio in Astro + Tailwind',
                ],
            },
            strengths: [
                'Software-architectuur & DDD',
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
        intro: 'Een selectie van projecten die ik gebouwd heb tijdens mijn opleiding en eigen tijd.',
        viewProject: 'open',
        liveDemo: 'live demo',
        repository: 'repository',
        myRole: 'mijn rol',
        keyFeatures: 'belangrijkste features',
        techStack: 'tech stack',
        published: 'gepubliceerd',
        updated: 'bijgewerkt',
        technologies: 'technologieën',
        features: 'features',
        backToProjects: '← terug naar projecten',
    },
    meta: {
        home: {
            title: 'Mathias Meeus · Full-Stack Developer',
            description:
                'Portfolio van Mathias Meeus — derdejaars Toegepaste Informatica student aan KdG (Antwerpen). DDD, microservices, full-stack TypeScript en Java.',
        },
        about: {
            title: 'Over mij · Mathias Meeus',
            description:
                'Wie is Mathias Meeus? Software-architectuur, DDD, full-stack engineering en data engineering — een student-developer in Antwerpen.',
        },
        projects: {
            title: 'Projecten · Mathias Meeus',
            description:
                'Selectie van projecten van Mathias Meeus — burgerpanels, domotica, microservices platforms, Android apps en meer.',
        },
    },
} as const;

export type Dict = typeof nl;
