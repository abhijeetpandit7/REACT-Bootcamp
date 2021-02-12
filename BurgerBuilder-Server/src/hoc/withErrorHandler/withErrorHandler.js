// Handles error during http requests using functional component
import {useState, useEffect} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {

    return props => {

        const [error, setError] = useState(null)

        const requestInterceptor = axios.interceptors.request.use(request => {
            setError(null)
            return request;
        })

        const responseInterceptor = axios.interceptors.response.use(
            response => response, 
            error => {
                setError(error)
                return Promise.reject(error)
            }
        )

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(requestInterceptor)
                axios.interceptors.response.eject(responseInterceptor)
            };
        }, [requestInterceptor, responseInterceptor]);

        const errorConfirmedHandler = () => {
            setError(null)
        }
        
        return (
            <>
                <Modal show={error} click={errorConfirmedHandler}>
                    {/* If error is not null, display error message */}
                    {error && error.message}
                </Modal>
                <WrappedComponent {...props} />
            </>
        );

    }
}

export default withErrorHandler;