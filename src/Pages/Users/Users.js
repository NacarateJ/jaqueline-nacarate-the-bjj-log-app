// import axios from "axios";
// import UserProfile from "../../Components/UserProfile/UserProfile";
// import React, { useEffect, useState } from "react";


// const USERS_API = `${process.env.REACT_APP_BACKEND_URL}/users`;


// const Users = () => {
//  const [users, setUsers] = useState([]);
//   const [editUserId, setEditUserId] = useState(null);

  
//   useEffect(() => {
//       const fetchUsers = async () => {
//           const { data } = await axios.get(USERS_API);
//           setUsers(data);
//         };
        
//         fetchUsers();
//     }, []);

//     const handleSubmit = (event) => {
//     event.preventDefault();
//     const newUser = {
//       name: event.target.userName.value,
//       email: event.target.userEmail.value,
//       belt_color: event.target.userBeltColor.value,
//     };
//     axios.post(USERS_API , newUser).then((response) => {
//       setUsers([...users, response.data]);
//     });
//     event.target.reset();
//   };


//    const handleEdit = (event, userId) => {
//     event.preventDefault();
//     setEditUserId(userId);
//   };

//     const handleUpdate = (event, userId) => {
//     event.preventDefault();
//     const values = {
//      name: event.target.userName.value,
//       email: event.target.userEmail.value,
//       belt_color: event.target.userBeltColor.value,
//     };
//     axios.patch(`${USERS_API }/${userId}`, values).then((response) => {
//       const updatedUsers = users.map((user) =>
//         user.id === response.data.id ? response.data : user
//       );
//       setUsers(updatedUsers);
//       setEditUserId(null);
//     });
//   };


//     const handleDelete = async (event, userId) => {
//     event.preventDefault();
//     const {
//       data: { deletedUserId },
//     } = await axios.delete(`${USERS_API }/${userId}`);
//     console.log(deletedUserId );
//     setUsers(
//       users.filter((user) => user.id !== deletedUserId)
//     );
//   };

    // return (
    //   <UserProfile
    //     users={users}
    //     handleEdit={handleEdit}
    //     handleUpdate={handleUpdate}
    //     handleDelete={handleDelete}
    //     editUserId={editUserId}
    //   />
    // );
// }

// export default Users;
