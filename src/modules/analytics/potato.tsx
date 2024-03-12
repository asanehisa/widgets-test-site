import { Module, ModuleConfig } from "@yext/pages/*";
import { AnalyticsProvider } from "@yext/pages-components";
import "./index.css";

export const config: ModuleConfig = {
  name: "analytics"
}

const analytics: Module = () => {
  return(
    <AnalyticsProvider templateData={{document}}>
      <div className="tailwind">
      </div>
    </AnalyticsProvider>
  )
}

export default analytics;
