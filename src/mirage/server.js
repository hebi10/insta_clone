import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/users", () => {
        return {
          users: [
            { id: 1, name: "해비" },
            { id: 2, name: "홍길동" },
          ],
        };
      });

      this.post("/login", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        if (attrs.username === "admin" && attrs.password === "1234") {
          return { ok: true, token: "fake-jwt-token" };
        }
        return new Response(401, {}, { error: "Invalid credentials" });
      });
    },
  });
}
