import { AppWrapper } from './App.styled';
import { Main } from './components/Main';
import { Sidebar } from './components/Sidebar';
export const App = () => {
  return (
    <AppWrapper
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Main />
      <Sidebar />
    </AppWrapper>
  );
};
