import { useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";


const UserProfilePage = () => {
  const { updateUser, isPending } = useUpdateMyUser();

  return (
    <UserProfileForm
    //   currentUser={currentUser}
      onSave={updateUser}
      isPending={isPending}
    />
  );
};

export default UserProfilePage;