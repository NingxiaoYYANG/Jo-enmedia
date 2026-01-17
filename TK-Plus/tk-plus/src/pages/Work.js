import React from 'react';
import './Work.css';
import ImageSlider from '../components/ImageSlider';

const Work = () => {
    const images = [
        'images/example1.png',
        'images/example2.png',
        'images/example3.png',
        'images/example4.png',
        'images/example5.png',
        'images/example6.png',
        'images/example7.png',
        'images/example8.png',
        'images/example9.png'
        // Add more image paths as needed
    ];

    const mb_images = [
        'images/mb-example1.png',
        'images/mb-example2.png',
        'images/mb-example3.png',
        'images/mb-example4.png',
        'images/mb-example5.png',
        'images/mb-example6.png',
        'images/mb-example7.png',
        'images/mb-example8.png',
        'images/mb-example9.png',
        'images/mb-example10.png',
        'images/mb-example11.png'
    ]

    return ( 
        <div className="main-body">
            <div className="pc-body">
                <section className='key-examples'>
                    <section className='key-examples-left'>
                        <section className='key-examples-row'>
                            <div className="image-logo-container">
                                <img src="images/slam_logo.png" alt="Slamdunk"/>
                                <div className="title">Slamdunk</div>
                            </div> 
                            <div className="image-logo-container">
                                <img src="images/ultraman_logo.png" alt="Ultraman"/>
                                <div className="title">Ultraman</div>
                            </div> 
                        </section>
                        <section className='key-examples-row'>
                            <div className="image-logo-container">
                                <img src="images/kenan_logo.png" alt="Conan"/>
                                <div className="title">Detective Conan</div>
                            </div> 
                            <div className="image-logo-container">
                                <img src="images/robbi_logo.png" alt="Robbi"/>
                                <div className="title">Robbi</div>
                            </div> 
                        </section>
                        <p>
                            Toei Animation’s IPs, Ultraman, Conan, Robbi, Ayayi, Hitomi, 
                            Angry Birds, The Simpsons, Cat and Mouse, Big Mouth Monkey, 
                            Little Yellow Duck, Paul Frank, Pancoat, ANGRY BIRDS, Assassin’s 
                            Creed, and more.
                        </p>
                    </section>
                    <img src="images/animates.png" alt="Combined animates" />
                </section>
                <section className='brand-marketing'>
                    <section className='example-montage'>
                        <img src="images/montage.png" alt="Example Montage" />
                    </section>
                    <section className='brand-marketing-text'>
                        <h1>
                            Brand Marketing
                        </h1>
                        <p>
                            Campaign and brand account operation, creative events
                            Comprehensive social seeding marketing (Little Red Book, Bilibili, TikTok, Dewu, etc.)
                            Short video/live streaming comprehensive marketing
                            Celebrity endorsements/cooperative marketing/celebrity sales
                            Content IP marketing
                        </p>
                        <h1>
                            Entertainment Content Promotion
                        </h1>
                        <p>
                            TV drama IP marketing
                            Anime IP marketing
                            Platform crossover marketing
                        </p>
                        <h1>
                            Celebrity & KOL & IP Resources
                        </h1>
                        <p>
                            New Classics Media, Huayi Brothers, Zhongguang Tianze
                            League of Legends, PUBG Mobile, Honor of Kings
                        </p>
                    </section>
                </section>

                <section className='example-slider'>
                    <ImageSlider images={images} />
                </section>

                <section className='brand-logos'>
                    <h1>
                        Core Team Background
                    </h1>
                    <section className='brand-logo-row'>
                        <img src="images/xinli_logo.png" alt="brand xinli"/>
                        <img src="images/publics_logo.png" alt="brand publics"/>
                        <img src="images/huobo_logo.png" alt="brand huobo"/>
                        <img src="images/eisen_logo.png" alt="brand eisen"/>
                    </section>
                    <h1>
                        Partner Film and TV IP Companies
                    </h1>
                    <section className='brand-logo-row'>
                        <img src="images/litian_logo.png" alt="brand litian"/>
                        <img src="images/tianze_logo.png" alt="brand tianze"/>
                        <img src="images/xinli_logo.png" alt="brand xinli"/>
                        <img src="images/huayi_logo.png" alt="brand huayi"/>
                    </section>
                </section>
            </div>

            <div className="mobile-body">
                <section className='key-examples'>
                    <img src="images/animates.png" alt="Combined animates" />
                    <section className='key-examples-left'>
                        <section className='key-examples-row'>
                            <div className="image-logo-container">
                                <img src="images/slam_logo.png" alt="Slamdunk"/>
                                <div className="title">Slamdunk</div>
                            </div> 
                            <div className="image-logo-container">
                                <img src="images/ultraman_logo.png" alt="Ultraman"/>
                                <div className="title">Ultraman</div>
                            </div> 
                        </section>
                        <section className='key-examples-row'>
                            <div className="image-logo-container">
                                <img src="images/kenan_logo.png" alt="Conan"/>
                                <div className="title">Detective Conan</div>
                            </div> 
                            <div className="image-logo-container">
                                <img src="images/robbi_logo.png" alt="Robbi"/>
                                <div className="title">Robbi</div>
                            </div> 
                        </section>
                    </section>
                </section>

                <section className='brand-marketing'>
                    <section className='example-montage'>
                        <img src="images/montage.png" alt="Example Montage" />
                    </section>
                    <section className='brand-marketing-text'>
                        <h1>
                            Brand Marketing
                        </h1>
                        <p>
                            Campaign and brand account operation, creative events
                            Comprehensive social seeding marketing (Little Red Book, Bilibili, TikTok, Dewu, etc.)
                        </p>
                        <p>
                            Short video/live streaming comprehensive marketing
                            Celebrity endorsements/cooperative marketing/celebrity sales
                            Content IP marketing
                        </p>
                        <h1>
                            Entertainment Content Promotion
                        </h1>
                        <p>
                            TV drama IP marketing
                        </p>
                        <p>
                            Anime IP marketing
                        </p>
                        <p>
                            Platform crossover marketing
                        </p>
                        <h1>
                            Celebrity & KOL & IP Resources
                        </h1>
                        <p>
                            New Classics Media, Huayi Brothers, Zhongguang Tianze
                            League of Legends, PUBG Mobile, Honor of Kings
                        </p>
                    </section>
                </section>

                <section className='example-slider'>
                    <ImageSlider images={mb_images} />
                </section>

                <section className='brand-logos'>
                    <h1>
                        Core Team
                    </h1>
                    <section className='brand-logo-row'>
                        <img src="images/xinli_logo.png" alt="brand xinli"/>
                        <img src="images/publics_logo.png" alt="brand publics"/>
                    </section>
                    <section className='brand-logo-row'>
                        <img src="images/huobo_logo.png" alt="brand huobo"/>
                        <img src="images/eisen_logo.png" alt="brand eisen"/>
                    </section>
                    
                    <h1>
                        Partner
                    </h1>
                    <section className='brand-logo-row'>
                        <img src="images/litian_logo.png" alt="brand litian"/>
                        <img src="images/tianze_logo.png" alt="brand tianze"/>
                    </section>
                    <section className='brand-logo-row'>
                        <img src="images/xinli_logo.png" alt="brand xinli"/>
                        <img src="images/huayi_logo.png" alt="brand huayi"/>
                    </section>
                </section>
            </div>
            
        </div>
    );
}
  
export default Work;