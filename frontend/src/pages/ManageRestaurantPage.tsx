import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restraurant-form/ManageRestaurantForm";


const ManageRestaurantPage = () => {
    const { createRestaurant, isPending } = useCreateMyRestaurant();
    return <ManageRestaurantForm onSave={createRestaurant} isPending={isPending} />;
};

export default ManageRestaurantPage;