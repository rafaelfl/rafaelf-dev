"use client";

import { MouseEventHandler, ReactNode, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { tv } from "tailwind-variants";

const overlay = tv({
  base: "fixed top-0 left-0 z-10 w-screen h-screen bg-black/70 flex justify-center items-center",
});

interface PopupModalProps {
  children: ReactNode;
}

const PopupModal = ({ children }: PopupModalProps) => {
  const overlayRef = useRef(null);
  const wrapperRef = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlayRef.current || e.target === wrapperRef.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlayRef, wrapperRef]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflowY = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflowY = "visible";
    };
  }, [onKeyDown]);

  return (
    <div
      id="modal"
      className="z-20 flex justify-center items-center"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div ref={overlayRef} className={overlay()} onClick={onClick}>
        <div
          ref={wrapperRef}
          className="overflow-hidden w-11/12 md:w-10/12 h-full mx-auto max-w-7xl max-h-[80%] flex justify-center items-center"
        >
          <button
            type="button"
            className="fixed top-10 right-10 text-darkGray rounded-md"
            onClick={onDismiss}
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-10 h-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
