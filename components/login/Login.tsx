import React from "react";
import Link from 'next/link';

type Props = {
  loggedin: boolean;
  onRegister?:React.MouseEventHandler<HTMLButtonElement>;
  onLogout?:React.MouseEventHandler<HTMLButtonElement>;
  name: string;
};

export function Login({
  loggedin = false,
  name,
  onRegister,
  onLogout,
}: Props):JSX.Element {
  if (loggedin) {
    return (
      <>
        <p>
          Skráður inn sem <strong>{name}</strong>
        </p>
        <button onClick={onLogout}>Útskrá</button>
      </>
    );
  }

  return (
    <>
      <p>
        <Link href="/login">Innskráning</Link>
      </p>
      <p>
      <Link href="/signup">Nýskráning</Link>
      </p>
    </>
  );
}
