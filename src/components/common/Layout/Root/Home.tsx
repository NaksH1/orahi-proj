import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import './common.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'src/styles/homeStyles.css'









const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        skills: '',
        experince: '',
        language: ''
    });


    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    console.log('formData', formData);



    const handleSubmit = (e) => {

        e.preventDefault();
        const userData = {
            name: "smriti1",
            skills: "python",
            experince: "2",
            language: "English"
        };
        axios
            .post("http://192.168.0.109:8000/api/interview/get_candidate_details", formData)
            .then((response) => {
               
              localStorage.setItem("formData",JSON.stringify(formData)) 
              navigate('/');   
                         
            })
            .catch((error) => {

                if (error.response) {
                    console.log(error.response);
                } else if (error.request) {
                } else {
                    console.log(error);
                }
            });
    };

    return (
        <div className='home_scrren_main'>
        <div className='home_scrren'>
            <Card className="text-center">
                <Card.Header>form</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name.." />
                        </Form.Group>
                        <br />
                        <Form.Label>Skill</Form.Label>

                        <Form.Select
                            name="skills"
                            value={formData.skills}
                            onChange={handleChange}
                            aria-label="Default select example">
                            <option>--select--</option>
                            <option value="Front-end">Front-end</option>
                            <option value="Back-end">Back-end</option>
                        </Form.Select>
                        <br />
                        <Form.Label>Work Experience </Form.Label>
                        <Form.Select
                            name="experince"
                            value={formData.experince}
                            onChange={handleChange}
                            aria-label="Default select example">
                            <option>--select--</option>
                            <option value="Fresher">Fresher</option>
                            <option value="Experience">Experience</option>
                        </Form.Select>

                        <br />
                        <Form.Label>Language </Form.Label>
                        <Form.Select
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            aria-label="Default select example">
                            <option>--select--</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </Form.Select>

                    </Form>
                    <br />
                    <Button onClick={handleSubmit} variant="primary">let's start</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>

        </div>
        </div>
    )
}

export default Home