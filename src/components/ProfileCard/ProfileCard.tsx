import { ProfileCardWrapper, PropertyName } from "./styles";
import { User } from "./types";

function ProfileCard() {
  const userData: User = {
    avatar:
      "https://static.wikia.nocookie.net/garfield/images/0/07/Garfield_Movie.png",
    userName: "Garfield",
    profession: "Cat",
    hobbies: ["Sleep", "Eat"],
  };

  return (
    <ProfileCardWrapper>
      <img src={userData.avatar} />
      <h1>{userData.userName}</h1>
      <PropertyName>Profession: {userData.profession}</PropertyName>
      <PropertyName>Hobby: {userData.hobbies}</PropertyName>
    </ProfileCardWrapper>
  );
}

export default ProfileCard;
