import {Routes,Route,Navigate} from 'react-router-dom';
import Shell from './layouts/Shell';
import Admin from './pages/Admin';
import {MeterProvider} from './context/MeterStore';
import {Home,Devices,Energy,Alerts,More} from './pages/Monitor';
export default function App(){return <MeterProvider><Routes><Route element={<Shell/>}><Route index element={<Navigate to="/home" replace/>}/><Route path="home" element={<Home/>}/><Route path="dashboard" element={<Navigate to="/home" replace/>}/><Route path="devices" element={<Devices/>}/><Route path="devices/:type" element={<Devices/>}/><Route path="energy" element={<Energy/>}/><Route path="alerts" element={<Alerts/>}/><Route path="more" element={<More/>}/><Route path="admin" element={<Admin/>}/><Route path="*" element={<Navigate to="/home" replace/>}/></Route></Routes></MeterProvider>}
