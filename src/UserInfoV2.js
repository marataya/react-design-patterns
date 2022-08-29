import useResource from "./useResource";
import useUser from "./useUser";

export const UserInfoV2 = ({ userId }) => {
  const user = useResource(`/users/${userId}`);
  const { name, age, hairColor, hobbies } = user || {};
  return (
    <>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{hairColor}</p>
      <h3>Hobbies</h3>
      <ul>
        {hobbies?.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </>
  )
}