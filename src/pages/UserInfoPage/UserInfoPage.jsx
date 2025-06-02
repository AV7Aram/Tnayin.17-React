import { useLocation, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import style from "./UserInfoPage.module.css";

export const UserInfoPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return null;
    }

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
                <p><strong>First Name:</strong> {user.firstName}</p>
                <p><strong>Last Name:</strong> {user.lastName}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
        </>
    );
}
