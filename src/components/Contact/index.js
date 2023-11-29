import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_w9hgw9r',
                'template_3xw0tmu',
                form.current,
                '0bf4PrKU92e7bDmUb'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message failed to send')
                }
            )
    }

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    Contact Me
                </h1>
                <p>
                I'm thrilled to connect with fellow enthusiasts, curious minds, and potential collaborators. Whether you share a passion for programming, have burning questions about the 
                tech world, or you're on the lookout for a new colleague, I'm here and ready to chat. Feel free to drop me a line below. I'm open to discussions on anything from coding 
                conundrums to the latest tech trends. Let's explore possibilities, share ideas, and embark on exciting projects together!
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='text' name='email' placeholder='Email' required />
                            </li>
                            <li className='half'>
                                <input type='text' name='subject' placeholder='Subject'/>
                            </li>
                            <li className='half'>
                                <textarea type='text' name='message' placeholder='Message' required />
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='Send' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Contact;