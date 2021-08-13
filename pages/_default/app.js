import { createSSRApp, h } from "vue";
import PageLayout from "./PageLayout.vue";

export { createApp };

function createApp(PageContext) {
  const { Page, pageProps } = PageContext;

  const PageWithLayout = {
    render() {
      return h(
        PageLayout,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          },
        }
      );
    },
  };
  const app = createSSRApp(PageWithLayout);
  app.config.globalProperties.$routeParams = PageContext.routeParams;

  return app;
}
