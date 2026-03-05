import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restraurant-form/ManageRestaurantForm";


const ManageRestaurantPage = () => {
    const { createRestaurant, isPending: isCreatePending } = useCreateMyRestaurant();
    const {restaurant} = useGetMyRestaurant();
    const {updateRestaurant, isPending: isUpdatePending} = useUpdateMyRestaurant();
    const isEditting = !!restaurant;

    return <ManageRestaurantForm restaurant={restaurant} onSave={isEditting ? updateRestaurant : createRestaurant} isPending={isCreatePending || isUpdatePending} />;
};

export default ManageRestaurantPage;