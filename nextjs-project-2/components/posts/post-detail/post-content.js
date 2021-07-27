import PostHeader from "./post-header";

import classes from './post-content.module.css';

const DUMMY_POST = {
    title: 'NextJS', 
    image: 'NextJS.png', 
    date: '2021-08-20', 
    slug: 'Building my blog1',
    content: '# This is First post.'
};

function PostContent() {

    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            {DUMMY_POST.content}
        </article>
    );
}

export default PostContent;