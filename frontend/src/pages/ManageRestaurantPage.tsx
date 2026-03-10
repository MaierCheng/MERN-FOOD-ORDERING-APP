import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restraurant-form/ManageRestaurantForm";


const ManageRestaurantPage = () => {
    const { createRestaurant, isPending: isCreatePending } = useCreateMyRestaurant();
    const {restaurant} = useGetMyRestaurant();
    const {updateRestaurant, isPending: isUpdatePending} = useUpdateMyRestaurant();
    const isEditing = !!restaurant;

    return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 p-10 rounded-lg"
      >
        <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          restaurant={restaurant}
          onSave={isEditing ? updateRestaurant : createRestaurant}
          isPending={isCreatePending || isUpdatePending}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;