module.exports = ({ env }) => ({
  upload: !env.bool("STRAPI_LOCAL_UPLOAD_PROVIDER") && {
    provider: "digital-ocean",
    providerOptions: {
      key: env("DO_SPACE_ACCESS_KEY"),
      secret: env("DO_SPACE_SECRET_KEY"),
      endpoint: env("DO_SPACE_ENDPOINT"),
      space: env("DO_SPACE_BUCKET"),
      directory: env("DO_SPACE_DIRECTORY"),
      cdn: env("DO_SPACE_CDN"),
    },
  },
});
