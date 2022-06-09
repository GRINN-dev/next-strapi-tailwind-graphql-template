module.exports = ({ env }) => ({
  /* upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        host: env("AWS_HOST"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
    },
  }, */
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 100,
      maxLimit: 200,
    },
  },
  "content-versioning": {
    enabled: true,
  },
});
