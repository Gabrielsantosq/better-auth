import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("routes/sign-up.tsx"),
  route("/home", "routes/home.tsx"),
  route("/sign-in", "routes/sign-in.tsx"),
  route("/api/auth/*", "routes/api.auth.$.ts"),
  route("/goodbye", "routes/goodbye.tsx"),
  route("/change-password", "routes/change-password.tsx"),
  route("/request-password", "routes/request-password.tsx")

] satisfies RouteConfig
