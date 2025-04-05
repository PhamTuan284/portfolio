import React, { useState } from 'react';
import { Form, Button, Alert, TabContainer, Nav, TabContent, TabPane } from 'react-bootstrap';
import './LoginCase.scss';

const LoginCase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    general: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      general: ''
    };
    let isValid = true;

    if (activeTab === 'signup') {
      if (!formData.name) {
        newErrors.name = 'Name is required';
        isValid = false;
      }
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (activeTab === 'signup') {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({ ...errors, general: '' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setFormData({ email: '', password: '', confirmPassword: '', name: '' });
    } catch (error) {
      setErrors({ ...errors, general: `${activeTab === 'login' ? 'Login' : 'Signup'} failed. Please try again.` });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTabSelect = (tab: string | null) => {
    if (tab === 'login' || tab === 'signup') {
      setActiveTab(tab);
      setErrors({ email: '', password: '', confirmPassword: '', name: '', general: '' });
      setShowSuccess(false);
    }
  };

  return (
    <div className="login-case">
      <div className="login-container">
        <h2>{activeTab === 'login' ? 'Login' : 'Create Account'}</h2>
        <p className="description">
          {activeTab === 'login' 
            ? 'Login to your account'
            : 'Create a new account to get started'}
        </p>

        <TabContainer activeKey={activeTab} onSelect={handleTabSelect}>
          <Nav variant="tabs" className="auth-tabs">
            <Nav.Item>
              <Nav.Link eventKey="login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="signup">Create Account</Nav.Link>
            </Nav.Item>
          </Nav>

          <TabContent className="auth-content">
            <TabPane eventKey="login">
              <Form onSubmit={handleSubmit} className="auth-form">
                {errors.general && (
                  <Alert variant="danger" onClose={() => setErrors({ ...errors, general: '' })} dismissible>
                    {errors.general}
                  </Alert>
                )}

                {showSuccess && (
                  <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                    {activeTab === 'login' ? 'Login successful!' : 'Account created successfully!'}
                  </Alert>
                )}

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="Enter email"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isLoading}
                  className="submit-button"
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
              </Form>
            </TabPane>

            <TabPane eventKey="signup">
              <Form onSubmit={handleSubmit} className="auth-form">
                {errors.general && (
                  <Alert variant="danger" onClose={() => setErrors({ ...errors, general: '' })} dismissible>
                    {errors.general}
                  </Alert>
                )}

                {showSuccess && (
                  <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                    Account created successfully!
                  </Alert>
                )}

                <Form.Group controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    placeholder="Enter your full name"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="Enter email"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    placeholder="Enter password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                    placeholder="Confirm password"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={isLoading}
                  className="submit-button"
                >
                  {isLoading ? 'Creating account...' : 'Create Account'}
                </Button>
              </Form>
            </TabPane>
          </TabContent>
        </TabContainer>
      </div>
    </div>
  );
};

export default LoginCase; 