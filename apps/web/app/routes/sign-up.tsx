import { Button } from "@workspace/ui/components/button"
import {Input} from "@workspace/ui/components/input"
import { authClient } from "@/lib/auth-client"
import { Form, Link, useNavigate } from "react-router"
import { useState } from "react"
import{
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@workspace/ui/components/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldSeparator
} from "@workspace/ui/components/field"



export default function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirm_Password] = useState('')
  const navigate = useNavigate()

  const signUp = async () => {

    console.log("SIGNUP FUNCIONOU")
    await authClient.signUp.email(
      {
        name,
        email,
        password,
        callbackURL: "/home"
      },
      {
        onRequest: (ctx) => {
          console.log("Carregando...")
        },
        onSuccess: (ctx) => {
          console.log("DEU CERTO")
          navigate('/home')

        },
        onError: (ctx) => {
          alert(ctx.error)
          console.log(ctx)
        }
      }
    )
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Crie sua Conta</CardTitle>
            <CardDescription>Insira suas informações para criar sua conta</CardDescription>
          </CardHeader>
          <CardContent>
            <Form onSubmit={signUp}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                  />
                </Field>
                <FieldSeparator />
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Exemplo@gmail.com"
                  required
                  />
                </Field>
                <FieldSeparator />
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="*********"
                    required
                  />
                  <FieldDescription>
                    Usaremos isso para entrar em contato com você.
                    Não compartilharemos seu e-mail com mais ninguém.
                  </FieldDescription>
                </Field>
                <FieldSeparator />
                <Field>
                  <FieldLabel htmlFor="confirm-password">Confirm-Password</FieldLabel>
                  <Input
                    type="password"
                    id="confirm-password"
                    value={confirm_password}
                    onChange={(e) => setConfirm_Password(e.target.value)}
                    placeholder="**********"
                    required
                  />
                  <FieldDescription>Por favor confirme sua senha</FieldDescription>
                </Field>
                <FieldSeparator />
                <FieldGroup>
                  <Field>
                    <Button type="submit">Crie Sua Conta</Button>
                    <FieldDescription>
                      Ja tem uma conta? <Link to={"#"}>Sign-in</Link>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </FieldGroup>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )

}
