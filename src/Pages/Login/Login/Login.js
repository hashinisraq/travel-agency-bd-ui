import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGooogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        history.push(location.state?.from || '/home');
    }

    return (
        <div style={{ padding: "80px" }}>
            <h3><u>Please Login</u></h3>
            <Button
                onClick={() => {
                    signInUsingGooogle();
                    handleGoogleSignIn();
                }}
                variant="secondary">Google Sign In</Button>
        </div>
    );
};

export default Login;