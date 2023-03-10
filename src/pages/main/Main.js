import React, { useEffect, useRef } from 'react';
import "./Main.css";
import {motion, AnimatePresence} from "framer-motion/dist/framer-motion";
import LazyLoad from 'react-lazy-load';


const Card = (props) =>(
    <motion.div className='card'
    initial={{ y:60}}
    whileInView={{ y:0,}}
    transition={{ delay: 0.5,type: "spring", stiffness: 100 }}>
        <div className={props.cnf}>
            <div className={props.cn}></div>
        </div>
        <div className='card-content'>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
        </div>  

    </motion.div>
)

export const Main =() => {
    return (
        <AnimatePresence >
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}   
        >
            <LazyLoad>
            <div className='image-container' >
                <motion.div
                initial={{ opacity:0}}
                whileInView={{ opacity:1,}}
                transition={{ delay: 0.3,type: "spring", stiffness: 100 }}
                 className='fixed-logo'>
                    <div className='logo'></div>
                    <p>The Earthly Décor</p>
                </motion.div>
                <motion.div
                initial={{ opacity:0}}
                whileInView={{ opacity:1,}}
                transition={{ delay: 0.3,type: "spring", stiffness: 100 }} className='text-main'>
                    <h1>The style that enhances the beauty of your home</h1>
                    <button>Get Started</button>
                </motion.div>
            </div>
            </LazyLoad>
            <div className='lamp-image'>
                    <div className='lamp'/>
                </div>
            <div className='content-container'>
                
                <div className='info-container'>
                    <motion.div
                    initial={{ opacity:0}}
                    whileInView={{ opacity:1,}}
                    transition={{ delay: 0.3,type: "spring", stiffness: 100 }}
                     className='p-container'>
                        <h1>We want the best for your home</h1>
                        <p>We are thrilled to have you here and are committed to providing you with the best possible shopping experience. Our furniture is hand-crafted by skilled artisans and is made with the finest materials to ensure that it is both beautiful and durable.</p>
                    </motion.div>
                    <motion.div className='sofa-image'
                      initial={{ x:-80}}
                      whileInView={{x:0,}}
                      transition={{ delay: 0.5,ease: "easeIn", stiffness: 100 }}>
                        <div className='sofa'/>

                    </motion.div>
                </div>
                <div className='items-container'>
                    <Card name="Cozy Cream Sofa" price="57.99$" cn="cozy-cream-sofa" cnf="ccs-f"></Card>
                    <Card name="Desk with Storage" price="49.99$" cn="desk-with-storage" cnf="dws-f"></Card>
                    <Card name="3-Pack Chair" price="42.99$" cn="three-chairs" cnf="tc-f"></Card>
                    <Card name="Small Sofa" price="39.99$" cn="small-sofa" cnf="ss-f"></Card>

                </div>

                
            </div>
            <motion.div className="contact-information"
              initial={{ opacity:0}}
              whileInView={{ opacity:1,}}
              transition={{ delay: 0.5,type: "spring", stiffness: 100 }}
            >
                <p>For more Front-End projects visit  <a rel="noopener noreferrer" target="_blank" href='https://nachodoria.vercel.app/'>https://nachodoria.vercel.app/</a></p>
                <p>For a collaboration send me an email <a rel="noopener noreferrer" href="mailto:ignaciodoriaoberman@gmail.com" >ignaciodoriaoberman@gmail.com</a></p>

            </motion.div>

            </motion.div>

        </AnimatePresence>
    )
}

export default Main