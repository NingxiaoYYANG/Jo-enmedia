import React from 'react';
import './About.css';

// MediaLogo Component
const MediaLogo = ({ src, alt }) => {
    return (
        <div className="media-logo-container">
            <img src={src} alt={alt} />
        </div>
    );
}

// DescriptionSection Component
const DescriptionSection = ({ heading, paragraphs }) => {
    return (
        <div className="about-description-section">
            <h2 className="content">{heading}</h2>
            {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </div>
    );
}

// EngineChartColumn Component
const EngineChartColumn = ({ title, sections }) => {
    return (
        <section className='chart-column'>
            <h2>{title}</h2>
            <div className="column-bar">
                {sections.map((section, index) => (
                    <div key={index}>
                        {section.heading && <h3>{section.heading}</h3>}
                        {section.paragraphs.map((text, i) => (
                            <p key={i} className={i === section.paragraphs.length - 1 ? 'end-p' : 'not-end-p'}>{text}</p>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

// AboutEngine Component
const AboutEngine = () => {
    const engineData = [
        {
            title: "Deep insights into consumer e-commerce marketing planning",
            sections: [
                {
                    paragraphs: [
                        "Platform Resources Integrated Marketing",
                        "E-commerce Festival Promotions Performance Marketing",
                        "Douyin One-Stop DP Service",
                        "Brand Creativity and Social Media Communication"
                    ]
                }
            ]
        },
        {
            title: "Omni-channel content marketing enhances the value of content",
            sections: [
                {
                    heading: "Tunnel",
                    paragraphs: [
                        "Integrated Content Channels, Streamlined Pathways, and Customized Channel Strategies"
                    ]
                },
                {
                    heading: "Influencers",
                    paragraphs: [
                        "Comprehensive first-hand influencer resources across the entire network for precise influencer matching in brand seeding and live streaming."
                    ]
                },
                {
                    heading: "Content",
                    paragraphs: [
                        "Insights into brands and audiences, customized content output to drive brand growth"
                    ]
                },
                {
                    heading: "Data",
                    paragraphs: [
                        "Comprehensive data analysis and strategic guidance for brand placement"
                    ]
                }
            ]
        },
        {
            title: "End-to-end content services from production to distribution.",
            sections: [
                {
                    heading: "Short-video",
                    paragraphs: [
                        "Leveraging the characteristics of each platform, quickly produce and distribute customized short videos for brands"
                    ]
                },
                {
                    heading: "LIVE",
                    paragraphs: [
                        "Professional integrated services, creating specialized live streaming hubs for brands and stores"
                    ]
                }
            ]
        }
    ];

    return (
        <section className="about-engine">
            <h1>Three Core Engines of Brand Service</h1>
            <div className="about-engine-chart">
                {engineData.map((columnData, index) => (
                    <EngineChartColumn key={index} title={columnData.title} sections={columnData.sections} />
                ))}
            </div>
        </section>
    );
}

// MCNSection Component
const MCNSection = ({ src, alt, title, description, subtitle }) => {
    return (
        <section className="about-MCN">
            <img src={src} alt={alt} />
            <div className="about-MCN-text">
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>{subtitle}</h3>
            </div>
        </section>
    );
}

// Main About Component
const About = () => {
    return (
        <div className="main-body">
            <section className="about-section">
                <MediaLogo src="images/diagram.png" alt="Diagram" />
                <DescriptionSection 
                    heading="From a business perspective, utilizing precise data analysis and audience insights can create effective marketing strategies that help brands achieve audience asset growth."
                    paragraphs={[
                        "Comprehensive Digital Integrated Marketing Based on data-driven brand strategies, it integrates content marketing, live streaming, data banking, media promotion, and consumer operations, with extensive experience in full-chain marketing practices.",
                        "MCN Resource Integration Capability In-depth cooperation with leading institutions, covering a vast number of KOL resources, in-depth cooperation with top-tier anchors, and an in-house anchor team to provide brands with rich media resources.",
                        "Content Creativity Capability Possesses independent content production capabilities, keeping up with internet content trends, to create customized advertisement videos/live streams for brands."
                    ]}
                />
            </section>
            <AboutEngine />
            <MCNSection 
                src="images/side_fade.png"
                alt="Examples"
                title="Multi-Platform Certified MCN Agency"
                description="Alibaba-certified MCN agencies, official MCN agencies for short video platforms, produce over a hundred thousand short videos. They have achieved TOP3 national advertising awards, as well as awards such as Best Sales Agency and Best Sales Influencer from short video platforms and Alibaba."
                subtitle="From zero to incubating influencers, building short video influencers with over 50 million fans."
            />
        </div>
    );
}

export default About;