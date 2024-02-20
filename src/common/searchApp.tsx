import { Pagination, ResultsCount, SearchBar, SpellCheck, StandardCard, VerticalConfigMap, VerticalResults } from '@yext/search-ui-react';
import { v4 as uuidv4 } from 'uuid';
import { SearchHeadlessProvider, provideHeadless } from '@yext/search-headless-react';

const config = {
  apiKey: 'ceedc10c919e565fd610f6240736ea81',
  experienceKey: 'default',
  locale: 'en',
  experienceVersion: 'PRODUCTION',
}

const searcher = provideHeadless(config);

searcher.setSessionTrackingEnabled(true);
let sessionId = window.sessionStorage.getItem('sessionId');
if (!sessionId) {
  sessionId = uuidv4();
  window.sessionStorage.setItem('sessionId', sessionId ?? 'sessionId');
}
searcher.setSessionId(sessionId ?? 'sessionId');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const verticalConfigMap: VerticalConfigMap = {
  help_articles: {
    label: "Help Articles"
  }
}

function App() {
  return (
    <SearchHeadlessProvider searcher={searcher}>
        <SearchBar placeholder='Search...'/>
        <SpellCheck />
        <ResultsCount />
        <VerticalResults
          CardComponent={StandardCard}
          displayAllOnNoResults={true}
        />
      <Pagination />
    </SearchHeadlessProvider>
  );
}

export default App;