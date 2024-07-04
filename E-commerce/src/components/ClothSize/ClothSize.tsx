import { FC, useState } from "react";
import { ClothSizeInterface } from "../../interfaces";
import { sizeOptionProps } from "../../interfaces";
import "./ClothSize.scss";

export const ClothSize: FC<{ sizeOptions: Array<ClothSizeInterface> }> = ({
  sizeOptions,
}) => {
  const [size, setSize] = useState(sizeOptions[0]);
  return (
    <div className="cloth-size-container">
      <div className="title">
        Size : <span id="size"> {size.name}</span>
      </div>
      <SizeOption
        sizeOptions={sizeOptions}
        setSize={setSize}
        currentSize={size}
      />
    </div>
  );
};

export const SizeOption: FC<sizeOptionProps> = ({
  sizeOptions,
  setSize,
  currentSize,
}) => {
  const getClassName = (size_id: number) => {
    if (currentSize.id === size_id) return "size-option-button active-option";
    return "size-option-button";
  };

  return (
    <div className="cloth-size-options">
      {sizeOptions.map((size) => {
        return (
          <button
            className={getClassName(size.id)}
            onClick={() => setSize(size)}
          >
            {size.name}
          </button>
        );
      })}
    </div>
  );
};
