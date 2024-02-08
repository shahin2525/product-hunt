import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

interface CategoryProps {
  category: string;
  isChecked: boolean;

  onCategoryChange: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({
  category,
  isChecked,
  onCategoryChange,
}) => {
  const handleCheckboxChange = () => {
    onCategoryChange(category);
  };

  return (
    <div className="flex items-center space-x-3 mt-2 font-semibold">
      <Checkbox
        id={category}
        checked={isChecked}
        onCheckedChange={handleCheckboxChange}
      />
      <Label htmlFor={category}>{category}</Label>
    </div>
  );
};

export default Category;
