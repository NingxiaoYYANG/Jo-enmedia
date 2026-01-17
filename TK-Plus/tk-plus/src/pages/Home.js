import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// HeroSection Component
const HeroSection = () => {
    return (
        <section className="hero">
            <h1 className="about-info-h1">Who are we?</h1>
            <div className="about-info">
                <p>
                    Relying on senior e-commerce marketing background, 
                    with content traffic as the core, vertically through 
                    the entire service chain from brand promotion, content marketing, 
                    traffic strategy, channel operation, with rich content e-commerce 
                    test to help brands inject energy.
                </p>
            </div>
            <div className="mobile-hor-center">
                <Link to="/about" className="cta-button">Learn More</Link>
            </div>
        </section>
    );
}

// ImageContainer Component
const ImageContainer = ({ src, alt, title }) => {
    return (
        <div className="image-container">
            <img src={src} alt={alt} />
            <div className="title">{title}</div>
        </div>
    );
}

// MultiContentSection Component
const MultiContentSection = () => {
    return (
        <section className="multi-content-section">
            <ImageContainer 
                src="images/home1.jpg" 
                alt="full_domain" 
                title="Full Domain Content Marketing" 
            />
            <ImageContainer 
                src="images/home2.jpg" 
                alt="short_video&live_broadcast" 
                title="Short Video + Live Broadcast Content Production" 
            />
            <ImageContainer 
                src="images/home3.jpg" 
                alt="short_video_platform_operation" 
                title="Short Video Platform Operation" 
            />
        </section>
    );
}

// MediaLogoRow Component
const MediaLogoRow = ({ logos }) => {
    return (
        <div className="media-logo-row">
            {logos.map((logo, index) => (
                <div key={index} className="media-logo-container">
                    <img src={logo.src} alt={logo.alt} />
                </div>
            ))}
        </div>
    );
}

// MediaLogoSection Component
const MediaLogoSection = () => {
    const logosRow1 = [
        { src: "images/toutiao_logo.png", alt: "Tou Tiao" },
        { src: "images/dewu_logo.png", alt: "De wu" },
        { src: "images/taobao_logo.png", alt: "Tao bao" },
        { src: "images/douyin_logo.png", alt: "Dou Yin" },
        { src: "images/kuaishou_logo.png", alt: "Kuai Shou" }
    ];

    const logosRow2 = [
        { src: "images/xiaohongshu_logo.png", alt: "Xiao Hong Shu" },
        { src: "images/bili_logo.png", alt: "Bilibili" },
        { src: "images/weibo_logo.png", alt: "Wei Bo" },
        { src: "images/weixin_logo.png", alt: "Wei Xin" },
        { src: "images/zhihu_logo.png", alt: "Zhu Hu" }
    ];

    return (
        <section className="media-logo-section">
            <h1 className="media-title">Service Coverage: Total Content Marketing</h1>
            <h1 className="media-title-mobile">Service Coverage:</h1>
            <h1 className="media-title-mobile">Total Content Marketing</h1>
            <div className="media-logos">
                <MediaLogoRow logos={logosRow1} />
                <MediaLogoRow logos={logosRow2} />
            </div>                   
        </section>
    );
}

// MediaTextSection Component
const MediaTextSection = () => {
    return (
        <section className="media-text-section">
            <div className="media-text-container">
                <h1>STRATEGY</h1>
                <p>Research | Target Audience | Competitors | Insights</p>
            </div>
            <div className="media-text-container">
                <h1>CREATIVE</h1>
                <p>Touchpoints | Story | Design | Topic | Content Form</p>
            </div>
            <div className="media-text-container">
                <h1>EXECUTE</h1>
                <p>Materials | Celebrities | KOL | Offline | Resource Buying</p>
            </div>
        </section>
    );
}

// Main Home Component
const Home = () => {
    return ( 
        <div className="main-body">
            <main className="pc-main">
                <HeroSection />
                <MultiContentSection />
                <MediaLogoSection />
                <MediaTextSection />
            </main>
        </div>
    );
}

export default Home;
