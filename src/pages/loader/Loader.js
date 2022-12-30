import React from 'react'
import "./Loader.css";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion"






function Loader() {

    return (
        <AnimatePresence>
            <motion.div className="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <div className='loader-container'>
                    <svg className="first-logo" width="100" height="100" viewBox="0 0 100 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M94.1177 98.0232L94.1177 25C94.1177 13.9543 85.1634 4.99994 74.1177 4.99994L2.28882e-05 4.99994" stroke="white" stroke-width="10" />
                    </svg>
                    <svg className="second-logo" width="100" height="100" viewBox="0 0 100 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00002 -6.10352e-05V73.0232C5.00002 84.0689 13.9543 93.0232 25 93.0232H99.1177" stroke="white" stroke-width="10" />
                    </svg>
                </div>

            </motion.div>
        </AnimatePresence>
    )
}

export default Loader