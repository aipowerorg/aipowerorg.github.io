import React from 'react';
import Layout from '@theme/Layout';

const showcases = [
    {
        customerName: 'Carolyn',
        flagUrl: 'https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@master/svg/fr.svg',
        description: `Carolyn's site provides a unique tool for language learning. Users input vocabulary, and the tool crafts a personalized story for active learning and enhanced retention.`,
        link: 'https://wordtap.net/create-a-story-using-these-words/',
        thumbnail: 'wordtap.png',
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
            <p><a href={showcase.link} target="_blank" rel="noopener noreferrer">View Form</a></p>
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
