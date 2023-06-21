import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

function Work() {
    return (
        <>
            <div className="work-outer">
                <div className="work-inner">
                    <div className="work-header">
                        <span className="number one work-number-two">02 </span>
                        <br></br>
                        <span className="about-me-head">
                            <span className="l">W</span>
                            <span className="l">o</span>
                            <span className="l">r</span>
                            <span className="l">k</span>
                        </span>
                    </div>
                    <div className="explore-outer">
                        <a
                            href="https://svg-library.web.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="explore-left">
                            {' '}
                        </a>

                        <div className="explore-right">
                            <div className="explore-project-name">
                                Featured Project
                            </div>
                            <div className="explore-name">SVG Library</div>
                            <div className="explore-box">
                                Choose from a selection of highly customizable
                                SVG icons
                                <br></br>
                                <br></br>
                                <span className="number">
                                    timeframe of build:{' '}
                                </span>{' '}
                                5 days <br></br>
                                <br></br>{' '}
                                <span className="number margin">
                                    main focus of website:{' '}
                                </span>{' '}
                                Reactive components
                            </div>
                            <div className="explore-languages-used">
                                React <span className="space"></span>Tailwind{' '}
                                <span className="space"></span>Firebase{' '}
                                <span className="space"></span> Zustand
                            </div>
                            <div className="explore-links">
                                <div className="explore-links-right">
                                    <a
                                        className="beauty-github"
                                        href="https://svg-library.web.app/"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FiExternalLink className="icon-link"></FiExternalLink>
                                    </a>
                                    <a
                                        className="explore-github"
                                        href="https://github.com/JadenFicklin/svg-library"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FiGithub className="icon-link"></FiGithub>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="beauty-outer">
                        <div className="beauty-left">
                            <div className="beauty-project-name">
                                Featured Project
                            </div>
                            <div className="beauty-name">Oak and Stone</div>
                            <div className="beauty-box">
                                {' '}
                                Freelance project built for a construction
                                business specializing in cabinet remodels
                                <br></br>
                                <br></br>
                                <span className="number">
                                    timeframe of build:{' '}
                                </span>{' '}
                                14 days <br></br>
                                <br></br>
                                <span className="number  margin">
                                    main focus of website:{' '}
                                </span>
                                Reactive CSS
                            </div>
                            <div className="beauty-languages-used">
                                React <span className="space"></span>API's{' '}
                                <span className="space"></span>Netlify{' '}
                                <span className="space"></span> CSS
                            </div>
                            <div className="beauty-links">
                                <div className="beauty-links-right">
                                    <a
                                        className="beauty-github"
                                        href="https://oakandstone.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FiExternalLink className="icon-link"></FiExternalLink>
                                    </a>
                                    <a
                                        className="beauty-github"
                                        href="https://github.com/JadenFicklin/Oak-n-stone"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FiGithub className="icon-link"></FiGithub>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://oakandstone.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="beauty-right">
                            {' '}
                        </a>
                    </div>
                    <div className="ambience-outer">
                        <a
                            href="https://beauty-by-kerrie.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="ambience-left">
                            {' '}
                        </a>
                        <div className="ambience-right">
                            <div className="ambience-project-name">
                                Featured Project
                            </div>
                            <div className="ambience-name">Kerrie</div>
                            <div className="ambience-box">
                                Beauty by Kerrie was my first freelance project
                                built to help customers seeking cosmetic
                                tattoos.
                                <br></br>
                                <br></br>
                                <span className="number">
                                    timeframe of build:{' '}
                                </span>{' '}
                                5 days <br></br>
                                <br></br>{' '}
                                <span className="number  margin">
                                    main focus of website:{' '}
                                </span>{' '}
                                Reactive CSS
                            </div>
                            <div className="ambience-languages-used">
                                React
                                <span className="space"></span> Netlify
                            </div>
                            <div className="ambience-links">
                                <div className="ambience-links-right">
                                    <a
                                        className="ambience-website"
                                        href="https://beauty-by-kerrie.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FiExternalLink className="icon-link"></FiExternalLink>
                                    </a>
                                    <a
                                        className="ambience-github"
                                        href="https://github.com/JadenFicklin/beauty-by-kerrie"
                                        target="_blank"
                                        rel="noreferrer">
                                        <FiGithub className="icon-link"></FiGithub>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Work;
