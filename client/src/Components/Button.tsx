import * as React from "react";

interface IProps {
  bgc?: string;
  bgch?: string;
  color?: string;
  outline?: boolean;
  disabled?: boolean;
  loading?: boolean;
  rounded?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  classes?: string;
}

const Button: React.FC<IProps> = ({
  bgc = "white",
  bgch = "gray-700",
  color = "gray-700",
  outline = true,
  disabled = false,
  loading = false,
  rounded = false,
  children = "Save",
  type = "button",
  onClick,
  classes = "",
}) => {
  return (
    <button
      type={type}
      className={`${outline && `border border-${bgch}`} bg-${
        disabled || loading ? "gray-200" : bgc
      } text-${color} ${
        rounded && `rounded-${rounded}`
      } px-4 py-2 transition duration-200 ease select-none ${
        !disabled &&
        !loading &&
        `hover:text-white hover:bg-${disabled || loading ? "gray-200" : bgch}`
      } focus:outline-none focus:shadow-outline ${
        (disabled || loading) && "cursor-auto text-opacity-75"
      } ${classes}`}
      disabled={loading || disabled}
      onClick={onClick}
    >
      {loading && <i className="bx bx-loader-alt bx-spin mr-2" />}
      {children}
    </button>
  );
};

export default Button;