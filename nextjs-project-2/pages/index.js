import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";

import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
    // {title, image, excerpt, date, slug}
    { 
        title: 'NextJS', 
        image: 'NextJS.png', 
        excerpt: 'Wonderful adventures', 
        date: '2021-08-20', 
        slug: 'Building my blog1' 
    },
    { 
        title: 'NextJS', 
        image: 'NextJS.png', 
        excerpt: 'Wonderful adventures', 
        date: '2021-08-20', 
        slug: 'Building my blog2' 
    },
    { 
        title: 'NextJS', 
        image: 'NextJS.png', 
        excerpt: 'Wonderful adventures', 
        date: '2021-08-20', 
        slug: 'Building my blog3' 
    }
];

function HomePage() {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS}/>
        </Fragment>
    );
}

export default HomePage;