import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/image1.png" alt="An image showing Basu" width={300} height={300} />
            </div>
            <h1>Hi I'm Basu</h1>
            <p>My Web Dev Blog</p>
        </section>
    );
}

export default Hero;
