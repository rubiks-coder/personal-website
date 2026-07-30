import React from 'react';
import { SECONDARY } from '../constants';
import ChipList from './ChipList';

/*
NEW EXPERIENCE INFO:
BitGo May 2025 – Present
Software Engineer Intern Remote
• Researched, designed, and implemented a secure and scalable Proof of Liabilities system for BitGo’s Go Network to
support 1B+ accounts, leveraging zero-knowledge SNARK proofs and Merkle tree commitments.
• Co-built an open-source CLI tool in Golang for proof generation and logarithmic-time verification using the gnark
library, with comprehensive unit tests and integration tests.
• Automated the liability proof generation pipeline as a bi-weekly cron job using the Snowflake SDK, Python, and
Postgres; deployed it via Docker and Kubernetes, with CI/CD integration through GitHub Actions.
Engineered a secure, iframe-based integration for a core chat interface that mitigated clickjacking risks and bypassed
content security restrictions (with Scala and TypeScript), successfully launching to over 150 weekly active users.
• Built an automated data extraction pipeline utilizing graph algorithms to aggregate semantic workspace knowledge
into centralized metric views.
• Optimized backend logging infrastructure by migrating debug logs from a network-constrained storage system to a
pod-local cache, bypassing storage limits and accelerating the software deployment cycle.
*/

const experiences = [
  {
    id: 0,
    period: 'May 2026 - Present',
    title: 'Software Engineer Intern',
    company: 'Snowflake',
    skills: ['C++', 'SQL', 'Java', 'DBMS'],
    bullets: [
      'Optimizing hybrid table index backfill on the Unistore Query Processing team.',
    ],
  },
  {
    id: 1,
    period: 'May 2026 - Present',
    title: 'Undergraduate Research Assistant',
    company: 'University of Waterloo',
    skills: ['PyTorch', 'Python', 'HuggingFace'],
    bullets: [
      'Developing ML pipelines to enforce accurate physics in 2D image to 3D reconstruction under Prof. Yuhao Chen.'
    ],
  },
  {
    id: 2,
    period: 'Jan - May 2026',
    title: 'Software Engineer Intern',
    company: 'Databricks',
    skills: ['TypeScript', 'Scala', 'React', 'Bazel'],
    bullets: [
      'Engineered a secure, iframe-based integration for a core chat interface that mitigated clickjacking risks and bypassed content security restrictions (with Scala and TypeScript), successfully launching to over 150 weekly active users.',
      'Built an automated data extraction pipeline utilizing graph algorithms to aggregate semantic workspace knowledge into centralized metric views.',
      'Optimized backend logging infrastructure by migrating debug logs from a network-constrained storage system to a pod-local cache, bypassing storage limits and accelerating the software deployment cycle.',
    ],
  },
  {
    id: 3,
    period: 'May - Aug 2025',
    title: 'Software Engineer Intern',
    company: 'BitGo',
    skills: ['Go', 'Python', 'Docker', 'Kubernetes', 'Postgres', 'Snowflake', 'zk-SNARKs'],
    bullets: [
      'Researched, designed, and implemented a secure and scalable Proof of Liabilities system for BitGo’s Go Network to support 1B+ accounts, leveraging zero-knowledge SNARK proofs and Merkle tree commitments.',
      'Co-built an open-source CLI tool in Golang for proof generation and logarithmic-time verification using the gnark library, with comprehensive unit tests and integration tests.',
      'Automated the liability proof generation pipeline as a bi-weekly cron job using the Snowflake SDK, Python, and Postgres; deployed it via Docker and Kubernetes, with CI/CD integration through GitHub Actions.',
    ],
  },
  {
    id: 4,
    period: 'Sep - Dec 2024',
    title: 'Software Engineer Intern',
    company: 'Titan',
    skills: ['GraphQL', 'React Native', 'Node.js', 'TypeScript', 'MongoDB', 'Datadog', 'Jest'],
    bullets: [
      'Implemented full stack features, optimized code performance, and created automated tests to ensure reliability and efficiency in deployment.',
      'Monitored application performance using Datadog, identifying CPU bottlenecks in containerized environments.',
'Improved code efficiency by conducting benchmark tests and implementing optimized solutions to reduce latency.',
    ],
  },
  {
    id: 5,
    period: 'Jan - Apr 2024',
    title: 'Software Engineer Intern',
    company: 'Ground News',
    skills: ['AWS', 'REST', 'Node.js', 'Express', 'TypeScript', 'Sequelize', 'Elasticsearch', 'MySQL', 'Redis', 'Vue', 'LLMs'],
    bullets: [
      'Implemented a variety of full-stack features and cron jobs.',
      'Developed automation tools for source classification and content tagging using Hugging Face embedding models, OpenAI LLMs, and Anthropic LLMs, enhancing content moderation efficiency.',
      'Configured AWS SES for newsletters and developed an admin tool for email analytics using AWS CloudWatch.',
      // 'Developed a Chrome browser extension to fetch article source metadata, improving retrieval rate by ~30%.',
      // 'Created tool to analyze YouTube channels using the YouTube API, saving the sponsorship team ~9 hours per week.'
    ],
  },
  {
    id: 6,
    period: 'May - Aug 2023',
    title: 'Software Engineer Intern & Student Rearcher',
    company: 'University of Waterloo',
    skills: ['REST', 'Node.js', 'Express', 'TypeScript', 'MongoDB', 'Firebase', 'Redis', 'Postman'],
    bullets: [
      'Researched and prototyped a novel multi-factor authentication (MFA) system under Prof. Amir Khandani to authenticate users based on geolocation and local network data.',
      // 'Spearheaded robust client API development for Cynorix 2FA, fortified with OAuth 2.0 and optimized with Redis.',
      // 'Leveraged Firebase Cloud Messaging to decrease server-client communication overhead.',
      // 'Successfully managed Stripe payment states in Node webhooks to implement a discount feature for products.',
      // 'Prototyped a cross-platform mobile 2FA app using React and React Native.',
      // 'Proficiently used Postman, Google Developer Tools, and Firebase Console for effective debugging/testing.',
    ],
  },
  {
    id: 7,
    period: 'May 2022 - June 2023',
    title: 'Fullstack Software Developer',
    company: 'Resurrection C.S.S.',
    skills: ['REST', 'Node.js', 'Express', 'TypeScript', 'MySQL', 'Firebase Auth', 'Prisma', 'Angular'],
    bullets: [
      'Voluntarily designed and developed a full-stack application to help math teachers teach coding to Grade 9 math students.',
      // 'Built an Angular frontend with client-side authorization using guarded routing and a crisp UI using Angular Material.',
      // 'Engineered a RESTful Node-Express backend in TypeScript, using Firebase Authentication for security.',
      // 'Leveraged Prisma ORM to design the database schema, manage migrations, and execute all SQL queries.',
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="bg-[#252525] text-white flex flex-col justify-center items-center py-16">
        <h2 className="text-4xl font-bold text-center mb-12 underline underline-offset-[10px] decoration-8 decoration-[#3bb399]">Experience</h2>
        <div>
        {experiences.map((exp, index) => (
          <div key={exp.id} className="mb-12 relative  max-w-[700px]">
            {/* Timeline period */}
            <div className="absolute -left-32 top-1 text-gray-400 italic text-sm">
              {exp.period}
            </div>

            {/* Connecting Line */}
            {index !== experiences.length - 1 && (
              <div className={'absolute -left-16 top-9 h-full border-l-2 border-gray-400'}></div>
            )}

            {/* Job Info */}
            <div className="ml-8">
              <h3 className="text-xl font-semibold mb-3">{exp.title} · <span className='text-[#3bb399]'>{exp.company}</span></h3>
              <ul className="list-disc ml-4 leading-7 text-gray-300">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
              <ChipList chips={exp.skills} />
            </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Experience;
