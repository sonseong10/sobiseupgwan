import React, { useEffect, useState } from "react";
import { Text, TextStyle } from "react-native";

/**
 * Props for the CountUpDigitByDigit component
 * @property {number} to - Final number to count up to
 * @property {number} [duration=1000] - Duration of the count-up animation in milliseconds
 * @property {@link TextStyle} [style] - Optional style object for the Text component
 */
type CountUpTextProps = {
  to: number;
  duration?: number;
  style?: TextStyle;
};

/**
 * A React Native component that animates a number by counting up digit by digit,
 * starting from the rightmost digit (ones place) and proceeding leftward.
 *
 * Example: 0000 → 0004 → 0034 → 0234 → 1234
 */
const CountUpDigitByDigit: React.FC<CountUpTextProps> = ({
  to,
  duration = 1000,
  style,
}) => {
  const [displayDigits, setDisplayDigits] = useState<string[]>([]);

  useEffect(() => {
    const targetDigits = String(to).split("").map(Number);
    const current = new Array(targetDigits.length).fill(0);

    const total = targetDigits.reduce((sum, d) => sum + d, 0);

    const eachStepTime = Math.min(duration / total, 60);

    let timeOffset = 0;
    const timeoutIds: NodeJS.Timeout[] = [];

    const reversedIndexArray = [...targetDigits]
      .map((_, index) => index)
      .reverse();

    reversedIndexArray.forEach((digitIdx) => {
      const targetDigit = targetDigits[digitIdx];
      for (let i = 0; i <= targetDigit; i++) {
        const timeoutId = setTimeout(() => {
          current[digitIdx] = i;
          setDisplayDigits([...current]);
        }, eachStepTime * (timeOffset + i));
        timeoutIds.push(timeoutId);
      }
      timeOffset += targetDigit;
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [to, duration]);

  return (
    <Text style={style}>{Number(displayDigits.join("")).toLocaleString()}</Text>
  );
};

export default CountUpDigitByDigit;
