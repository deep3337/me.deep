import { Component } from '@angular/core';

type Project = {
  context: string;
  title: string;
  description: string;
  tags: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
};

type Experience = {
  period: string;
  location: string;
  title: string;
  company: string;
  points: string[];
};

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly projects: Project[] = [
    {
      context: 'Enterprise SaaS',
      title: 'All-in-one business management platform',
      description:
        'Architected user-centric Angular components for complex business workflows, remote collaboration, asynchronous REST data loading, and cross-browser delivery.',
      tags: ['Angular', 'TypeScript', 'REST APIs', 'State management'],
    },
    {
      context: 'Diamond industry',
      title: 'High-performance workflow interfaces',
      description:
        'Built scalable front-end modules that improved workflow clarity for diamond business operations while keeping the UI responsive and maintainable.',
      tags: ['Angular SPA', 'Bootstrap', 'Responsive UI', 'Performance'],
    },
    {
      context: 'Internal product',
      title: 'Human Capital Information System',
      description:
        'Contributed dashboards, interactive forms, and dynamic data tables for an HCIS product used to streamline employee management.',
      tags: ['Dashboards', 'Forms', 'Data tables', 'Git'],
    },
  ];

  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frameworks and Libraries',
      items: ['Angular 21', 'Angular 2+', 'ElectronJS', 'RxJS'],
    },
    {
      title: 'Languages',
      items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'UI and Styling',
      items: ['Bootstrap', 'SCSS', 'Responsive Web Design', 'Mobile-first UI'],
    },
    {
      title: 'Tools and Methods',
      items: ['Git', 'GitHub', 'RESTful APIs', 'Agile/Scrum', 'Troubleshooting'],
    },
    {
      title: 'Core Competencies',
      items: [
        'Single Page Applications',
        'SDLC',
        'Cross-functional Collaboration',
        'Code Optimization',
      ],
    },
  ];

  protected readonly experience: Experience[] = [
    {
      period: 'Jun 2024 - Present',
      location: 'Remote - Toronto, Ontario, Canada',
      title: 'Frontend Developer',
      company: 'Total e Integrated',
      points: [
        'Architect, design, and maintain dynamic front-end components using Angular, JavaScript, and TypeScript.',
        'Translate complex business requirements into seamless interfaces with global Agile teams.',
        'Optimize front-end performance, application responsiveness, scalable structure, and cross-browser compatibility.',
        'Integrate RESTful APIs for smooth asynchronous data loading and high-fidelity workflows.',
      ],
    },
    {
      period: 'Apr 2022 - Jul 2024',
      location: 'India',
      title: 'Software Developer',
      company: 'SRKay Consulting Group Pvt Ltd',
      points: [
        'Developed high-performance enterprise web applications with Angular for diamond industry workflows.',
        'Used Bootstrap, CSS, and responsive design to build clean, maintainable, visually impactful interfaces.',
        'Created modular reusable components and shared services to speed up future feature rollouts.',
        'Debugged production issues and resolved critical front-end performance bottlenecks.',
      ],
    },
    {
      period: 'Dec 2021 - Mar 2022',
      location: 'India',
      title: 'Internship Trainee',
      company: 'SRKay Consulting Group Pvt Ltd',
      points: [
        'Contributed to an HCIS web application for internal employee management.',
        'Built dashboards, interactive forms, and dynamic data tables with Angular, CSS, and Bootstrap.',
        'Practiced enterprise coding standards, Git version control, and mobile-first development.',
      ],
    },
  ];
}
