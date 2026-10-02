import { auth } from "@/lib/auth.server"
import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router"

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("🔥 AUTH ACTION:", request.method, request.url)
    return auth.handler(request)
}

export async function action({ request }: ActionFunctionArgs) {
    return auth.handler(request)
}
