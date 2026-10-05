import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [

  index("routes/home.tsx"),

  route("sign-up","routes/sign-up.tsx"),
  route("/sign-in", "routes/sign-in.tsx"),

  route("/change-password", "routes/change-password.tsx"),
  route("/request-password", "routes/request-password.tsx"),

  route("/api/auth/*", "routes/api.auth.$.ts"),
  route("/goodbye", "routes/goodbye.tsx"),

] satisfies RouteConfig
