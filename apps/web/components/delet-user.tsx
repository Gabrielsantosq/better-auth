import { Button } from "@workspace/ui/components/button";
import { Form} from "react-router";
import { authClient } from "@/lib/auth-client";

export default function DeletUser() {

  const delet = async () => {
    await authClient.deleteUser({

      callbackURL: "/goodbye",
    })
  }
  return (
    <div>
      <Form onSubmit={delet}>
        <Button type="submit">
          DELETAR
        </Button>
      </Form>
    </div>
  )
}
