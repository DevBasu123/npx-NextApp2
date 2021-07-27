import AllPosts from "../../components/posts/all-posts";

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


function AllPostsPage() {
    return (
        <AllPosts posts={DUMMY_POSTS} />
    );
}

export default AllPostsPage;