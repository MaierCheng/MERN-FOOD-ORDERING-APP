import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";


const UserProfilePage = () => {
  const { currentUser, isPending: isGetPending } = useGetMyUser();
  const { updateUser, isPending: isUpdatePending } = useUpdateMyUser();

  if (isGetPending) {
    return <span>Loading...</span>;
  }
  return (
    <UserProfileForm
    //   currentUser={currentUser}
      onSave={updateUser}
      isPending={isUpdatePending}
    />
  );
};

export default UserProfilePage;