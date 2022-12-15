import { AppWrapper } from './App.styled';
import { Main } from './components/Main';
import { Sidebar } from './components/Sidebar';
export const App = () => {
  return (
    <AppWrapper>
      <Sidebar />
      <Main />
    </AppWrapper>
  );
};
