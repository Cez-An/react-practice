import type { ReactNode } from "react";

type Props = {
    icon:ReactNode;
    fun?:()=>void;
    className?:string;
    children?:ReactNode;
    disabled?: boolean;

}

export function Button({ icon, fun, className, disabled }: Props) {
  return (
    <button
      onClick={fun}
      className={`${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}