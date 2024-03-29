import {
  ActiveModelSerializer,
  createServer,
  Factory,
  Model,
  Response,
  RestSerializer,
} from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent();
        },
      }),
    },

    seeds(server) {
      server.createList("user", 100);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", function (schema, request) {
        const { page = 1, users_per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;
        const pageStart = (Number(page) - 1) * Number(users_per_page);
        const pageEnd = pageStart + Number(users_per_page);

        const users = this.serialize(schema.all("user"))
          .users// .sort((a,b ) => a.created_at - b.created_at)
          .slice(pageStart, pageEnd);

        // const users = schema.all("user");
        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
