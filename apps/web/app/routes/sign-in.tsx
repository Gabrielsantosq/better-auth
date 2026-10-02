import { Form, useNavigate } from "react-router"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import { Input } from "@workspace/ui/components/input"
import { Button } from "@workspace/ui/components/button"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator
} from "@workspace/ui/components/field"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@workspace/ui/components/card"

import { Link } from "react-router"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const signIn = async () => {
    await authClient.signIn.email(
      {
        email,
        password
      },
      {
        onRequest: (ctx) => {
          console.log("request", ctx.onRequest)
        },
        onSuccess: (ctx) => {
          navigate("/home")
          console.log("funcionou")

        },
        onError: (ctx) => {
          alert(ctx.error.message)
        }
      },
    )
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Entre com seu email para logar sua conta</CardDescription>
            </CardHeader>
            <CardContent>
              <Form onSubmit={signIn}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </Field>
                  <FieldSeparator />
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Link to={"#"} className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                        Esqueceu sua senha?
                      </Link>
                    </div>
                    <Input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </Field>
                  <FieldSeparator />
                  <Field>
                    <Button type="submit">Login</Button>
                    <FieldDescription>
                      Não tenho uma conta <Link to={"#"}>Sign up</Link>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>

  )

}
