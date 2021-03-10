
import './profile.styles.css';
import ProfileHeaderComponent from '../../components/profile-header/profile-header.component';
import ProfileMainComponent from '../../components/profile-main/profile-main.component';
import LoginFooterComponent from '../../components/login-footer/login-footer.component';

const Profile = () => {
    return (
        <div className="profile">
            <ProfileHeaderComponent />
            <ProfileMainComponent />
            <LoginFooterComponent />
        </div>
    )
}

export default Profile;
