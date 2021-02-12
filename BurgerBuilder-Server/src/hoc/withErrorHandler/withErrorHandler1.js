// Handles error during http requests using Class based component which uses deperecated syntax hence switch to functional
import {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        UNSAFE_componentWillMount() {
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null})
                return request;
            })
            this.responseInterceptor = axios.interceptors.response.use(
                response => response, 
                error => {
                    this.setState({error: error})
                }
            )
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor)
            axios.interceptors.response.eject(this.responseInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
        
        render() {
            return (
                <>
                    <Modal show={this.state.error} click={this.errorConfirmedHandler}>
                        Something went wrong...
                        {this.state.error && this.state.error.message}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}

export default withErrorHandler;