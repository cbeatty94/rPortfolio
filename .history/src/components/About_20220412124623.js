import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Burke.
                        <br className="hidden lg:inline-block" /> I love to build amazing websites.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    I am a web developer dedicated to building websites that effortlessly bridge the gap between company and customer. I am originally from Chapel Hill, North Carolina, but over the past half decade I have been traveling the globe in an attempt to better understand myself and the world around me. Through this journey I have discovered my passion for web development and connecting with people, and I have been working to combine these passions ever since.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="myPhoto"
                        src="./me.jpg"
                    />
                </div>
            </div>
        </section>
    )
}