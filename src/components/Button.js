import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    className("flex items-center px-3 py-1.5 border text-white my-1 ", {
      "border-blue-500 bg-blue-500 ": primary,
      "border-gray-900 bg-gray-900 ": secondary,
      "border-green-500 bg-green-500 ": success,
      "border-yellow-400 bg-yellow-400 ": warning,
      "border-red-500 bg-red-500 ": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    })
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of props: (primary, secondary, success, warning, danger) can be true!"
      );
    }
  },
};
export default Button;
