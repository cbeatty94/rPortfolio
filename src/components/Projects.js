import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data"
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Click on the links to view my previous works!
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <div className="sm:w-1/2 w-100 p-4">
                            <div className="flex-relative">
                                <img
                                    alt="gallery"
                                    className="inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 hover:opacity-100">
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <p className="lealding-relaxed">{project.description}</p>
                                    <div className="">
                                        <a href={project.github} target="_blank">
                                            <AiFillGithub />
                                        </a>
                                        <a href={project.link} target="_blank">
                                            <AiOutlineLink />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}