import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm'
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm'
function Account() {
  return (
    <>
  <Heading as="h1">Update your Data</Heading>
  <UpdateUserDataForm />
  <Heading as="h1">Update your Password</Heading>
  <UpdatePasswordForm />
    </>
  );
}

export default Account;
