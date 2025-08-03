import React from 'react';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';

function Profile() {
    const {user} = useContext(UserContext);
    
    if (!user) return <div>Hum Aapko Nahi Jante</div>

    return <div>Khushamdid {user.username} Sahab</div>
}
export default Profile;
