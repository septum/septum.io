"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

const createSuperAdminIfMissing = async () => {
  const admin = {
    username: process.env.STRAPI_ADMIN_USERNAME,
    password: process.env.STRAPI_ADMIN_PASSWORD,
    firstname: process.env.STRAPI_ADMIN_FIRSTNAME,
    lastname: process.env.STRAPI_ADMIN_LASTNAME,
    email: process.env.STRAPI_ADMIN_EMAIL,
    roles: [],
    blocked: false,
    isActive: true,
  };

  const admins = await strapi.query("user", "admin").find();

  if (admins.length === 0) {
    try {
      let superAdminRole = await strapi
        .query("role", "admin")
        .findOne({ code: "strapi-super-admin" });

      if (!superAdminRole) {
        superAdminRole = await strapi.query("role", "admin").create({
          name: "Super Admin",
          code: "strapi-super-admin",
          description:
            "Super Admins can access and manage all features and settings.",
        });
      }

      admin.roles.push(superAdminRole.id);

      admin.password = await strapi.admin.services.auth.hashPassword(
        admin.password
      );

      await strapi.query("user", "admin").create(admin);
    } catch (error) {
      strapi.log.error(
        `Couldn't create admin account during bootstrap: `,
        error
      );
    }
  }
};

const createApiWebsiteUserIfMissing = async () => {
  const user = {
    username: process.env.API_USER_USERNAME,
    email: process.env.API_USER_EMAIL,
    password: process.env.API_USER_PASSWORD,
    role: null,
    token: null,
    confirmed: true,
    blocked: false,
    created_by: 1,
    updated_by: 1,
  };

  const token = {
    token: process.env.API_USER_TOKEN,
    created_by: 1,
    updated_by: 1,
  };

  const users = await strapi.query("user", "users-permissions").find();
  const tokens = await strapi.query("token").find();

  if (users.length === 0 && tokens.length === 0) {
    try {
      const apiToken = await strapi.query("token").create(token);

      const authenticatedRole = await strapi
        .query("role", "users-permissions")
        .findOne({ type: "authenticated" });

      const permissions = await strapi
        .query("permission", "users-permissions")
        .find({ type: "application", role: authenticatedRole.id });

      await Promise.all(
        permissions.map((permission) =>
          strapi
            .query("permission", "users-permissions")
            .update({ id: permission.id }, { enabled: true })
        )
      );

      user.role = authenticatedRole.id;
      user.token = apiToken.id;
      user.password = await strapi.admin.services.auth.hashPassword(
        user.password
      );

      await strapi.query("user", "users-permissions").create(user);
    } catch (error) {
      strapi.log.error(`Couldn't create api user during bootstrap: `, error);
    }
  }
};

module.exports = async () => {
  await createSuperAdminIfMissing();
  await createApiWebsiteUserIfMissing();
};
