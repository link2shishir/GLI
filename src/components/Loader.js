import LoaderContainer from "./LoaderContainer";
const Loader = () => {
  return (
    <LoaderContainer>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderContainer>
  );
};

export default Loader;
