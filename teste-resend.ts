
import { sendEmail } from "./apps/web/app/lib/email"

const result = await sendEmail({
  to: "gabrielsantosq29@gmail.com",
  subject: "Teste",
  html: "<p> Funcionou!!!</p>"
})

console.log(result)
