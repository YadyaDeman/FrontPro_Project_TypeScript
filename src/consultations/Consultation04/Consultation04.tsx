import Counter from "components/Counter/Counter";
import { Consultation04Component } from "./styles";
import { useState } from "react";

function Consultation04() {
  const [value, setValue] = useState<number>(0);

  const onMinusClick = (): void => {
    if (value > -10) {
      setValue((preValue) => preValue - 1);
    }
  };

  const onPlusClick = () => {
    if (value < 10) {
      setValue((preValue) => preValue + 1);
    }
  };

  return (
    <Consultation04Component>
      <Counter
        countValue={value}
        onMinusClick={onMinusClick}
        onPlusClick={onPlusClick}
      />
    </Consultation04Component>
  );
}

export default Consultation04;
