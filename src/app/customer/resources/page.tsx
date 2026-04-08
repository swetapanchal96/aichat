// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//     IoBookOutline,
//     IoInformationCircleOutline,
//     IoBuildOutline,
//     IoShieldCheckmarkSharp,
//     IoPulseOutline,
//     IoFileTrayFullOutline,
// } from "react-icons/io5";
// import { apiUrl } from "@/config";

// const KnowledgeTerminal = () => {
//     const [formData, setFormData] = useState({
//         faqs: "",
//         aboutus: "",
//         service: "",
//         importantKnowledge: "",
//     });

//     const [loading, setLoading] = useState(false);
//     const [fetching, setFetching] = useState(false);
//     const token = localStorage.getItem("customerToken");
//     const fetchKnowledge = async () => {
//         try {
//             setFetching(true);

//             const response = await axios.post(`${apiUrl}/getknowledge`,{}, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });

//             if (response?.data?.success) {
//                 const data = response?.data?.data || {};

//                 setFormData({
//                     aboutus: data.aboutus || "",
//                     importantKnowledge: data.importantKnowledge || "",
//                     service: data.service || "",
//                     faqs: data.faqs || "",
//                 });
//             }
//         } catch (error) {
//             console.error("Error fetching knowledge:", error);
//         } finally {
//             setFetching(false);
//         }
//     };

//     useEffect(() => {
//         fetchKnowledge();
//     }, []);

//     const handleChange = (
//         e: React.ChangeEvent<HTMLTextAreaElement>
//     ) => {
//         const { name, value } = e.target;

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async () => {
//         try {
//             setLoading(true);

//             const payload = {
//                 aboutus: formData.aboutus,
//                 service: formData.service,
//                 importantKnowledge: formData.importantKnowledge,
//                 faqs: formData.faqs,
//             };

//             const response = await axios.post(
//                 `${apiUrl}/extrainfo`,
//                 payload,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }

//             );

//             if (response?.data?.Success) {
//                 alert(response?.data?.Message || "Extra info saved successfully");
//             } else {
//                 alert(response?.data?.Message || "Something went wrong");
//             }
//         } catch (error: any) {
//             console.error("Error saving knowledge:", error);
//             alert(
//                 error?.response?.data?.Message ||
//                 error?.message ||
//                 "Failed to save data"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen w-full bg-[#fcfdfe] text-primary py-12 px-6 font-sans relative overflow-hidden">
//             <div className="absolute inset-0 pointer-events-none">
//                 <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px]"></div>
//                 <div className="absolute -bottom-20 -left-20 w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[100px]"></div>
//             </div>

//             <div className="relative z-10 max-w-7xl mx-auto">
//                 <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-10">
//                     <div>
//                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-4">
//                             <IoPulseOutline className={fetching ? "animate-pulse" : ""} />
//                             Live Terminal
//                         </div>
//                         <h1 className="text-6xl font-black tracking-tighter uppercase italic text-primary">
//                             Neural <span className="text-secondary">Cache.</span>
//                         </h1>
//                     </div>
//                     <p className="text-slate-400 text-sm max-w-xs font-medium leading-relaxed">
//                         Distribute raw data fragments across the architectural modules of the{" "}
//                         <span className="text-primary underline decoration-accent/30">
//                             Chatsystem
//                         </span>.
//                     </p>
//                 </header>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {/* FAQs */}
//                     <div className="group flex flex-col bg-white border border-slate-200 rounded-4xl p-6 transition-all hover:shadow-2xl hover:border-secondary/30">
//                         <div className="flex items-center gap-4 mb-6">
//                             <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
//                                 <IoBookOutline className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-[11px] font-black uppercase tracking-widest text-primary">
//                                     FAQ Cache
//                                 </h3>
//                                 <p className="text-[9px] text-slate-400 font-bold uppercase">
//                                     Decryption
//                                 </p>
//                             </div>
//                         </div>

//                         <textarea
//                             name="faqs"
//                             value={formData.faqs}
//                             onChange={handleChange}
//                             rows={8}
//                             placeholder="Inject FAQ fragments..."
//                             className="flex-1 w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs font-mono text-primary placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all resize-none mb-4"
//                         />
//                     </div>

//                     {/* About */}
//                     <div className="group flex flex-col bg-white border border-slate-200 rounded-4xl p-6 transition-all hover:shadow-2xl hover:border-secondary/30">
//                         <div className="flex items-center gap-4 mb-6">
//                             <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
//                                 <IoInformationCircleOutline className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-[11px] font-black uppercase tracking-widest text-primary">
//                                     About Cache
//                                 </h3>
//                                 <p className="text-[9px] text-slate-400 font-bold uppercase">
//                                     Identity
//                                 </p>
//                             </div>
//                         </div>

//                         <textarea
//                             name="aboutus"
//                             value={formData.aboutus}
//                             onChange={handleChange}
//                             rows={8}
//                             placeholder="Inject Architecture..."
//                             className="flex-1 w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs font-mono text-primary placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all resize-none mb-4"
//                         />
//                     </div>

//                     {/* Services */}
//                     <div className="group flex flex-col bg-white border border-slate-200 rounded-4xl p-6 transition-all hover:shadow-2xl hover:border-secondary/30">
//                         <div className="flex items-center gap-4 mb-6">
//                             <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
//                                 <IoBuildOutline className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-[11px] font-black uppercase tracking-widest text-primary">
//                                     Service Cache
//                                 </h3>
//                                 <p className="text-[9px] text-slate-400 font-bold uppercase">
//                                     Neural
//                                 </p>
//                             </div>
//                         </div>

//                         <textarea
//                             name="service"
//                             value={formData.service}
//                             onChange={handleChange}
//                             rows={8}
//                             placeholder="Inject Services..."
//                             className="flex-1 w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs font-mono text-primary placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all resize-none mb-4"
//                         />
//                     </div>

//                     {/* Important Knowledge */}
//                     <div className="group flex flex-col bg-white border border-slate-200 rounded-4xl p-6 transition-all hover:shadow-2xl hover:border-accent/50 ring-1 ring-accent/5">
//                         <div className="flex items-center gap-4 mb-6">
//                             <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
//                                 <IoFileTrayFullOutline className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-[11px] font-black uppercase tracking-widest text-primary">
//                                     Knowledge
//                                 </h3>
//                                 <p className="text-[9px] text-accent font-bold uppercase">
//                                     External Import
//                                 </p>
//                             </div>
//                         </div>

//                         <textarea
//                             name="importantKnowledge"
//                             value={formData.importantKnowledge}
//                             onChange={handleChange}
//                             rows={8}
//                             placeholder="Import bulk knowledge dataset..."
//                             className="flex-1 w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs font-mono text-primary placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white transition-all resize-none mb-4"
//                         />
//                     </div>
//                 </div>

//                 <div className="mt-12 p-8 bg-secondary rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-secondary/20">
//                     <div className="flex items-center gap-4">
//                         <div className="p-3 bg-white/10 rounded-xl">
//                             <IoShieldCheckmarkSharp className="text-white text-2xl" />
//                         </div>
//                         <div>
//                             <h4 className="text-white font-bold uppercase tracking-tight">
//                                 Full System Integration
//                             </h4>
//                             <p className="text-accent/20 text-xs font-medium">
//                                 Re-index all updated fragments into the production environment.
//                             </p>
//                         </div>
//                     </div>

//                     <button
//                         onClick={handleSubmit}
//                         disabled={loading || fetching}
//                         className="px-10 py-4 bg-white text-primary font-black uppercase tracking-[0.3em] text-[10px] rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                         {loading ? "Saving..." : "Commit All Changes"}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default KnowledgeTerminal;


"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
    IoBookOutline,
    IoInformationCircleOutline,
    IoBuildOutline,
    IoShieldCheckmarkSharp,
    IoPulseOutline,
    IoFileTrayFullOutline,
} from "react-icons/io5";
import { apiUrl } from "@/config";
import { toast } from "react-toastify";

type FormDataType = {
    faqs: string;
    aboutus: string;
    service: string;
    importantKnowledge: string;
};

const initialFormData: FormDataType = {
    faqs: "",
    aboutus: "",
    service: "",
    importantKnowledge: "",
};

const KnowledgeTerminal = () => {
    const [formData, setFormData] = useState<FormDataType>(initialFormData);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);

    const getToken = () => {
        if (typeof window === "undefined") return null;
        return localStorage.getItem("customerToken");
    };

    const fetchKnowledge = async () => {
        try {
            const token = getToken();

            if (!token) {
                toast.error("Token not found. Please login again.");
                return;
            }

            setFetching(true);

            const response = await axios.post(
                `${apiUrl}/getknowledge`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response?.data?.success) {
                const data = response?.data?.data || {};

                setFormData({
                    aboutus: data?.aboutus || "",
                    importantKnowledge: data?.importantKnowledge || "",
                    service: data?.service || "",
                    faqs: data?.faqs || "",
                });
            } else {
                toast.error(response?.data?.message || "Failed to fetch knowledge");
            }
        } catch (error: any) {
            console.error("Error fetching knowledge:", error);
            toast.error(
                error?.response?.data?.message ||
                error?.response?.data?.Message ||
                error?.message ||
                "Failed to fetch knowledge"
            );
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        fetchKnowledge();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const token = getToken();

            if (!token) {
                toast.error("Token not found. Please login again.");
                return;
            }

            setLoading(true);

            const payload = {
                aboutus: formData.aboutus,
                service: formData.service,
                importantKnowledge: formData.importantKnowledge,
                faqs: formData.faqs,
            };

            const response = await axios.post(`${apiUrl}/extrainfo`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response?.data?.Success || response?.data?.success) {
                toast.success(
                    response?.data?.Message ||
                    response?.data?.message ||
                    "Extra info saved successfully"
                );
            } else {
                toast.error(
                    response?.data?.Message ||
                    response?.data?.message ||
                    "Something went wrong"
                );
            }
        } catch (error: any) {
            console.error("Error saving knowledge:", error);
            toast.error(
                error?.response?.data?.Message ||
                error?.response?.data?.message ||
                error?.message ||
                "Failed to save data"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#fcfdfe] text-primary py-12 px-6 font-sans relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px]" />
                <div className="absolute -bottom-20 -left-20 w-[40vw] h-[40vw] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-10">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-4">
                            <IoPulseOutline className={fetching ? "animate-pulse" : ""} />
                            {fetching ? "Fetching Data" : "Live Terminal"}
                        </div>

                        <h1 className="text-6xl font-black tracking-tighter uppercase italic text-primary">
                            Neural <span className="text-secondary">Cache.</span>
                        </h1>
                    </div>

                    <p className="text-slate-400 text-sm max-w-xs font-medium leading-relaxed">
                        Distribute raw data fragments across the architectural modules of the{" "}
                        <span className="text-primary underline decoration-accent/30">
                            Chatsystem
                        </span>
                        .
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* FAQs */}
                    <div className="group flex flex-col bg-white border border-slate-200 rounded-4xl p-6 transition-all hover:shadow-2xl hover:border-secondary/30">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                                <IoBookOutline className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-[11px] font-black uppercase tracking-widest text-primary">
                                    FAQ Cache
                                </h3>
                                <p className="text-[9px] text-slate-400 font-bold uppercase">
                                    Decryption
                                </p>
                            </div>
                        </div>

                        <textarea
                            name="faqs"
                            value={formData.faqs}
                            onChange={handleChange}
                            rows={8}
                            placeholder="Inject FAQ fragments..."
                            className="flex-1 w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs font-mono text-primary placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all resize-none mb-4"
                        />
                    </div>

                    {/* About */}
                    <div className="group flex flex-col bg-white border border-slate-200 rounded-4xl p-6 transition-all hover:shadow-2xl hover:border-secondary/30">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                                <IoInformationCircleOutline className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-[11px] font-black uppercase tracking-widest text-primary">
                                    About Cache
                                </h3>
                                <p className="text-[9px] text-slate-400 font-bold uppercase">
                                    Identity
                                </p>
                            </div>
                        </div>

                        <textarea
                            name="aboutus"
                            value={formData.aboutus}
                            onChange={handleChange}
                            rows={8}
                            placeholder="Inject Architecture..."
                            className="flex-1 w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs font-mono text-primary placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all resize-none mb-4"
                        />
                    </div>

                    {/* Services */}
                    <div className="group flex flex-col bg-white border border-slate-200 rounded-4xl p-6 transition-all hover:shadow-2xl hover:border-secondary/30">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                                <IoBuildOutline className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-[11px] font-black uppercase tracking-widest text-primary">
                                    Service Cache
                                </h3>
                                <p className="text-[9px] text-slate-400 font-bold uppercase">
                                    Neural
                                </p>
                            </div>
                        </div>

                        <textarea
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            rows={8}
                            placeholder="Inject Services..."
                            className="flex-1 w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs font-mono text-primary placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all resize-none mb-4"
                        />
                    </div>

                    {/* Important Knowledge */}
                    <div className="group flex flex-col bg-white border border-slate-200 rounded-4xl p-6 transition-all hover:shadow-2xl hover:border-accent/50 ring-1 ring-accent/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                <IoFileTrayFullOutline className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-[11px] font-black uppercase tracking-widest text-primary">
                                    Knowledge
                                </h3>
                                <p className="text-[9px] text-accent font-bold uppercase">
                                    External Import
                                </p>
                            </div>
                        </div>

                        <textarea
                            name="importantKnowledge"
                            value={formData.importantKnowledge}
                            onChange={handleChange}
                            rows={8}
                            placeholder="Import bulk knowledge dataset..."
                            className="flex-1 w-full bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs font-mono text-primary placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white transition-all resize-none mb-4"
                        />
                    </div>
                </div>

                <div className="mt-12 p-8 bg-secondary rounded-4xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-secondary/20">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-xl">
                            <IoShieldCheckmarkSharp className="text-white text-2xl" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-tight">
                                Full System Integration
                            </h4>
                            <p className="text-accent/20 text-xs font-medium">
                                Re-index all updated fragments into the production environment.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading || fetching}
                        className="px-10 py-4 bg-white text-primary font-black uppercase tracking-[0.3em] text-[10px] rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Saving..." : "Commit All Changes"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default KnowledgeTerminal;