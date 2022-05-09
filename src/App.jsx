import './App.css';

const company = {
    name: 'Google',
    numberOfEmployees: 6734,
    headquarters: 'San Franscisco',
    logo: 'googleLogo.png',
    homepage: 'http://www.google.com'
};

function App() {
    return (
        <div className="App">
            <div className="company">
                <div className="logo">
                    <a href={company.homepage}>
                        <img
                            src="/images/googleLogo.png"
                            alt="the logo of Google"
                        />
                    </a>
                </div>
                <div className="info">
                    <div className="name">Name: {company.name}</div>
                    <div className="numberOfEmployees">
                        Employees: {company.numberOfEmployees}
                    </div>
                    <div className="headquarters">
                        Headquarters: {company.headquarters}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
