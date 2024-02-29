import './index.css'
import html_img from '../../Assets/HTML Logo.png'
import css_img from '../../Assets/CSS Logo.png'
import java_img from '../../Assets/JS logo.png'
import react_img from '../../Assets/React.png'
import next_img from '../../Assets/next.png'
export function Skills() {
    return (
        <section className="skills_section">
            <div className="about_me_div">
                <h1 className='my_skills'>My Skills</h1>
            </div>
            <div className="skills_para_div">
                <p className='skill_para'>Within my skill set, I encompass a thorough grasp of CSS, HTML, JavaScript, React, Next.js, and React Native, enabling me to architect visually captivating and responsive web interfaces as well as cross-platform mobile applications. Proficient in Adobe Illustrator, Photoshop, and Bootstrap, I seamlessly translate creative visions into stunning graphical elements and user-centric designs. Furthermore, my expertise extends to programming languages like C and C++, allowing me to navigate intricate logic and algorithmic challenges with precision. This comprehensive skill set empowers me to approach projects with versatility and finesse, delivering impactful solutions across diverse domains of development and design.</p>
            </div>
            <div className="skills_div">
                <div className='skill_bar'>
                    <img className='skilss_image' src={html_img} />
                    <div className='skill_bar_text'>
                        <h2>HTML</h2>
                        <p> Proficient in crafting semantic and structured web content using HTML.</p>
                    </div>
                </div>
                <div className='skill_bar'>
                        <img className='skilss_image' src={css_img} />
                    <div className='skill_bar_text'>
                        <h2>CSS</h2>
                        <p>Skilled in styling and enhancing web elements with CSS to create visually appealing interfaces.</p>
                    </div>
                </div>
                <div className='skill_bar'>
                    <img className='skilss_image' src={java_img} />
                    <div className='skill_bar_text'>
                        <h2>JavaScript</h2>
                        <p>Capable of implementing dynamic and interactive functionality using JavaScript for seamless user experiences.</p>
                    </div>
                </div>
                <div className='skill_bar'>
                    <img className='skilss_image' src={react_img} />
                    <div className='skill_bar_text'>
                        <h2>React.js</h2>
                        <p>Experienced in building dynamic and efficient user interfaces with React.js, utilizing its component-based architecture and state management capabilities.</p>
                    </div>
                </div>

                <div className='skill_bar'>
                    <img className='skilss_image' src={next_img} />
                    <div className='skill_bar_text'>
                        <h2>Next.js</h2>
                        <p>Proficient in Next.js for building dynamic web applications with server-side rendering and optimized client-side navigation.</p>
                    </div>
                </div>


            </div>
        </section>
    )
}