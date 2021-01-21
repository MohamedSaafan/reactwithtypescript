import React from "react";

interface Props {
  color: string;
}
const Child = ({ color }: Props) => {
  return (
    <div>
      Child show some color provided by the Parent and the color is:{" "}
      <strong>{color}</strong>
    </div>
  );
};

export const ChildASFC: React.FC<Props> = ({ color }) => {
  return <div>{color}</div>;
};

// now typescript knows that ChildASFC is a React Compoent and sees all of its properties
// like displayName and defaultProps and contextTypes propTypes

// also there is another benefits of using the second way (React.FC) is that if you tried to pass a children then you should handl
// it in the props interface (that happens when you make use of the first one)
// but if you used the second one then React.FC places that children prop to your props interface even if that props doesn't exist

export default Child;
