import Link from "next/link";
import { Button } from "../components/form/Button";
import { Input } from "../components/form/Input";

export default function Signup() {
  return (
    <>
      <h2>Nýskráning</h2>
      <Input label="Nafn" name="name" />
      <Input label="Notendanafn" name="username" />
      <Input label="Lykilorð" name="password" />
      <Button>Skrá</Button>

      <p>&nbsp;</p>
      <p><Link href="/">Til baka</Link></p>
    </>
  )
}