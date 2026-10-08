import {createContext,useContext,useEffect,useMemo,useState,type ReactNode} from 'react';
import {meters as initialMeters,type Meter} from '../data/devices';
type Store={meters:Meter[];add:(meter:Meter)=>void;update:(id:string,meter:Meter)=>void;remove:(id:string)=>void;reset:()=>void};
const C=createContext<Store|null>(null);
const KEY='energyos_meters_v1';
export function MeterProvider({children}:{children:ReactNode}){
 const [meters,setMeters]=useState<Meter[]>(()=>{try{const raw=localStorage.getItem(KEY);return raw?JSON.parse(raw) as Meter[]:initialMeters}catch{return initialMeters}});
 useEffect(()=>{try{localStorage.setItem(KEY,JSON.stringify(meters))}catch{}},[meters]);
 const store=useMemo<Store>(()=>({meters,add:(meter)=>setMeters(v=>[...v,meter]),update:(id,meter)=>setMeters(v=>v.map(x=>x.id===id?meter:x)),remove:(id)=>setMeters(v=>v.filter(x=>x.id!==id)),reset:()=>setMeters(initialMeters)}),[meters]);
 return <C.Provider value={store}>{children}</C.Provider>;
}
export function useMeterStore(){const value=useContext(C);if(!value)throw new Error('MeterProvider missing');return value}
