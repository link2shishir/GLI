import ListViewCourse from "./ListViewCourse";

const ListView = ({ courses }) => {
  return courses.map((data, index) => {
    return <ListViewCourse key={index} course={data} heightOfVideo={"100%"} />;
  });
};
export default ListView;
