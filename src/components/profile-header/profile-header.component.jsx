import './profile-header.styles.css';

const ProfileHeader = () => {
    return (
        <div className="profile-header">
            <div className="profile-header-company">
                PEEKaMEET
            </div>
            <div className="profile-header-buttons">
                <button className="profile-header-buttons__logout">Logout</button>
            </div>
        </div>
    )
}

export default ProfileHeader;