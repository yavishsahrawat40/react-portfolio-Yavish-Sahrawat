import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experience = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Experiences</motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/4'>
                            <img
                                src={experience.logo}
                                width={150}
                                height={150}
                                alt={experience.company}
                                className='mb-6 rounded'
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='text-2xl mb-5 font-semibold'>{experience.company}</h6>
                            <p className='text-neutral-300 mb-3'>{experience.year}</p>
                            <p className='text-neutral-300 mb-3'>{experience.role}</p>
                            <p className='text-neutral-300 mb-3'>{experience.description}</p>
                            {experience.technologies.map((tech, index) => (
                                <span key={index} className='mr-3 mt-20 rounded px-2 py-1 text-sm font-medium text-purple-600'>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
