import './index.css'
import introImg from '../../Assets/Hero Img 3.png'
// import CV from '../../Assets/'

export function Intro(){
    return (
        <section className='intro_secion'>
            <div className='intro_text_div'>
                <span className='hello'>Hello,</span>
                <span className='intro_text'>I'm <span className='intro_name'>Waqar Rana</span> <br/>Mern Stack Developer</span>
                <p className='intro_para'>As a beginner in MERN stack development, I'm learning to use <br/> MongoDB, Express.js, React.js, and Node.js to build web applications. <br/> Let's collaborate and create something amazing together!</p>
                <a href='./Waqar Ahmed CV.pdf' download='Waqar Ahmed CV.pdf' className='anchor_tag'> <button className='hire_me_btn'> <i class="fa-solid fa-briefcase btn_img"></i> Hire Me </button></a>
            </div>
            {/* <div className='intro_img_div'> */}
                <img src={introImg} alt='img' className='bg' />

            {/* </div> */}


        </section>
    )
}