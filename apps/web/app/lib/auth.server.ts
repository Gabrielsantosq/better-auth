import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { db } from "../db/client";
import {schema} from "../db/schema/index"
import { sendEmail } from "./email";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: "Mude sua senha",
        html: `
        <p>Clique no link Abaixo para confirmar a alteração da senha </p>

        <a href="${url}">alteração</a>
        `
      })
    }
  },
  user: {
    deleteUser: {
      enabled: true,
      sendDeleteAccountVerification: async (
        {
        user,
        url,
        }
      ) => {
       await sendEmail({
         to: user.email,
         subject: "Verifique seu E-mail",
         html: `
          <p> Clique no link Abaixo para confirmar a deleção da conta</p>

          <a href="${url}">Confirmar deleção</a>
         `
        })
      },
    }
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({user, url}) => {
      await sendEmail({
        to: user.email,
        subject: "Verifique seu E-mail!",
        html: `
        <p>Ola!${user.name}</p>

        <p>Clique no link Abaixo para verificar seu E-mail</p>

        <a href="${url}">Verifique seu E-mail</a>
        `
      })
    },

  }
});
