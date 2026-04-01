"use client";

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { IoCheckmarkCircle, IoCloseCircle, IoSearchOutline } from "react-icons/io5";
import { apiUrl } from "@/config";
import { getAuthHeader } from "@/utils/auth";

type Customer = {
  email: string;
  company_id: string;
  companyname: string;
  isactive: boolean;
  phone: number | string;
  url?: string;
};

const CustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [toggleLoadingId, setToggleLoadingId] = useState<string | null>(null);

  const fetchCustomers = async () => {
    try {
      setLoading(true);

      const res = await axios.post(`${apiUrl}/getcustomeractive`);

      if (res?.data?.success) {
        setCustomers(res?.data?.data || []);
      } else {
        setCustomers([]);
      }
    } catch (error) {
      console.error("Fetch customers error:", error);
      setCustomers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleToggleStatus = async (company_id: string, currentStatus: boolean) => {
    try {
      setToggleLoadingId(company_id);

      const payload = {
        company_id,
        status: !currentStatus,
      };

      const res = await axios.post(
        `${apiUrl}/toggle`,
        payload,
        {
          headers: getAuthHeader(),
        }
      );

      if (res?.data?.success) {
        await fetchCustomers();
      } else {
        console.error(res?.data?.message || "Failed to toggle status");
      }
    } catch (error) {
      console.error("Toggle status error:", error);
    } finally {
      setToggleLoadingId(null);
    }
  };

  const filteredCustomers = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return customers;

    return customers.filter((item) => {
      return (
        item.companyname?.toLowerCase().includes(value) ||
        item.email?.toLowerCase().includes(value) ||
        String(item.phone ?? "").toLowerCase().includes(value) ||
        item.company_id?.toLowerCase().includes(value) ||
        (item.url || "").toLowerCase().includes(value)
      );
    });
  }, [customers, search]);

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden font-sans">
      <main className="flex-1 overflow-auto p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-black text-primary">Customer Directory</h1>
              <p className="text-sm text-gray-500">
                Manage and monitor your registered business clients.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-50 flex flex-col sm:flex-row gap-4 justify-between bg-white/50 backdrop-blur-sm">
              <div className="relative w-full sm:max-w-md">
                <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by company, email, phone, url..."
                  className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                      Sr No.
                    </th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                      Customer Name
                    </th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                      Website
                    </th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                      Email Address
                    </th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                      Mobile Number
                    </th>
                    <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                      Status Action
                    </th>

                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50">
                  {loading ? (

                    <tr>
                      <td colSpan={7} className="px-6 py-10 text-center">
                        <div className="flex justify-center items-center gap-3">
                          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>

                        </div>
                      </td>
                    </tr>

                  ) : filteredCustomers.length > 0 ? (
                    filteredCustomers.map((item, index) => (
                      <tr key={item.company_id} className="hover:bg-color-accent/5 transition-colors group">
                        <td className="px-6 py-4 text-sm text-gray-500 font-medium">
                          {String(index + 1).padStart(2, "0")}
                        </td>

                        <td className="px-6 py-4">
                          <span className="font-bold text-primary text-sm">
                            {item.companyname}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          {item.url ? (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-semibold py-1 px-3 bg-gray-100 rounded-full text-secondary group-hover:bg-white transition-colors"
                            >
                              {item.url}
                            </a>
                          ) : (
                            <span className="text-xs font-semibold py-1 px-3 bg-gray-100 rounded-full text-secondary group-hover:bg-white transition-colors">
                              -
                            </span>
                          )}
                        </td>

                        <td className="px-6 py-4 text-sm text-gray-600">{item.email}</td>
                        <td className="px-6 py-4 text-sm font-mono text-gray-600">
                          {item.phone}
                        </td>

                        <td className="px-6 py-4 text-start">
                          <button
                            onClick={() => handleToggleStatus(item.company_id, item.isactive)}
                            disabled={toggleLoadingId === item.company_id}
                            className={`
                                                    relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300
                                                    ${item.isactive
                                ? "bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-600 hover:text-white shadow-sm hover:shadow-emerald-200"
                                : "bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-600 hover:text-white shadow-sm hover:shadow-rose-200"
                              }
                                                    ${toggleLoadingId === item.company_id ? "opacity-60 cursor-not-allowed" : ""}
                                                  `}
                          >
                            {item.isactive ? (
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-8 text-center text-sm text-gray-500">
                        No customers found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerList;