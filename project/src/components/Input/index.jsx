import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]", // Fixed typo in square shape
  round: "rounded-[10px]", // Fixed typo in round shape
};

const variants = {
  underline: {
    black_900: "text-gray-500 border-b border-black-900 border-solid",
  },
  fill: {
    color_white: "bg-color-white text-gray-500",
  },
};

const sizes = {
  md: "h-[74px] px-[26px] text-[16px]", // Fixed typos in size values
  xs: "h-[24px] px-3 text-[14px]", // Fixed size key from "XS" to "xs" to be consistent
  sm: "h-[74px] px-[26px]", // Fixed typo
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "color_white",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text border-solid ${shape && shapes[shape]} ${
          variants[variant] && variants[variant][color]
        } ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]), // Fixed typo
  size: PropTypes.oneOf(["md", "xs", "sm"]), // Fixed size key from "XS" to "xs"
  variant: PropTypes.oneOf(["underline", "fill"]),
  color: PropTypes.oneOf(["black_900", "color_white"]),
};

export { Input };
