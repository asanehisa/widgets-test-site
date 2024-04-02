import { Module, ModuleConfig, ModuleProps } from "@yext/pages/*";
import { AnalyticsProvider } from "@yext/pages-components";
import "./index.css";
import { SimpleJSX } from "../../common/simpleTest";

const templateData: ModuleProps = {
  document: {
    businessId: "REPLACE_ME",
    siteId: "REPLACE_ME",
    __: {
      name: "assets-test",
      staticPage: true
    }
  }, 
  __meta: {
    mode: "production"
  }
}

export const config: ModuleConfig = {
  name: "assets-test"
}

const AssetsTest: Module = () => {
  return(
    <AnalyticsProvider 
      apiKey="REPLACE_ME"
      defaultCurrency="REPLACE_ME" 
      templateData={templateData}
      productionDomains={["REPLACE_ME"]}
    >
      <SimpleJSX/>
    </AnalyticsProvider>
  )
}

export default AssetsTest;
