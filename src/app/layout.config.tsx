import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img src="/mantle.svg" alt="logo" className="w-6 h-6" />
        <span className="text-black dark:text-white">7702 Workshop</span>
      </>
    ),
  },
};
