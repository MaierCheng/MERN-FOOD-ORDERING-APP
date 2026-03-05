import { useCreateMyRestaurant, useGetMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restraurant-form/ManageRestaurantForm";


const ManageRestaurantPage = () => {
    const { createRestaurant, isPending } = useCreateMyRestaurant();
    const {restaurant} = useGetMyRestaurant();
    return <ManageRestaurantForm restaurant={restaurant} onSave={createRestaurant} isPending={isPending} />;
};

export default ManageRestaurantPage;