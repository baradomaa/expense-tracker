"use client";
import React from 'react';
import { LayoutGrid, History, ChartBarIncreasing, DollarSign, Wallet, Cog } from 'lucide-react';

const Sidebar = () => {
    const [activePage, setActivePage] = React.useState("Dashboard");

    const navItems = [
        { name: "Dashboard", icon: LayoutGrid },
        { name: "History", icon: History },
        { name: "Insights", icon: ChartBarIncreasing },
        { name: "Wallet", icon: Wallet },
        { name: "Settings", icon: Cog },
    ];

    return (
        <aside className="flex flex-col justify-between w-50 h-screen bg-white border-r border-gray-100 pr-7" style={{paddingRight: '60px', alignItems:'center'}}>
            <div>
                <h1 style={{color: '#0D4D4D', fontSize: '24px', fontWeight: 'bold', paddingRight: '30px', paddingTop: '28px', marginBottom: '24px', textAlign: 'center'}}>Fundly</h1>

                <nav className="flex flex-col gap-0.3">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activePage === item.name;

                        return (
                            <div
                                key={item.name}
                                onClick={() => setActivePage(item.name)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    paddingTop: '12px',
                                    paddingBottom: '12px',
                                    paddingLeft: '20px',
                                    paddingRight: '10px',
                                    borderRadius: '12px',
                                    backgroundColor: isActive ? '#E8F5F3' : 'transparent',
                                    cursor: 'pointer',
                                    marginBottom: '4px'
                                }}
                            >
                                <Icon 
                                    size={20} 
                                    strokeWidth={2.5} 
                                    color={isActive ? '#0d4d4d' : '#9ca3af'}
                                />
                                <span style={{
                                    fontSize: '15px',
                                    fontWeight: '500',
                                    color: isActive ? '#0d4d4d' : '#9ca3af'
                                }}>
                                    {item.name}
                                </span>
                            </div>
                        );
                    })}
                </nav>

                <div style={{display:'flex', alignItems:'center', gap:'0px', paddingLeft:'20px', paddingTop:'24px', cursor:'pointer'}}>
    <div style={{width:'36px', height:'36px', borderRadius:'50%', backgroundColor:'#0d4d4d', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <p style={{color:'white', fontWeight:'bold', fontSize:'14px', margin:'0px'}}>A</p>
    </div>
    <div>
        <p style={{fontSize:'14px', fontWeight:'600', color:'#111827'}}>Alex</p>
        <p style={{fontSize:'12px', color:'#9ca3af'}}>View Profile</p>
    </div>
</div>
            </div>
        </aside>
    );
};

export default Sidebar;