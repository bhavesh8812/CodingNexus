import userContext from "../context/userContext"
import { Container, Row, Col } from "reactstrap"; // Assuming you have Reactstrap installed
import Base from "../components/Base"

const Services = () => {
    return (
        <userContext.Consumer>
            {
                (object) => (

                    <Base>
                        <Container>
                            <Row>
                                <Col>
                                    <h1 className="mt-5">Our Services</h1>
                                    <p>
                                        Coding Nexus is dedicated to providing a range of services to
                                        support your journey in the tech world. Whether you're a
                                        beginner or an experienced developer, our services are designed
                                        to meet your needs and help you thrive in the ever-evolving tech
                                        landscape.
                                    </p>

                                    <h2 className="mt-3">1. Tutorials and Learning Resources</h2>
                                    <p>
                                        Explore our extensive library of tutorials covering a variety of
                                        technologies, programming languages, frameworks, and tools. Our
                                        user-friendly interface makes learning enjoyable, and our diverse
                                        content ensures there's something for everyone.
                                    </p>

                                    <h2 className="mt-3">2. Community Engagement</h2>
                                    <p>
                                        Coding Nexus is more than a tutorial platform; it's a
                                        community-driven space. Engage in discussions, seek help, and
                                        connect with like-minded individuals who share your passion for
                                        coding and technology. Our community is here to support and
                                        inspire you.
                                    </p>

                                    <h2 className="mt-3">3. Coding Challenges and Projects</h2>
                                    <p>
                                        Test and enhance your coding skills with our coding challenges.
                                        We also encourage you to showcase your projects and collaborate
                                        with others. Coding Nexus is a platform where creativity and
                                        innovation are celebrated.
                                    </p>

                                    <h2 className="mt-3">4. Mentorship Programs</h2>
                                    <p>
                                        Whether you're looking for guidance as a beginner or seeking
                                        advice to advance your career, our mentorship programs connect you
                                        with experienced professionals in the tech industry. Learn from
                                        the best and accelerate your growth.
                                    </p>

                                    <h2 className="mt-3">5. Job Board and Career Resources</h2>
                                    <p>
                                        Explore job opportunities in the tech industry through our job
                                        board. We also provide career resources, tips, and insights to
                                        help you navigate and succeed in your tech career.
                                    </p>

                                    <h2 className="mt-3">6. Tech Events and Workshops</h2>
                                    <p>
                                        Stay updated on the latest trends and technologies by
                                        participating in our tech events and workshops. Connect with
                                        industry experts, attend webinars, and expand your knowledge
                                        through hands-on experiences.
                                    </p>

                                    <p>
                                        Whether you're here to learn, connect, or advance your career,
                                        Coding Nexus is your partner in the exciting journey of
                                        technology. Explore our services, and let's code the future
                                        together!
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Base>
                )
            }
        </userContext.Consumer>
    )
}

export default Services