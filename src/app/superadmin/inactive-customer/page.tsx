"use client"

import React, { useState } from 'react';
import { IoSearchOutline, IoEllipsisVertical, IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

const InactiveCustomerList = () => {
  // Mock Data with initial status
  const [customers, setCustomers] = useState([
    { id: 1, name: "Shiva Tech", website: "shivatech.com", email: "shiva@example.com", mobile: "+91 98765 43210", isActive: false },
    { id: 2, name: "Kartavya Seeds", website: "kartavyaseeds.com", email: "info@kartavya.in", mobile: "+91 99887 76655", isActive: false },
    { id: 3, name: "Growth Authority", website: "growthauth.com", email: "contact@growth.com", mobile: "+91 77665 54433", isActive: true },
    { id: 4, name: "Saibaba Granite", website: "saibabatile.in", email: "sales@saibaba.in", mobile: "+91 88776 65544", isActive: false },
  ]);

  // Toggle Function
  const toggleStatus = (id: number) => {
    setCustomers(prev => prev.map(cust => 
      cust.id === id ? { ...cust, isActive: !cust.isActive } : cust
    ));
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden font-sans">
      <main className="flex-1 overflow-auto p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-black text-primary">Customer Status Management</h1>
              <p className="text-sm text-gray-500">Monitor and toggle access for business clients.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-50 flex flex-col sm:flex-row gap-4 justify-between bg-white/50 backdrop-blur-sm">
              <div className="relative w-full sm:max-w-md">
                <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input 
                  type="text" 
                  placeholder="Search by name, website or email..."
                  className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Sr No.</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Customer Name</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Website</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">Mobile Number</th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400 text-center">Status Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {customers.map((item, index) => (
                    <tr key={item.id} className="hover:bg-accent/5 transition-colors group">
                      <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                        {String(index + 1).padStart(2, '0')}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-primary text-sm">{item.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-semibold py-1 px-3 bg-gray-100 rounded-full text-secondary group-hover:bg-white transition-colors">
                          {item.website}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.email}</td>
                      <td className="px-6 py-4 text-sm font-mono text-gray-600">{item.mobile}</td>
                      
                      {/* --- UNIQUE STATUS BUTTON DESIGN --- */}
                      <td className="px-6 py-4 text-center">
                        <button 
                          onClick={() => toggleStatus(item.id)}
                          className={`
                            relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300
                            ${item.isActive 
                              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-600 hover:text-white shadow-sm hover:shadow-emerald-200' 
                              : 'bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-600 hover:text-white shadow-sm hover:shadow-rose-200'
                            }
                          `}
                        >
                          {item.isActive ? (
                            <>
                              <IoCheckmarkCircle className="text-sm" />
                              <span>Active</span>
                            </>
                          ) : (
                            <>
                              <IoCloseCircle className="text-sm" />
                              <span>Inactive</span>
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InactiveCustomerList;