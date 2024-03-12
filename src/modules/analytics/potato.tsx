import { Module, ModuleConfig } from "@yext/pages/*";
import { AnalyticsProvider, Link } from "@yext/pages-components";
import "./index.css";

export const config: ModuleConfig = {
  name: "analytics"
}

const analytics: Module = () => {
  return(
    <AnalyticsProvider templateData={{document}} enableDebugging={true}>
      <div className="tailwind">
        Analytics 
        <Link href="https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg.webp">
          Test Link
        </Link>
      </div>
    </AnalyticsProvider>
  )
}

export default analytics;
