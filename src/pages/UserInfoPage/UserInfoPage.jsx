import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import style from "./UserInfoPage.module.css";

export const UserInfoPage = () => {
    const location = useLocation()
    const navigate = useNavigate();

    return (
        <>
            <button
                className={style.backButton}
                onClick={() => navigate(-1)}
            >
                <FaArrowLeft className={style.arrowIcon} />
                Go Back
            </button>
            <div className={style.userDetails}>
                <h2>👤 User Details</h2>
                <p><strong>First Name:</strong> {location.state.firstName}</p>
                <p><strong>Last Name:</strong> {location.state.lastName}</p>
                <p><strong>Email:</strong> {location.state.email}</p>
            </div>
        </>
    );
}
