import React, { useCallback, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './SaveButton.module.css';

const SaveButtonStyle = {
  DEFAULT: 0,
  LOADING: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

export default function SaveButton({ className, onSave }) {
  const [saveButtonStyle, setSaveButtonStyle] = useState(
    SaveButtonStyle.DEFAULT,
  );
  const timeoutID = useRef(undefined);
  const handleSaveCode = useCallback(() => {
    setSaveButtonStyle(SaveButtonStyle.LOADING);
    onSave()
      .then(() => {
        setSaveButtonStyle(SaveButtonStyle.SUCCESS);
        timeoutID.current = window.setTimeout(() => {
          setSaveButtonStyle(SaveButtonStyle.DEFAULT);
        }, 1000);
      })
      .catch(() => {
        setSaveButtonStyle(SaveButtonStyle.FAILURE);
        timeoutID.current = window.setTimeout(() => {
          setSaveButtonStyle(SaveButtonStyle.DEFAULT);
        }, 1000);
      });
  }, [onSave]);
  useEffect(() => () => window.clearTimeout(timeoutID.current), []);
  return (
    <button
      type="button"
      aria-label="Save"
      title="Save"
      className={clsx(
        'clean-btn',
        className,
        styles.saveButton,
        (saveButtonStyle === SaveButtonStyle.LOADING &&
          styles.saveButtonLoading) ||
          (saveButtonStyle === SaveButtonStyle.SUCCESS &&
            styles.saveButtonSuccess) ||
          (saveButtonStyle === SaveButtonStyle.FAILURE &&
            styles.saveButtonFailure),
      )}
      onClick={handleSaveCode}
    >
      <span className={styles.saveButtonIcons} aria-hidden="true">
        <svg className={styles.saveButtonIcon} viewBox="0 0 24 24">
          <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
        </svg>
        <svg className={styles.saveButtonLoadingIcon} viewBox="0 0 24 24">
          <path d="m6 2 .01 6L10 12l-3.99 4.01L6 22h12v-6l-4-4 4-3.99V2H6zm10 14.5V20H8v-3.5l4-4 4 4z" />
        </svg>
        <svg className={styles.saveButtonSuccessIcon} viewBox="0 0 24 24">
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
        <svg className={styles.saveButtonFailureIcon} viewBox="0 0 24 24">
          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </span>
    </button>
  );
}
