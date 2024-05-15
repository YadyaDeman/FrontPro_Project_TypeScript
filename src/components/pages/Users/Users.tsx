import Button from "components/Button/Button";
import { UserTitle, UserWrapper } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Users() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const goToHomePage = () => {
    navigate('/')
  }

  useEffect(() => {
    return () => {
      console.log('Component users unmounted')
    }
  }, []);

  return (
    <UserWrapper>
      <UserTitle>Cats page</UserTitle>
      <Button name='Go to Cats Home page' onButtonClick={goToHomePage} />
    </UserWrapper>
  )
}

export default Users;
