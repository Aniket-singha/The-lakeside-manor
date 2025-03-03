import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import ProtectedRoute from "./ui/protectedRoute";
import NewUsers from "./pages/Users";
import { DarkModeProvider } from "./context/DarkModeContext";
const StyledApp = styled.div``;

const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0*1000,
    }
  }
})

function App() {
  return (
   <DarkModeProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>

          <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="users" element={<NewUsers />} />
            <Route path="checkin/:bookingId" element={<Checkin />} />
            
            <Route path="bookings/:bookingId" element={<Booking/>} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position='top-center' gutter={12} containerStyle={{
        margin:"8px"
      }}
      toastOptions={{
        success:{
          duration:1000
        },
        error:{
          duration:1000
        },
        style:{
          fontSize:"16px",
          maxWidth:"500px",
          padding:"16px 2px",
          backgroundColor:"var(--color-grey-0)",
          color:"var(--color-grey-700)"
        }
      }}/>
      </QueryClientProvider>
      </DarkModeProvider>
  );
}

export default App;
