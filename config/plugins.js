module.exports = ({ env }) => ({
  'elasticsearch': {
      enabled: true,
      config: {
          indexingCronSchedule: "0 0 * * *",
          searchConnector: {
              host: env('ELASTICSEARCH_HOST'),
              username: "",
              password: "",
              certificate: "",
          },
          indexAliasName: "articles",
          mappings: {
              properties: {
                  id: { type: "keyword" },
                  title: { type: "text" },
                  subtitle: { type: "text" },
                  short_description: { type: "text" }
              }
          },
      },
  },
  'strapi-gtm-module': {
    enabled: true,
    config: {
      gtmId: env('GTM_ID'),
      preview: env.bool('GTM_PREVIEW', false),
    },
  },
});
