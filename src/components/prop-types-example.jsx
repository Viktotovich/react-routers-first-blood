import PropTypes from "prop-types";

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.PropTypes = {
  name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
  name: "Example Name",
};

export default RenderName;
