import React from 'react';
import Layout from '@theme/Layout';

const FLAG_BASE_URL = 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@master/svg';

const showcases = [
    {
        customerName: 'Wordtap',
        flagUrl: `${FLAG_BASE_URL}/fr.svg`,
        description: `Carolyn's site provides a unique tool for language learning. Users input vocabulary, and the tool crafts a personalized story for active learning and enhanced retention.`,
        link: 'https://wordtap.net/create-a-story-using-these-words/',
        thumbnail: 'wordtap.png',
    },
    {
        customerName: 'Faith Guide',
        flagUrl: `${FLAG_BASE_URL}/us.svg`,
        description: `FaithGuide is an AI-powered app providing quick and reliable answers about Catholic teachings. The app also allows users to share their experiences, creating a supportive community.`,
        link: 'https://majellan.media/faithguide/',
        thumbnail: 'majellan.media.png',
    },
    {
        customerName: 'Job Hunt',
        flagUrl: `${FLAG_BASE_URL}/us.svg`,
        description: `Josh's website offers Instant Career Services, all built with AI Forms, including Resumes, Cover Letters, Career Paths, Salary Negotiation and Job Descriptions.`,
        link: 'https://jobhuntmode.com',
        thumbnail: 'jobhuntmode.png',
    },
    {
        customerName: 'Law Smart',
        flagUrl: `${FLAG_BASE_URL}/us.svg`,
        description: `Introducing Alyssa! Alyssa is a Law Smart chatbot specifically trained on Florida state statutes as it pertains to family law issues here in the greater Tampa Bay area.`,
        link: 'https://taylordangelonelaw.com',
        thumbnail: 'alyssa.png',
    },
    {
        customerName: 'Documend',
        flagUrl: `${FLAG_BASE_URL}/us.svg`,
        description: `Documend helps nurses document faster and more accurate; audits chart before submission and notifies healthcare workers of missed assessments or interventions.`,
        link: 'https://documend.io/webapp/',
        thumbnail: 'documend.png',
    },
    {
        customerName: 'Human Design',
        flagUrl: `${FLAG_BASE_URL}/us.svg`,
        description: `A chatbot that adds astrology, quantum physics, the chakra system, and other ancient systems into a tool which allows the users to understand who they are or on an energetic and quantum level. `,
        link: 'https://humandesign.ai/',
        thumbnail: 'humandesign.png',
    },
];

function ShowcaseItem({ showcase }) {
    return (
        <div className="showcaseItem">
            <div className="customerHeader">
                <h2>{showcase.customerName}</h2>
                <img className="flag" src={showcase.flagUrl} alt="" />
            </div>
            <p>{showcase.description}</p>
            <img className="thumbnail" src={`/img/showcase/${showcase.thumbnail}`} alt="Showcase thumbnail" />
            <p><a href={showcase.link} target="_blank" rel="noopener noreferrer">View</a></p>
        </div>
    );
}

export default function Showcase() {
    return (
        <Layout title="Showcase" description="Showcase of our users' websites">
            <div className="showcaseIntro">
                <h1 className="showcaseHeading">User Showcase</h1>
                <p className="showcaseDescription">
                    Discover how various users are leveraging our AI Power tools to enhance their websites. 
                    If you're using our plugin and want to share your work, feel free to add your site!
                </p>
                <a className="addYourSite" href="https://docs.google.com/forms/d/e/1FAIpQLSf6jFDWzMgZRFgWWy0X569y0Bz3Fcu2G62FYVgaiMHe5m9e3A/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                    Add your site
                </a>
            </div>
            <div className="showcase">
                {showcases.map((showcase, index) => (
                    <ShowcaseItem key={index} showcase={showcase} />
                ))}
            </div>
        </Layout>
    );
}
