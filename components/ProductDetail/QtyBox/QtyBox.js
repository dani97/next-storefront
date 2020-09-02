import React, { useRef } from "react";
import style from "./QtyBox.module.css";

const QtyBox = ({ defaultValue, stepper }) => {
  let qtyBoxRef = useRef(null);

  const increaseQty = () => {
    const value = parseInt(qtyBoxRef.current.value);
    qtyBoxRef.current.value = value + stepper;
  };

  const decreaseQty = () => {
    const value = parseInt(qtyBoxRef.current.value);
    if (value - stepper > 1) {
      qtyBoxRef.current.value = value - stepper;
    } else {
      qtyBoxRef.current.value = 1;
    }
  };

  return (
    <div>
      <button onClick={decreaseQty} className={style.qtyButtons}>
        -
      </button>
      <input
        ref={qtyBoxRef}
        type="number"
        className={style.qtyBox}
        defaultValue={defaultValue}
      />
      <button onClick={increaseQty} className={style.qtyButtons}>
        +
      </button>
    </div>
  );
};

export default QtyBox;
