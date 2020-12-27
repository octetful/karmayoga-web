import logo from './logo.svg';
import {withRouter} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <header className="App-header">
                <h1>Karmayoga</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Your online task scheduler.
                </p>
            </header>
        </div>
    );
}

export default withRouter(Home);