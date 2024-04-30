import "./styles.css";
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
    <div className="profile-card-wrapper">
      <img src={userData.avatar} />
      <h1>{userData.userName}</h1>
      <p className="property-name">Profession: {userData.profession}</p>
      <p className="property-name">Hobby: {userData.hobbies}</p>
    </div>
  );
}

export default ProfileCard;
