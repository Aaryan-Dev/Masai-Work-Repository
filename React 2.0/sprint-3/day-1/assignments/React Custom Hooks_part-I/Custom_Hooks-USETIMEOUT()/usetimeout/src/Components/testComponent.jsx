import useTimeout from "../Hooks/useTimeout";

const TestComponent = () => {
  const showText = useTimeout(2000);

  return <>{!showText ? "Loading..." : "This is Text"}</>;
};

export default TestComponent;
