import { FieldErrors, UseFormRegister } from "react-hook-form";
import { adminProductInterface } from "../../../interfaces/adminProductInterface";
import { DialogContent } from "@mui/material";
import NameField from "./formFields/NameField";
import CategoryField from "./formFields/CategoryField";
import DescriptionField from "./formFields/DescriptionField";
import SupplierField from "./formFields/SupplierField";
import QuantityField from "./formFields/QuantityField";
import DiscountPercentageField from "./formFields/DiscountPercentageField";
import SalePriceField from "./formFields/SalePriceField";
import CostPriceField from "./formFields/CostPriceField";
import URLImageField from "./formFields/URLImageField";
import AltImageField from "./formFields/AltImageField";
import IsForSaleField from "./formFields/IsForSaleField";

interface Props {
  product: adminProductInterface;
  errors: FieldErrors<adminProductInterface>;
  register: UseFormRegister<adminProductInterface>;
}

const HolderForm = ({ product, errors, register }: Props) => {
  return (
    <DialogContent>
      <CategoryField
        register={register}
        error={errors.category?.message}
        defaultValue={product.category}
      />
      <NameField
        register={register}
        error={errors.name?.message}
        defaultValue={product.name}
      />
      <DescriptionField
        register={register}
        error={errors.description?.message}
        defaultValue={product.description}
      />
      <SupplierField
        register={register}
        error={errors.supplier?.message}
        defaultValue={product.supplier}
      />
      <QuantityField
        register={register}
        error={errors.quantity?.message}
        defaultValue={product.quantity}
      />
      <IsForSaleField register={register} defaultValue={product.isForSale} />
      <CostPriceField
        register={register}
        error={errors.costPrice?.message}
        defaultValue={product.costPrice}
      />
      <SalePriceField
        register={register}
        error={errors.salePrice?.message}
        defaultValue={product.salePrice}
      />
      <DiscountPercentageField
        register={register}
        error={errors.discountPercentage?.message}
        defaultValue={product.discountPercentage}
      />
      <URLImageField
        register={register}
        error={errors.imageUrl?.message}
        defaultValue={product.imageUrl}
      />
      <AltImageField
        register={register}
        error={errors.imageAlt?.message}
        defaultValue={product.imageAlt}
      />
    </DialogContent>
  );
};
export default HolderForm;
