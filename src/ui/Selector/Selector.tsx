import { useState } from "react";
import styles from "./Selector.module.scss";

export interface Option {
  value: string;
  label: string;
}

export const Selector = ({
  options,
  onSelect,
}: {
  options: Option[];
  onSelect: (option: Option) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div
      // className={`${isOpen ? styles.open : ""} ${styles.select}`}
      className={styles.select}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.selectedOption}>
        <div className={`${isOpen ? styles.open : ""} ${styles.wrap}`}>
          {selectedOption ? selectedOption.label : "Select Option"}
          {isOpen ? (
            <div className={styles.openSvg}>
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.91207 5.03711C4.22748 5.37095 4.73972 5.37095 5.05514 5.03711L8.285 1.6186C8.51715 1.37289 8.58528 1.007 8.45911 0.686516C8.33295 0.366031 8.04024 0.157715 7.71221 0.157715L1.25247 0.160386C0.926965 0.160386 0.631735 0.368702 0.505568 0.689187C0.379402 1.00967 0.450055 1.37556 0.679678 1.62127L3.90954 5.03978L3.91207 5.03711Z"
                  fill="white"
                />
              </svg>
            </div>
          ) : (
            <svg
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.91207 5.03711C4.22748 5.37095 4.73972 5.37095 5.05514 5.03711L8.285 1.6186C8.51715 1.37289 8.58528 1.007 8.45911 0.686516C8.33295 0.366031 8.04024 0.157715 7.71221 0.157715L1.25247 0.160386C0.926965 0.160386 0.631735 0.368702 0.505568 0.689187C0.379402 1.00967 0.450055 1.37556 0.679678 1.62127L3.90954 5.03978L3.91207 5.03711Z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option: any) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
