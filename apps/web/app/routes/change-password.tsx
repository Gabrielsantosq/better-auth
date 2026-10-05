
import { Form, useSearchParams, useNavigate } from "react-router"
import { useState, type ReactElement } from "react"
import { authClient } from "@/lib/auth-client"
import { Input } from "@workspace/ui/components/input"
import { Button } from "@workspace/ui/components/button"

import {
  Field,
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



export default function ChangePassword() {

  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const token = searchParams.get("token")
  console.log(token)

  const [newpassword, setNewPassword] = useState("")


  const changepassword = async (
  e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    if (!token) {
      alert("token de recuperação nao encontrado")
      return
    }

    await authClient.resetPassword(
      {
      newPassword: newpassword,
      token: token,
    },
      {
        onRequest: (ctx) => {
          console.log(ctx.onRequest)
        },
        onSuccess: (ctx) => {
          navigate("/sign-in")
        },
        onError: (ctx) => {
          alert(ctx.error.message)
        }
    }
    )
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Entre com seu email para logar sua conta</CardDescription>
          </CardHeader>
          <CardContent>
            <Form onSubmit={changepassword}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="newpassword">Nova senha</FieldLabel>
                  <Input
                    type="password"
                    id="newpassword"
                    value={newpassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="newpassword"
                    required
                  />
                </Field>
                <FieldSeparator />
                <Field>
                  <Button type="submit">
                    Redefinir senha
                  </Button>
                </Field>
              </FieldGroup>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
