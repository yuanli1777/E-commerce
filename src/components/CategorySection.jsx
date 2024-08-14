import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = ["Electronics", "Clothing", "Jewelery", "Sports"];
  return (
    <div id="category-section" className="p-5">
      <Container>
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <div className="flex overflow-scroll scrollbar-hide">
        {/* categoryName and current are props  for transfer data to child component*/ }
        <CategoryButton  categoryName="All" current={true} />

        {categories.map((category) => (
          <CategoryButton key={category} categoryName={category} current={false} />
        ))}
      </div>
      </Container>
    </div>
  );
};

export default CategorySection;
