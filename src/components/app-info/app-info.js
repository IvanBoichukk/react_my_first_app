
import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Employee registration in the FOP Boichuk company </h1>
            <h2>Total employees: {employees}</h2>
            <h2>Receive a premium: {increased}</h2>
        </div>
    )
}

export default AppInfo;