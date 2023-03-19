import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const cate = router.query.category;
  return <h1>{cate}</h1>;
};

export default Category;
