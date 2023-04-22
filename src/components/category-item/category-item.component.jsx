import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  console.log(title, imageUrl);
  return (
    <div className="category-container">
      <div
        className="category-body-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
