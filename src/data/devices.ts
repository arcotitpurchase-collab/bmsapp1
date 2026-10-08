export type Status='online'|'offline'|'warning';

export type SystemKey='source'|'feeder'|'transformer'|'lt-kiosk'|'busduct'|'pcc'|'dg'|'chiller'|'water'|'fire'|'ups'|'raising-main'|'floor';

export type Meter={
  id:string;name:string;system:SystemKey;systemName:string;equipment:string;location:string;status:Status;
  kwh:number;kvah:number;kw:number;pf:number;voltage:number;voltageUnit:'V'|'kV';current:number;freq:number;supply:string;
};

export const emsSystems:[SystemKey,string,string][]=[
['source','33kV Source','Main incoming and source meters'],
['feeder','Feeders','HT/LT feeder meters'],
['transformer','Transformers','Transformer incomer/outgoing meters'],
['lt-kiosk','LT Kiosks','LT kiosk meters'],
['busduct','Busducts','Busduct energy meters'],
['pcc','PCC','PCC incomer and outgoing meters'],
['dg','DG','Generator energy meters'],
['chiller','Chillers','Chiller panel meters'],
['water','Water','WTP/STP and water utility meters'],
['fire','Fire','Fire system meters'],
['ups','UPS','UPS input/output meters'],
['raising-main','Raising Main','Raising main meters'],
['floor','Floors / Clients','Floor and tenant meters']
];

export const meters:Meter[]=[
{id:'MFM-SRC-01',name:'Source Main Incomer',system:'source',systemName:'33kV Source',equipment:'33kV Main Incomer',location:'33kV Source Panel',status:'online',kwh:128420.8,kvah:132665.2,kw:142.8,pf:.968,voltage:33.0,voltageUnit:'kV',current:2.8,freq:50.02,supply:'GRID'},
{id:'MFM-SRC-02',name:'Source Meter 02',system:'source',systemName:'33kV Source',equipment:'33kV Incomer 02',location:'33kV Source Panel',status:'online',kwh:98420.4,kvah:101240.8,kw:108.2,pf:.971,voltage:32.98,voltageUnit:'kV',current:2.1,freq:50.01,supply:'GRID'},
{id:'MFM-FDR-01',name:'Transformer Feeder 01',system:'feeder',systemName:'Feeders',equipment:'Feeder-01',location:'HT Panel',status:'online',kwh:124850.4,kvah:128920.7,kw:138.4,pf:.971,voltage:32.94,voltageUnit:'kV',current:2.7,freq:50.01,supply:'GRID'},
{id:'MFM-FDR-02',name:'Transformer Feeder 02',system:'feeder',systemName:'Feeders',equipment:'Feeder-02',location:'HT Panel',status:'online',kwh:112430.7,kvah:116210.2,kw:124.7,pf:.969,voltage:32.91,voltageUnit:'kV',current:2.4,freq:50.02,supply:'GRID'},
{id:'MFM-TR-01',name:'Transformer 01',system:'transformer',systemName:'Transformers',equipment:'TR-01',location:'Transformer Room',status:'online',kwh:121640.2,kvah:125410.8,kw:134.6,pf:.974,voltage:433.2,voltageUnit:'V',current:179.6,freq:50.01,supply:'GRID'},
{id:'MFM-TR-02',name:'Transformer 02',system:'transformer',systemName:'Transformers',equipment:'TR-02',location:'Transformer Room',status:'online',kwh:109850.8,kvah:113420.6,kw:121.2,pf:.973,voltage:432.7,voltageUnit:'V',current:162.4,freq:50.02,supply:'GRID'},
{id:'MFM-LTK-01',name:'LT Kiosk 01',system:'lt-kiosk',systemName:'LT Kiosks',equipment:'LTK-01',location:'LT Room',status:'online',kwh:118420.7,kvah:122240.3,kw:129.8,pf:.973,voltage:432.8,voltageUnit:'V',current:173.2,freq:50.02,supply:'GRID'},
{id:'MFM-LTK-02',name:'LT Kiosk 02',system:'lt-kiosk',systemName:'LT Kiosks',equipment:'LTK-02',location:'LT Room',status:'online',kwh:104210.5,kvah:107680.4,kw:114.6,pf:.972,voltage:432.3,voltageUnit:'V',current:153.4,freq:50.01,supply:'GRID'},
{id:'MFM-BD-01',name:'Busduct 01',system:'busduct',systemName:'Busducts',equipment:'Busduct-01',location:'Electrical Riser',status:'online',kwh:115860.4,kvah:119610.2,kw:126.3,pf:.972,voltage:432.4,voltageUnit:'V',current:169.1,freq:50.01,supply:'GRID'},
{id:'MFM-BD-02',name:'Busduct 02',system:'busduct',systemName:'Busducts',equipment:'Busduct-02',location:'Electrical Riser',status:'online',kwh:101220.9,kvah:104510.3,kw:111.4,pf:.974,voltage:431.9,voltageUnit:'V',current:149.5,freq:50.02,supply:'GRID'},
{id:'MFM-PCC-01',name:'PCC 01 Incomer',system:'pcc',systemName:'PCC',equipment:'PCC-01 Incomer',location:'PCC-01',status:'online',kwh:112480.9,kvah:116140.6,kw:122.7,pf:.975,voltage:432.6,voltageUnit:'V',current:164.3,freq:50.02,supply:'GRID'},
{id:'MFM-PCC-02',name:'PCC 02 Incomer',system:'pcc',systemName:'PCC',equipment:'PCC-02 Incomer',location:'PCC-02',status:'online',kwh:93420.2,kvah:96280.1,kw:101.8,pf:.976,voltage:432.1,voltageUnit:'V',current:136.5,freq:50.01,supply:'GRID'},
{id:'MFM-DG-01',name:'DG Common',system:'dg',systemName:'DG',equipment:'DG Common Panel',location:'DG Panel',status:'warning',kwh:21480.6,kvah:22594.3,kw:0,pf:.96,voltage:0,voltageUnit:'V',current:0,freq:0,supply:'STANDBY'},
{id:'MFM-DG-02',name:'DG 02',system:'dg',systemName:'DG',equipment:'DG-02',location:'DG Panel',status:'online',kwh:18420.5,kvah:19210.7,kw:0,pf:.962,voltage:0,voltageUnit:'V',current:0,freq:0,supply:'STANDBY'},
{id:'MFM-CH-01',name:'Chiller 01',system:'chiller',systemName:'Chillers',equipment:'CH-01',location:'Chiller Panel',status:'online',kwh:42180.5,kvah:43520.8,kw:46.8,pf:.971,voltage:432.1,voltageUnit:'V',current:63.9,freq:50.02,supply:'GRID'},
{id:'MFM-WTP-01',name:'WTP',system:'water',systemName:'Water',equipment:'WTP-01',location:'WTP Panel',status:'online',kwh:18240.8,kvah:18920.4,kw:12.8,pf:.964,voltage:431.6,voltageUnit:'V',current:18.2,freq:50.01,supply:'GRID'},
{id:'MFM-FIRE-01',name:'Fire Pump Panel',system:'fire',systemName:'Fire',equipment:'Fire Panel-01',location:'Fire Pump Room',status:'online',kwh:8420.2,kvah:8710.6,kw:2.1,pf:.965,voltage:432.7,voltageUnit:'V',current:3.1,freq:50.02,supply:'GRID'},
{id:'MFM-UPS-01',name:'30kVA UPS 01 Input',system:'ups',systemName:'UPS',equipment:'UPS-30KVA-01',location:'UPS Room',status:'online',kwh:24680.7,kvah:25240.3,kw:18.4,pf:.978,voltage:432.3,voltageUnit:'V',current:25.1,freq:50.01,supply:'GRID'},
{id:'MFM-UPS-02',name:'30kVA UPS 02 Input',system:'ups',systemName:'UPS',equipment:'UPS-30KVA-02',location:'UPS Room',status:'online',kwh:22140.3,kvah:22680.8,kw:16.7,pf:.977,voltage:432.0,voltageUnit:'V',current:22.9,freq:50.02,supply:'GRID'},
{id:'MFM-RM-01',name:'Raising Main 01',system:'raising-main',systemName:'Raising Main',equipment:'RM-01',location:'Electrical Riser',status:'online',kwh:68420.4,kvah:70340.8,kw:58.7,pf:.974,voltage:432.5,voltageUnit:'V',current:79.2,freq:50.02,supply:'GRID'},
{id:'MFM-F19-01',name:'Floor 19',system:'floor',systemName:'Floors / Clients',equipment:'Floor 19 Incomer',location:'PCC-01 / Feeder-19',status:'online',kwh:84621.4,kvah:87218.9,kw:72.4,pf:.972,voltage:431.8,voltageUnit:'V',current:106.2,freq:50.01,supply:'GRID'},
{id:'MFM-F18-01',name:'Floor 18',system:'floor',systemName:'Floors / Clients',equipment:'Floor 18 Incomer',location:'PCC-01 / Feeder-18',status:'online',kwh:76840.2,kvah:79140.5,kw:65.1,pf:.974,voltage:432.2,voltageUnit:'V',current:94.8,freq:50.02,supply:'GRID'}
];

export const getMetersBySystem=(system:SystemKey)=>meters.filter(m=>m.system===system);
export const getMeterById=(id:string)=>meters.find(m=>m.id===id);

export const gateways=[
{id:'GW-01',name:'Electrical Gateway',location:'Main LT Room',status:'online' as Status,protocol:'Modbus RTU',uplink:'Ethernet',devices:'12 / 12',signal:'Excellent'},
{id:'GW-02',name:'Utility Gateway',location:'Utility Room',status:'online' as Status,protocol:'Modbus TCP',uplink:'Ethernet',devices:'8 / 8',signal:'Excellent'},
{id:'GW-03',name:'Roof Gateway',location:'Terrace',status:'warning' as Status,protocol:'BLE',uplink:'Wi-Fi',devices:'5 / 6',signal:'Fair'}];
export const sensors=[
{id:'TEMP-01',name:'Transformer Oil',location:'TR-01',status:'online' as Status,value:64.2,unit:'°C',kind:'Temperature'},
{id:'TEMP-02',name:'Transformer Winding',location:'TR-01',status:'online' as Status,value:71.8,unit:'°C',kind:'Temperature'},
{id:'TANK-01',name:'Domestic Tank',location:'Terrace',status:'online' as Status,value:78,unit:'%',kind:'Level'},
{id:'VIB-01',name:'Busduct Vibration',location:'Busduct-01',status:'online' as Status,value:2.4,unit:'mm/s',kind:'Vibration'}];
export const converters=[
{id:'CONV-01',name:'MFM Converter',location:'LT Panel',status:'online' as Status,input:'RS-485',output:'BLE',baud:'9600',device:'MFM-SRC-01'},
{id:'CONV-02',name:'Floor Converter',location:'PCC-1',status:'online' as Status,input:'RS-485',output:'Ethernet',baud:'9600',device:'MFM-F19-01'},
{id:'CONV-03',name:'Utility Converter',location:'Utility Panel',status:'online' as Status,input:'Modbus RTU',output:'Modbus TCP',baud:'19200',device:'Utility meters'}];
export const loadTrend=[118,124,121,132,138,136,145,142,149,146,143,142.8];
export const energyTrend=[42,77,112,149,188,224,263,301,337,365,386,408];
