import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const SignUp = () => {
    return (
        <Form className='container-fluid d-flex flex-column justify-content-center align-items-center vh-100 bg-body-secondary'>
            <div className='border border-primary rounded p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
}

