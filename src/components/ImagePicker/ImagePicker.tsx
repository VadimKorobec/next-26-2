"use client";

import { useRef } from "react";
import styles from "./ImagePicker.module.css";

interface ImagePickerProps {
  label: string;
  name: string;
}

const ImagePicker = ({ label, name }: ImagePickerProps) => {
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const pickClickHandle = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
        />
        <button
          className={styles.button}
          type="button"
          onClick={pickClickHandle}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
