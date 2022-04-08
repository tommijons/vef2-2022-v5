import Link from "next/link";
import { Button } from "../components/form/Button";
import { Input } from "../components/form/Input";

export default function Login() {
  return (
    <>
      <h2>Innskráning</h2>
      <Input label="Notendanafn" name="username" />
      <Input label="Lykilorð" name="password" />
      <Button>Innskrá</Button>

      <p>&nbsp;</p>
      <p><Link href="/">Til baka</Link></p>
    </>
  )
}