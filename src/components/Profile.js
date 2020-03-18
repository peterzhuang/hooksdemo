import React from 'react';
import _ from 'lodash';

const Profile = () => {
    const [user, setUser] = React.useState({name: 'Alex', weight: 40})
 
    React.useEffect(() => {
        const previousUser = previousUserRef.current;
        console.log(`1-previousUser weight ${previousUser ? previousUser.weight : 'none'}`);
       if (!_.isEqual(previousUser, user)) {
           console.log('You need to do exercise!');
       }
    });

    const previousUserRef = React.useRef();
    React.useEffect(() => {
        previousUserRef.current = user;
        console.log(`2 - previousUser weight ${previousUserRef.current.weight}`);
    });
 
    const gainWeight = () => {
       const newWeight = Math.random() >= 0.5 ? user.weight : user.weight + 1
       setUser(user => ({...user, weight: newWeight}))
    }
 
    return (
       <>
          <p>Current weight: {user.weight}</p>
          <button onClick={gainWeight}>Eat burger</button>
       </>
    )
 }
 
 export default Profile;