import './index.css'
export default function Blogs(){
    return <section className='blog_section'>
        <h1 className='blogs_title'>My Blogs</h1>
        <div className='blog_card_container'>
            <div className='blog_card'>
                <div></div>
                <div className='blog_text'>
                    <div className='label'>Technology</div>
                    <h2>Best Books For Learning Web Development</h2>
                    <p>Free books for beginners to learn web development today</p>
                    
                </div>
                <a href="" >Read More</a>

            </div>
            <div className='blog_card'>
                <div></div>
                <div className='blog_text'>
                    <div className='label'>Technology</div>
                    <h2>Best Books For Learning Web Development</h2>
                    <p>Free books for beginners to learn web development today</p>
                    
                </div>
                <a href="" >Read More</a>

            </div>
        </div>

    </section>
}