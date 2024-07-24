import React from 'react'

const AboutPage = () => {
    return (
        <div className="flex flex-col justify-center p-4 gap-4">
            <h1 className="text-4xl font-bold mt-4">About Us</h1>
            <p>Welcome to Threads Realm! We are a team of passionate individuals dedicated to redefining the world of custom T-shirts. Our mission is to provide a platform where creativity knows no bounds, where every individual can showcase their personality and ideas through custom-designed apparel. With cutting-edge technology and a commitment to quality, we aim to exceed our customers’ expectations and leave a lasting impression.</p>
            <h2 className="text-2xl font-bold mt-4">Our Products</h2>
            <p>At Threads Realm, we offer two distinct lines of T-shirts:</p>
            <ul className="list-disc ml-4">
                <li><b>Custom T-shirts:</b> Powered by AI technology, our custom T-shirts allow you to create one-of-a-kind designs that reflect your unique style and personality. Whether it’s a bold statement, a beloved memory, or a creative masterpiece, our intuitive design tools make the process seamless and fun.</li>
                <li><b>Graphic Printed T-shirts:</b> For those seeking ready-made designs that make a statement, our collection of graphic printed T-shirts is bound to impress. Crafted from 100% cotton fabric, these shirts combine comfort with striking visuals, perfect for expressing your individuality with flair.</li>
            </ul>
            <h2 className="text-2xl font-bold mt-4">Why Choose Threads Realm?</h2>
            <ul className="list-disc ml-4">
                <li><b>Unrivaled Creativity:</b> With our custom T-shirt platform, you have the freedom to unleash your creativity and design a shirt that truly speaks to who you are.</li>
                <li><b>Quality Assurance:</b> We believe in using only the finest materials to ensure that every T-shirt we produce meets the highest standards of quality and durability.</li>
                <li><b>Cutting-Edge Technology:</b> Our integration of artificial intelligence streamlines the design process, making it easier than ever to bring your ideas to life.</li>
                <li><b>Customer Satisfaction:</b> Your satisfaction is our top priority. From the moment you start designing to the day your T-shirt arrives at your doorstep, we’re committed to providing exceptional service and support.</li>
            </ul>
            <p>Join us at Threads Realm and embark on a journey of self-expression and creativity. Let your imagination run wild, and together, let’s redefine the world of custom T-shirts.</p>
        </div>
    )
}

export default AboutPage
