import './index.css'
export function Projects() {
    return (
        <section className="projects_section">
            <h1 className='project_title'>My Portfolio</h1>
            <div className='card_container'>

                <div class="card project_card">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src='https://play-lh.googleusercontent.com/YNBUh-8PzcAXryawZ559rEUDowEOgXsPDfTDBOi4AQQR6NTsWGvYTU1tMRctN3uoRqw8' alt='' />
                    </div>
                    <div className='card_content'>
                    <h2>Meme Generator</h2>
                        <p>Developed a meme generator web application using Next.js, providing users with the ability to select templates and customize them as desired, ensuring a smooth and efficient editing process.</p>
                        <a href='#'>View</a>
                    </div>
                </div>

                <div class="project_card">
                    <div className='card'></div>
                    <div className='card_img'>
                        <img src='https://bugbaseprofilepics.s3.ap-south-1.amazonaws.com/programs/olx-2gkj/fac1bff1a4b034c8a3a385873fc3864413a3ce80/profile/1703498026028-bugbaselogo.png' alt='' />
                    </div>
                    <div className='card_content'>
                        <h2> OLX Clone</h2>
                        <p>Crafted a professional OLX clone using React and Firebase, incorporating signup, login, addItem, addToCart, Profile Update, and detail page functionalities for enhanced user experience and seamless interaction.</p>
                        <a target='_blank' href='https://olxclonebywaqarrana.netlify.app/'>View</a>
                    </div>
                </div>

                <div class="card project_card">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src='https://i.pinimg.com/originals/ce/d6/6e/ced66ecfc53814d71f8774789b55cc76.png' alt='' />
                    </div>
                    <div className='card_content'>
                    <h2>Facebook Card</h2>
                        <p>Utilizing React, created a replica of Facebook's card component, allowing users to view images and details of shared posts, closely resembling the appearance and functionality of the Facebook interface.</p>
                        <a target='_blank' href='https://fbcardbywaqarrana.netlify.app/'>View</a>
                    </div>
                </div>

                <div class="card project_card">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src='https://img.freepik.com/premium-vector/quiz-logo-icon-vector-symbol-flat-cartoon-bubble-speech-with-question-signs-as-competition-game_686498-275.jpg' alt='' />
                    </div>
                    <div className='card_content'>
                    <h2>Quiz App</h2>
                        <p>Created a quiz app using React where users cannot proceed to the next question without selecting an option, and at the end, the app displays the result separately.</p>
                        <a target='_blank' href='https://quizappbywaqarrana.netlify.app/'>View</a>
                    </div>
                </div>

                <div class="card project_card">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src='https://scontent.flhe9-1.fna.fbcdn.net/v/t39.30808-6/302533500_617202929746092_3545061930719719281_n.png?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGgB-tL-J_33ZePAAgt75hgdtyu7FqzzQZ23K7sWrPNBjnEtgo1k9sU0VbVnuRmF6sfEx36nKwJeKVj0tlU3bKr&_nc_ohc=zjsORoUXIecAX9wA0Xn&_nc_ht=scontent.flhe9-1.fna&oh=00_AfAwuaFmZDg6d5wMGM2mvVBqgMZepBKiyk2bFhxabLTyhg&oe=65DE3E9F' alt='' />
                    </div>
                    <div className='card_content'>
                    <h2>ToDo App</h2>
                        <p>Created a React todo app allowing users to add, delete, edit, and update items for efficient task management, providing a seamless todo list management experience.</p>
                        <a target='_blank' href='https://todoappbywaqarrana.netlify.app/'>View</a>
                    </div>
                </div>

                <div class="card project_card">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src='https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png' alt='' />
                    </div>
                    <div className='card_content'>
                    <h2>Weather App</h2>
                        <p>Designed a weather app using React that enables users to check the weather for any country or city. The app also stores search history locally using local storage for easy reference.</p>
                        <a target='_blank' href='https://weatherappbywaqarrana.netlify.app/'>View</a>
                    </div>
                </div>

                <div class="card project_card">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src='https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png' alt='' />
                    </div>
                    <div className='card_content'>
                    <h2> GitHub Profile</h2>
                        <p>Developed a GitHub profile fetch card using HTML, CSS, JavaScript, and APIs, enabling users to retrieve and display GitHub profiles with ease.</p>
                        <a target='_blank' href='https://githubprofilefetching.netlify.app/'>View</a>
                    </div>
                </div>

                <div class="card project_card">
                    <div className='card'></div>
                    <div className='card_img'>
                    <img src='https://img.freepik.com/premium-vector/gps-watch-icon-web_116137-4509.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698969600&semt=ais' alt='' />
                    </div>
                    <div className='card_content'>
                    <h2> OLX Clone</h2>
                        <p>Created a stopwatch with current time and date display using HTML, CSS, and JavaScript, providing users with both time tracking and date information in one convenient interface.</p>
                        <a target='_blank' href='https://stopwatchbywaqarrana.netlify.app/'>View</a>
                    </div>
                </div>

            </div>


        </section>
    )
}