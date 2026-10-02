
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


export default function RequestPassword(){

  const [email, setEmail] = useState("")

  const requestpassword = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault()
    await authClient.requestPasswordReset({

      email: email,
      redirectTo: '/change-password'
    },
      {
        onRequest: (ctx) => {
          console.log(ctx.onRequest)
        },
        onSuccess: (ctx) => {
          console.log("sucesso")
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
            <CardTitle>Request password</CardTitle>
            <CardDescription>Entre com seu email para redefinição</CardDescription>
          </CardHeader>
          <CardContent>
            <Form onSubmit={requestpassword}>
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
                <Field>
                  <Button type="submit">
                    Reset
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
