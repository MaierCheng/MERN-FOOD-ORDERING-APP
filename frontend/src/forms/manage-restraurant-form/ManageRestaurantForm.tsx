import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import { Button } from "@/components/ui/button";
import LoadingButton from "@/components/LoadingButton";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";

const formSchema = z
  .object({
    restaurantName: z.string().min(1, "restaurant name is required"),
    city: z.string().min(1, "city is required"),
    country: z.string().min(1, "country is required"),
    deliveryPrice: z.coerce
      .number({ message: "must be a valid number" })
      .min(1, "delivery price is required"),
    estimatedDeliveryTime: z.coerce
      .number({ message: "must be a valid number" })
      .min(1, "estimated delivery time is required"),
    cuisines: z.array(z.string()).nonempty({
      message: "please select at least one item",
    }),
    menuItems: z.array(
      z.object({
        name: z.string().min(1, "name is required"),
        price: z.coerce.number().min(1, "price is required"),
      }),
    ),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "image is required" }).optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
  });

type RestaurantFormInput = z.input<typeof formSchema>;
type RestaurantFormData = z.output<typeof formSchema>;
type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isPending: boolean;
};

const ManageRestaurantForm = ({ onSave, isPending}: Props) => {
  const form = useForm<RestaurantFormInput, unknown, RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });


  const onSubmit = (formDataJson: RestaurantFormData) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isPending ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
