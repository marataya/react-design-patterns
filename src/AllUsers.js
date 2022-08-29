import React from 'react'
import { UserInfo } from "./container/UserInfo";
import withUser from "./withUser";

const UserData1 = withUser(UserInfo, '01');
const UserData2 = withUser(UserInfo, '02');
const UserData3 = withUser(UserInfo, '03');


const AllUsers = () => {
  return (
    <>
      <UserData1 />
      <UserData2 />
      <UserData3 />
    </>
  )
}

export default AllUsers;