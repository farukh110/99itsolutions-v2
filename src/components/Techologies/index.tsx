'use client';

import React from 'react';
import Image from 'next/image';
import { Tabs, TabsProps } from 'antd';
import CustomHeading from '../heading';
import './techologies.scss';

interface TechItemProps {
    src: string;
    alt: string;
    label: string;
}

const TechItem: React.FC<TechItemProps> = ({ src, alt, label }) => (
    <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4 icon-column'>
        <Image src={src} alt={alt} width={64} height={64} className='custom-icon' />
        <p className="techstack-p mt-md-3 text-center">{label}</p>
    </div>
);

const generateRow = (items: TechItemProps[]) => (
    <div className='row'>
        {items.map((item, i) => (
            <TechItem key={i} {...item} />
        ))}
    </div>
);

const techPath = (name: string): string => `/images/techstack/${name}`;

const Technologies: React.FC = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Frontend',
            children: generateRow([
                { src: techPath('JavaScript.png'), alt: 'JavaScript', label: 'JavaScript' },
                { src: techPath('typescript.png'), alt: 'TypeScript', label: 'TypeScript' },
                { src: techPath('ReactJS.png'), alt: 'React', label: 'ReactJS' },
                { src: techPath('redux.png'), alt: 'Redux Toolkit', label: 'Redux Toolkit' },
                { src: techPath('next.png'), alt: 'NextJS', label: 'NextJS' },
                { src: techPath('vu.png'), alt: 'Vue', label: 'Vue JS' },
                { src: techPath('nuxt.png'), alt: 'NuxtJS', label: 'NuxtJS' },
                { src: techPath('Angular.png'), alt: 'Angular', label: 'Angular' },
                { src: techPath('html.png'), alt: 'Html5', label: 'Html5' },
                { src: techPath('css.png'), alt: 'Css3', label: 'Css3' },
                { src: techPath('scss.png'), alt: 'Scss', label: 'Scss' },
                { src: techPath('bootstrap.png'), alt: 'Bootstrap', label: 'Bootstrap' },
                { src: techPath('tailwind.png'), alt: 'Tailwind CSS', label: 'Tailwind CSS' },
                { src: techPath('ant-design.png'), alt: 'Ant Design', label: 'Ant Design' },
                { src: techPath('material-ui.png'), alt: 'Material UI', label: 'Material UI' },
                { src: techPath('vite.png'), alt: 'Vite', label: 'Vite' },
                { src: techPath('npm.png'), alt: 'Npm', label: 'Npm' },
                { src: techPath('yarn.png'), alt: 'Yarn', label: 'Yarn' },
            ]),
        },
        {
            key: '2',
            label: 'Backend',
            children: generateRow([
                { src: techPath('dotnet.webp'), alt: '.Net', label: '.Net' },
                { src: techPath('php.webp'), alt: 'PHP', label: 'PHP' },
                { src: techPath('Node.webp'), alt: 'Node', label: 'NodeJS' },
                { src: techPath('express.png'), alt: 'ExpressJS', label: 'ExpressJS' },
                { src: techPath('nestjs.png'), alt: 'NestJS', label: 'NestJS' },
                { src: techPath('next.png'), alt: 'NextJS', label: 'NextJS' },
                { src: techPath('jsp.webp'), alt: 'Java Spring Boot', label: 'Java Spring Boot' },
                { src: techPath('Python.webp'), alt: 'Python', label: 'Python' },
                { src: techPath('django.png'), alt: 'Django', label: 'Django' },
                { src: techPath('laravel.png'), alt: 'Laravel', label: 'Laravel' },
                { src: techPath('ruby.png'), alt: 'Ruby', label: 'Ruby on Rails' },
                { src: techPath('flask.png'), alt: 'Flask', label: 'Flask' },
            ]),
        },
        {
            key: '3',
            label: 'Mobility Stack',
            children: generateRow([
                { src: techPath('android.webp'), alt: 'Android', label: 'Android' },
                { src: techPath('IOS.webp'), alt: 'iOS', label: 'iOS' },
                { src: techPath('ReactJS.png'), alt: 'React Native', label: 'React Native' },
                { src: techPath('flutter.png'), alt: 'Flutter', label: 'Flutter' },
                { src: techPath('swift.png'), alt: 'Swift', label: 'Swift' },
                { src: techPath('kotlin.png'), alt: 'Kotlin', label: 'Kotlin' },
            ]),
        },
        {
            key: '4',
            label: 'Databases',
            children: generateRow([
                { src: techPath('mysql.png'), alt: 'MySQL', label: 'MySQL' },
                { src: techPath('microsoft-sql.png'), alt: 'SQL Server', label: 'SQL Server' },
                { src: techPath('mongodb.png'), alt: 'MongoDB', label: 'MongoDB' },
                { src: techPath('postgresql.png'), alt: 'postgreSQL', label: 'postgreSQL' },
                { src: techPath('firebase.png'), alt: 'Firebase', label: 'Firebase' },
                { src: techPath('redis.png'), alt: 'Redis', label: 'Redis' },
            ]),
        },
        {
            key: '5',
            label: 'Artificial Intelligence',
            children: generateRow([
                { src: techPath('Python.webp'), alt: 'Python', label: 'Python' },
                { src: techPath('R-logo.webp'), alt: 'R Programming', label: 'R Programming' },
                { src: techPath('generative_blob.webp'), alt: 'Generative AI', label: 'Generative AI' },
                { src: techPath('natural-language-processing.webp'), alt: 'NLP', label: 'NLP' },
                { src: techPath('voice-recognition.webp'), alt: 'Speech Recognition', label: 'Speech Recognition' },
                { src: techPath('computer-vision.webp'), alt: 'Computer Vision', label: 'Computer Vision' },
            ]),
        },
        {
            key: '6',
            label: 'Cloud & DevOps',
            children: generateRow([
                { src: techPath('aws.webp'), alt: 'AWS', label: 'AWS' },
                { src: techPath('Azure.png'), alt: 'Microsoft Azure', label: 'Microsoft Azure' },
                { src: techPath('vercel.png'), alt: 'Vercel', label: 'Vercel' },
                { src: techPath('git.png'), alt: 'Git', label: 'Git' },
                { src: techPath('microservices.webp'), alt: 'Microservices', label: 'Microservices' },
                { src: techPath('DevOps.webp'), alt: 'DevOps', label: 'DevOps' },
                { src: techPath('Docker.webp'), alt: 'Docker', label: 'Docker' },
                { src: techPath('Kubernetes.webp'), alt: 'Kubernetes', label: 'Kubernetes' },
                { src: techPath('cicd.webp'), alt: 'Jenkins', label: 'Jenkins' },
                { src: techPath('bitbucket.png'), alt: 'Bitbucket', label: 'Bitbucket' },
                { src: techPath('terraform.png'), alt: 'Terraform', label: 'Terraform' },
                { src: techPath('bamboo.png'), alt: 'Bamboo', label: 'Bamboo' },
            ]),
        },
    ];

    return (
        <section className='technologies'>
            <div className='container'>
                <CustomHeading
                    firstWord="Our 360 Expertise"
                    lastWord="Tools & Tech Stack"
                    textCenter="text-center"
                />
                <div className='row justify-content-center'>
                    <Tabs
                        centered
                        className='custom-tabs'
                        defaultActiveKey="1"
                        items={items}
                    />
                </div>
            </div>
        </section>
    );
};

export default Technologies;
