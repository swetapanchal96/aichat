// // "use client";

// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import {
// //     IoBookOutline,
// //     IoInformationCircleOutline,
// //     IoBuildOutline,
// //     IoPulseOutline,
// //     IoFileTrayFullOutline,
// //     IoCloudDownloadOutline,
// //     IoArrowForward
// // } from "react-icons/io5";
// // import { apiUrl } from "@/config";
// // import { toast } from "react-toastify";

// // type FormDataType = {
// //     faqs: string;
// //     aboutus: string;
// //     service: string;
// //     importantKnowledge: string;
// // };

// // const KnowledgeTerminal = () => {
// //     const [formData, setFormData] = useState<FormDataType>({
// //         faqs: "",
// //         aboutus: "",
// //         service: "",
// //         importantKnowledge: "",
// //     });
// //     const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({});
// //     const [fetching, setFetching] = useState(false);

// //     const getToken = () => (typeof window !== "undefined" ? localStorage.getItem("customerToken") : null);

// //     const fetchKnowledge = async () => {
// //         try {
// //             const token = getToken();
// //             if (!token) return toast.error("Authentication required.");
// //             setFetching(true);
// //             const response = await axios.post(`${apiUrl}/getknowledge`, {}, {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });
// //             if (response?.data?.success) {
// //                 const data = response?.data?.data || {};
// //                 setFormData({
// //                     aboutus: data?.aboutus || "",
// //                     importantKnowledge: data?.importantKnowledge || "",
// //                     service: data?.service || "",
// //                     faqs: data?.faqs || "",
// //                 });
// //             }
// //         } catch (error) {
// //             toast.error("Failed to sync with Neural Cache.");
// //         } finally {
// //             setFetching(false);
// //         }
// //     };

// //     useEffect(() => { fetchKnowledge(); }, []);

// //     const handleSingleSubmit = async (field: keyof FormDataType) => {
// //         try {
// //             const token = getToken();
// //             if (!token) return;

// //             setLoadingStates(prev => ({ ...prev, [field]: true }));

// //             // Using the specific payload for just this field update
// //             const payload = { [field]: formData[field] };

// //             const response = await axios.post(`${apiUrl}/extrainfo`, payload, {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });

// //             if (response?.data?.success || response?.data?.Success) {
// //                 toast.success(`${field.toUpperCase()} fragment committed successfully.`);
// //             }
// //         } catch (error) {
// //             toast.error(`Failed to update ${field}.`);
// //         } finally {
// //             setLoadingStates(prev => ({ ...prev, [field]: false }));
// //         }
// //     };

// //     const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
// //         setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
// //     };

// //     const modules = [
// //         { id: "faqs", label: "Faqs", icon: <IoBookOutline />, color: "accent", desc: "Frequently asked questions" },
// //         { id: "aboutus", label: "About Us", icon: <IoInformationCircleOutline />, color: "primary", desc: "Core About Us info" },
// //         { id: "service", label: " Services", icon: <IoBuildOutline />, color: "secondary", desc: "Operational capabilities" },
// //         { id: "importantKnowledge", label: "Knowledge", icon: <IoFileTrayFullOutline />, color: "primary", desc: "Bulk knowledge base" },
// //     ];

// //     return (
// //         <div className="min-h-screen bg-[#f8fafc] text-primary font-sans">
// //             {/* Soft Background Accents */}
// //             <div className="fixed inset-0 pointer-events-none overflow-hidden">
// //                 <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px]" />
// //                 <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-[80px]" />
// //             </div>

// //             <div className="relative z-10 max-w-7xl mx-auto py-16 px-6">
// //                 <header className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-200 pb-10">
// //                     <div className="space-y-2">
// //                         <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full w-fit">
// //                             <IoPulseOutline className={fetching ? "animate-pulse text-accent" : "text-secondary"} />
// //                             <span className="text-[10px] font-black uppercase tracking-widest">
// //                                 {fetching ? "Syncing Modules..." : "Systems Online"}
// //                             </span>
// //                         </div>
// //                         <h1 className="text-5xl font-black tracking-tighter text-primary">
// //                              <span className="text-secondary">RESOURCES.</span>
// //                         </h1>
// //                     </div>
// //                     <button 
// //                         onClick={fetchKnowledge}
// //                         className="mt-6 md:mt-0 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors"
// //                     >
// //                         <IoCloudDownloadOutline className="text-lg" /> Reload Environment
// //                     </button>
// //                 </header>

// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// //                     {modules.map((mod) => (
// //                         <div key={mod.id} className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
// //                             <div className="flex justify-between items-start mb-6">
// //                                 <div className="flex items-center gap-4">
// //                                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all
// //                                         ${mod.color === 'primary' ? 'bg-primary text-white' : 
// //                                           mod.color === 'secondary' ? 'bg-secondary text-white' : 'bg-accent text-white'}`}>
// //                                         {mod.icon}
// //                                     </div>
// //                                     <div>
// //                                         <h3 className="text-lg font-black tracking-tight text-primary uppercase leading-tight">
// //                                             {mod.label}
// //                                         </h3>
// //                                         <p className="text-xs text-slate-400 font-medium">{mod.desc}</p>
// //                                     </div>
// //                                 </div>
// //                             </div>

// //                             <textarea
// //                                 name={mod.id}
// //                                 value={formData[mod.id as keyof FormDataType]}
// //                                 onChange={handleChange}
// //                                 placeholder={`Inject data into ${mod.label}...`}
// //                                 className="flex-1 w-full bg-slate-50/50 border border-slate-100 rounded-3xl p-6 text-sm font-mono text-primary placeholder:text-slate-300 focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent/30 transition-all resize-none min-h-[220px]"
// //                             />

// //                             <div className="mt-6 flex items-center justify-between gap-4">
// //                                 <div className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter italic">
// //                                     Segment ID: {mod.id}_01
// //                                 </div>
// //                                 <button
// //                                     onClick={() => handleSingleSubmit(mod.id as keyof FormDataType)}
// //                                     disabled={loadingStates[mod.id] || fetching}
// //                                     className={`flex items-center gap-2 px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all active:scale-95 disabled:opacity-50
// //                                         ${mod.color === 'primary' ? 'bg-primary text-white hover:bg-primary/90' : 
// //                                           mod.color === 'secondary' ? 'bg-secondary text-white hover:bg-secondary/90' : 'bg-accent text-white hover:bg-accent/90'}`}
// //                                 >
// //                                     {loadingStates[mod.id] ? "Syncing..." : (
// //                                         <> Commit Data <IoArrowForward className="text-sm" /> </>
// //                                     )}
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>

// //             </div>
// //         </div>
// //     );
// // };

// // export default KnowledgeTerminal;


// "use client";

// import { useEffect, useMemo, useState } from "react";
// import axios from "axios";
// import {
//     IoBookOutline,
//     IoInformationCircleOutline,
//     IoBuildOutline,
//     IoPulseOutline,
//     IoFileTrayFullOutline,
//     IoCloudDownloadOutline,
//     IoArrowForward,
//     IoAdd,
//     IoCreateOutline,
//     IoTrashOutline,
//     IoCloseOutline,
// } from "react-icons/io5";
// import { apiUrl } from "@/config";
// import { toast } from "react-toastify";

// type FormDataType = {
//     faqs: string;
//     aboutus: string;
//     service: string;
//     importantKnowledge: string;
// };

// type FaqItem = {
//     question: string;
//     answer: string;
// };

// const defaultFaqForm: FaqItem = {
//     question: "",
//     answer: "",
// };

// const KnowledgeTerminal = () => {
//     const [formData, setFormData] = useState<FormDataType>({
//         faqs: "",
//         aboutus: "",
//         service: "",
//         importantKnowledge: "",
//     });

//     const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>(
//         {}
//     );
//     const [fetching, setFetching] = useState(false);

//     const [faqModalOpen, setFaqModalOpen] = useState(false);
//     const [faqForm, setFaqForm] = useState<FaqItem>(defaultFaqForm);
//     const [editingFaqIndex, setEditingFaqIndex] = useState<number | null>(null);

//     const getToken = () =>
//         typeof window !== "undefined"
//             ? localStorage.getItem("customerToken")
//             : null;

//     const parseFaqs = (value: string): FaqItem[] => {
//         if (!value?.trim()) return [];

//         try {
//             const parsed = JSON.parse(value);

//             if (Array.isArray(parsed)) {
//                 return parsed.filter(
//                     (item) =>
//                         item &&
//                         typeof item.question === "string" &&
//                         typeof item.answer === "string"
//                 );
//             }

//             return [];
//         } catch {
//             return [];
//         }
//     };

//     const faqList = useMemo(() => parseFaqs(formData.faqs), [formData.faqs]);

//     const setFaqList = (list: FaqItem[]) => {
//         setFormData((prev) => ({
//             ...prev,
//             faqs: JSON.stringify(list, null, 2),
//         }));
//     };

//     const fetchKnowledge = async () => {
//         try {
//             const token = getToken();
//             if (!token) {
//                 toast.error("Authentication required.");
//                 return;
//             }

//             setFetching(true);

//             const response = await axios.post(
//                 `${apiUrl}/getknowledge`,
//                 {},
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );

//             if (response?.data?.success) {
//                 const data = response?.data?.data || {};

//                 let faqValue = data?.faqs || "";

//                 if (Array.isArray(faqValue)) {
//                     faqValue = JSON.stringify(faqValue, null, 2);
//                 }

//                 setFormData({
//                     aboutus: data?.aboutus || "",
//                     importantKnowledge: data?.importantKnowledge || "",
//                     service: data?.service || "",
//                     faqs: faqValue,
//                 });
//             }
//         } catch (error) {
//             toast.error("Failed to sync with Neural Cache.");
//         } finally {
//             setFetching(false);
//         }
//     };

//     useEffect(() => {
//         fetchKnowledge();
//     }, []);

//     const handleSingleSubmit = async (field: keyof FormDataType) => {
//         try {
//             const token = getToken();
//             if (!token) return;

//             setLoadingStates((prev) => ({ ...prev, [field]: true }));

//             const payload = { [field]: formData[field] };

//             const response = await axios.post(`${apiUrl}/extrainfo`, payload, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });

//             if (response?.data?.success || response?.data?.Success) {
//                 toast.success(`${field.toUpperCase()} updated successfully.`);
//             }
//         } catch (error) {
//             toast.error(`Failed to update ${field}.`);
//         } finally {
//             setLoadingStates((prev) => ({ ...prev, [field]: false }));
//         }
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     const openAddFaqModal = () => {
//         setEditingFaqIndex(null);
//         setFaqForm(defaultFaqForm);
//         setFaqModalOpen(true);
//     };

//     const openEditFaqModal = (index: number) => {
//         setEditingFaqIndex(index);
//         setFaqForm(faqList[index]);
//         setFaqModalOpen(true);
//     };

//     const closeFaqModal = () => {
//         setFaqModalOpen(false);
//         setEditingFaqIndex(null);
//         setFaqForm(defaultFaqForm);
//     };

//     const handleFaqSave = () => {
//         if (!faqForm.question.trim()) {
//             toast.error("Question is required.");
//             return;
//         }

//         if (!faqForm.answer.trim()) {
//             toast.error("Answer is required.");
//             return;
//         }

//         const updatedFaqs = [...faqList];

//         if (editingFaqIndex !== null) {
//             updatedFaqs[editingFaqIndex] = {
//                 question: faqForm.question.trim(),
//                 answer: faqForm.answer.trim(),
//             };
//             toast.success("FAQ updated in list.");
//         } else {
//             updatedFaqs.push({
//                 question: faqForm.question.trim(),
//                 answer: faqForm.answer.trim(),
//             });
//             toast.success("FAQ added in list.");
//         }

//         setFaqList(updatedFaqs);
//         closeFaqModal();
//     };

//     const handleFaqDelete = (index: number) => {
//         const updatedFaqs = faqList.filter((_, i) => i !== index);
//         setFaqList(updatedFaqs);
//         toast.success("FAQ removed from list.");
//     };

//     const modules = [
//         {
//             id: "faqs",
//             label: "FAQs",
//             icon: <IoBookOutline />,
//             color: "accent",
//             desc: "Frequently asked questions",
//         },
//         {
//             id: "aboutus",
//             label: "About Us",
//             icon: <IoInformationCircleOutline />,
//             color: "primary",
//             desc: "Core About Us info",
//         },
//         {
//             id: "service",
//             label: "Services",
//             icon: <IoBuildOutline />,
//             color: "secondary",
//             desc: "Operational capabilities",
//         },
//         {
//             id: "importantKnowledge",
//             label: "Knowledge",
//             icon: <IoFileTrayFullOutline />,
//             color: "primary",
//             desc: "Bulk knowledge base",
//         },
//     ];

//     const getColorClass = (color: string) => {
//         if (color === "primary") return "bg-primary text-white";
//         if (color === "secondary") return "bg-secondary text-white";
//         return "bg-accent text-white";
//     };

//     const getButtonClass = (color: string) => {
//         if (color === "primary") return "bg-primary text-white hover:bg-primary/90";
//         if (color === "secondary")
//             return "bg-secondary text-white hover:bg-secondary/90";
//         return "bg-accent text-white hover:bg-accent/90";
//     };

//     return (
//         <div className="min-h-screen bg-[#f8fafc] text-primary font-sans">
//             <div className="fixed inset-0 pointer-events-none overflow-hidden">
//                 <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px]" />
//                 <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-[80px]" />
//             </div>

//             <div className="relative z-10 max-w-7xl mx-auto py-16 px-6">
//                 <header className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-200 pb-10">
//                     <div className="space-y-2">
//                         <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full w-fit">
//                             <IoPulseOutline
//                                 className={fetching ? "animate-pulse text-accent" : "text-secondary"}
//                             />
//                             <span className="text-[10px] font-black uppercase tracking-widest">
//                                 {fetching ? "Syncing Modules..." : "Systems Online"}
//                             </span>
//                         </div>

//                         <h1 className="text-5xl font-black tracking-tighter text-primary">
//                             <span className="text-secondary">RESOURCES.</span>
//                         </h1>
//                     </div>

//                     <button
//                         onClick={fetchKnowledge}
//                         className="mt-6 md:mt-0 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors"
//                     >
//                         <IoCloudDownloadOutline className="text-lg" />
//                         Reload Environment
//                     </button>
//                 </header>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                     {modules.map((mod) => (
//                         <div
//                             key={mod.id}
//                             className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
//                         >
//                             <div className="flex justify-between items-start mb-6">
//                                 <div className="flex items-center gap-4">
//                                     <div
//                                         className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all ${getColorClass(
//                                             mod.color
//                                         )}`}
//                                     >
//                                         {mod.icon}
//                                     </div>

//                                     <div>
//                                         <h3 className="text-lg font-black tracking-tight text-primary uppercase leading-tight">
//                                             {mod.label}
//                                         </h3>
//                                         <p className="text-xs text-slate-400 font-medium">{mod.desc}</p>
//                                     </div>
//                                 </div>

//                                 {mod.id === "faqs" && (
//                                     <button
//                                         onClick={openAddFaqModal}
//                                         className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all text-[11px] font-bold uppercase tracking-wider"
//                                     >
//                                         <IoAdd className="text-base" />
//                                         Add FAQ
//                                     </button>
//                                 )}
//                             </div>

//                             {mod.id === "faqs" ? (
//                                 <div className="flex-1 flex flex-col">
//                                     <div className="flex-1 bg-slate-50/50 border border-slate-100 rounded-3xl p-4 min-h-[220px] max-h-[420px] overflow-y-auto">
//                                         {faqList.length === 0 ? (
//                                             <div className="h-full flex items-center justify-center text-center text-slate-400 text-sm">
//                                                 No FAQ added yet. Click <span className="mx-1 font-semibold">Add FAQ</span> to create one.
//                                             </div>
//                                         ) : (
//                                             <div className="space-y-3">
//                                                 {faqList.map((faq, index) => (
//                                                     <div
//                                                         key={index}
//                                                         className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm"
//                                                     >
//                                                         <div className="flex items-start justify-between gap-3">
//                                                             <div className="flex-1 min-w-0">
//                                                                 <h4 className="text-sm font-bold text-primary break-words">
//                                                                     Q. {faq.question}
//                                                                 </h4>
//                                                                 <p className="mt-2 text-sm text-slate-600 leading-relaxed break-words">
//                                                                     {faq.answer}
//                                                                 </p>
//                                                             </div>

//                                                             <div className="flex items-center gap-2 shrink-0">
//                                                                 <button
//                                                                     onClick={() => openEditFaqModal(index)}
//                                                                     className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition"
//                                                                     title="Edit FAQ"
//                                                                 >
//                                                                     <IoCreateOutline className="text-lg" />
//                                                                 </button>

//                                                                 <button
//                                                                     onClick={() => handleFaqDelete(index)}
//                                                                     className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-600 transition"
//                                                                     title="Delete FAQ"
//                                                                 >
//                                                                     <IoTrashOutline className="text-lg" />
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>

//                                     <div className="mt-6 flex items-center justify-between gap-4">
//                                         <div className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter italic">
//                                             Segment ID: faqs_01
//                                         </div>

//                                         <button
//                                             onClick={() => handleSingleSubmit("faqs")}
//                                             disabled={loadingStates["faqs"] || fetching}
//                                             className="flex items-center gap-2 px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all active:scale-95 disabled:opacity-50 bg-accent text-white hover:bg-accent/90"
//                                         >
//                                             {loadingStates["faqs"] ? (
//                                                 "Syncing..."
//                                             ) : (
//                                                 <>
//                                                     Commit Data <IoArrowForward className="text-sm" />
//                                                 </>
//                                             )}
//                                         </button>
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <>
//                                     <textarea
//                                         name={mod.id}
//                                         value={formData[mod.id as keyof FormDataType]}
//                                         onChange={handleChange}
//                                         placeholder={`Inject data into ${mod.label}...`}
//                                         className="flex-1 w-full bg-slate-50/50 border border-slate-100 rounded-3xl p-6 text-sm font-mono text-primary placeholder:text-slate-300 focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent/30 transition-all resize-none min-h-[220px]"
//                                     />

//                                     <div className="mt-6 flex items-center justify-between gap-4">
//                                         <div className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter italic">
//                                             Segment ID: {mod.id}_01
//                                         </div>

//                                         <button
//                                             onClick={() => handleSingleSubmit(mod.id as keyof FormDataType)}
//                                             disabled={loadingStates[mod.id] || fetching}
//                                             className={`flex items-center gap-2 px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all active:scale-95 disabled:opacity-50 ${getButtonClass(
//                                                 mod.color
//                                             )}`}
//                                         >
//                                             {loadingStates[mod.id] ? (
//                                                 "Syncing..."
//                                             ) : (
//                                                 <>
//                                                     Commit Data <IoArrowForward className="text-sm" />
//                                                 </>
//                                             )}
//                                         </button>
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {faqModalOpen && (
//                 <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center p-4">
//                     <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden">
//                         <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
//                             <div>
//                                 <h3 className="text-xl font-black text-primary uppercase tracking-tight">
//                                     {editingFaqIndex !== null ? "Edit FAQ" : "Add FAQ"}
//                                 </h3>
//                                 <p className="text-sm text-slate-400 mt-1">
//                                     Set question and answer for this FAQ record
//                                 </p>
//                             </div>

//                             <button
//                                 onClick={closeFaqModal}
//                                 className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50"
//                             >
//                                 <IoCloseOutline className="text-xl" />
//                             </button>
//                         </div>

//                         <div className="p-6 space-y-5">
//                             <div>
//                                 <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
//                                     Question
//                                 </label>
//                                 <input
//                                     type="text"
//                                     value={faqForm.question}
//                                     onChange={(e) =>
//                                         setFaqForm((prev) => ({ ...prev, question: e.target.value }))
//                                     }
//                                     placeholder="Enter FAQ question"
//                                     className="w-full h-14 rounded-2xl border border-slate-200 px-4 text-sm text-primary outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/30"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
//                                     Answer
//                                 </label>
//                                 <textarea
//                                     value={faqForm.answer}
//                                     onChange={(e) =>
//                                         setFaqForm((prev) => ({ ...prev, answer: e.target.value }))
//                                     }
//                                     placeholder="Enter FAQ answer"
//                                     className="w-full min-h-[180px] rounded-2xl border border-slate-200 p-4 text-sm text-primary outline-none resize-none focus:ring-4 focus:ring-accent/10 focus:border-accent/30"
//                                 />
//                             </div>
//                         </div>

//                         <div className="px-6 pb-6 flex items-center justify-end gap-3">
//                             <button
//                                 onClick={closeFaqModal}
//                                 className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50"
//                             >
//                                 Cancel
//                             </button>

//                             <button
//                                 onClick={handleFaqSave}
//                                 className="px-6 py-3 rounded-xl bg-accent text-white font-bold text-sm hover:bg-accent/90"
//                             >
//                                 {editingFaqIndex !== null ? "Update FAQ" : "Save FAQ"}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default KnowledgeTerminal;

"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
    IoBookOutline,
    IoInformationCircleOutline,
    IoBuildOutline,
    IoPulseOutline,
    IoFileTrayFullOutline,
    IoCloudDownloadOutline,
    IoArrowForward,
    IoAdd,
    IoCreateOutline,
    IoTrashOutline,
    IoCloseOutline,
} from "react-icons/io5";
import { apiUrl } from "@/config";
import { toast } from "react-toastify";

type FormDataType = {
    faqs: string;
    aboutus: string;
    service: string;
    importantKnowledge: string;
};

type FaqItem = {
    faq_id?: string | number;
    question: string;
    answer: string;
};

const defaultFaqForm: FaqItem = {
    faq_id: "",
    question: "",
    answer: "",
};

const KnowledgeTerminal = () => {
    const [formData, setFormData] = useState<FormDataType>({
        faqs: "",
        aboutus: "",
        service: "",
        importantKnowledge: "",
    });

    const [loadingStates, setLoadingStates] = useState<{ [key: string]: boolean }>({});
    const [fetching, setFetching] = useState(false);

    const [faqModalOpen, setFaqModalOpen] = useState(false);
    const [faqForm, setFaqForm] = useState<FaqItem>(defaultFaqForm);
    const [editingFaqId, setEditingFaqId] = useState<string | number | null>(null);
    const [faqSubmitting, setFaqSubmitting] = useState(false);

    const getToken = () =>
        typeof window !== "undefined"
            ? localStorage.getItem("customerToken")
            : null;

    const getHeaders = () => {
        const token = getToken();
        return token
            ? { Authorization: `Bearer ${token}` }
            : {};
    };

    const parseFaqs = (value: string): FaqItem[] => {
        if (!value?.trim()) return [];

        try {
            const parsed = JSON.parse(value);

            if (Array.isArray(parsed)) {
                return parsed.filter(
                    (item) =>
                        item &&
                        typeof item.question === "string" &&
                        typeof item.answer === "string"
                );
            }

            return [];
        } catch {
            return [];
        }
    };

    const faqList = useMemo(() => parseFaqs(formData.faqs), [formData.faqs]);

    const fetchKnowledge = async () => {
        try {
            const token = getToken();
            if (!token) {
                toast.error("Authentication required.");
                return;
            }

            setFetching(true);

            const response = await axios.post(
                `${apiUrl}/getknowledge`,
                {},
                {
                    headers: getHeaders(),
                }
            );

            if (response?.data?.success) {
                const data = response?.data?.data || {};

                let faqValue = data?.faqs || "";

                if (Array.isArray(faqValue)) {
                    faqValue = JSON.stringify(faqValue, null, 2);
                }

                setFormData({
                    aboutus: data?.aboutus || "",
                    importantKnowledge: data?.importantKnowledge || "",
                    service: data?.service || "",
                    faqs: faqValue,
                });
            }
        } catch (error) {
            console.error("fetchKnowledge error:", error);
            toast.error("Failed to sync with Neural Cache.");
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        fetchKnowledge();
    }, []);

    const handleSingleSubmit = async (field: keyof FormDataType) => {
        try {
            const token = getToken();
            if (!token) {
                toast.error("Authentication required.");
                return;
            }

            setLoadingStates((prev) => ({ ...prev, [field]: true }));

            const payload = { [field]: formData[field] };

            const response = await axios.post(`${apiUrl}/extrainfo`, payload, {
                headers: getHeaders(),
            });

            if (response?.data?.success || response?.data?.Success) {
                toast.success(`${field.toUpperCase()} updated successfully.`);
            } else {
                toast.error(response?.data?.message || `Failed to update ${field}.`);
            }
        } catch (error: any) {
            console.error(`handleSingleSubmit(${field}) error:`, error);
            toast.error(
                error?.response?.data?.message || `Failed to update ${field}.`
            );
        } finally {
            setLoadingStates((prev) => ({ ...prev, [field]: false }));
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const openAddFaqModal = () => {
        setEditingFaqId(null);
        setFaqForm(defaultFaqForm);
        setFaqModalOpen(true);
    };

    const openEditFaqModal = async (faq: FaqItem) => {
        if (!faq?.faq_id) {
            toast.error("faq_id not found for this FAQ.");
            return;
        }

        try {
            setFaqSubmitting(true);

            const response = await axios.post(
                `${apiUrl}/faq/edit`,
                { faq_id: faq.faq_id },
                {
                    headers: getHeaders(),
                }
            );

            if (response?.data?.success) {
                const data = response?.data?.data || {};

                setEditingFaqId(faq.faq_id);
                setFaqForm({
                    faq_id: faq.faq_id,
                    question: data?.question || "",
                    answer: data?.answer || "",
                });
                setFaqModalOpen(true);
            } else {
                toast.error(response?.data?.message || "Failed to fetch FAQ.");
            }
        } catch (error: any) {
            console.error("openEditFaqModal error:", error);
            toast.error(error?.response?.data?.message || "Failed to fetch FAQ.");
        } finally {
            setFaqSubmitting(false);
        }
    };

    const closeFaqModal = () => {
        setFaqModalOpen(false);
        setEditingFaqId(null);
        setFaqForm(defaultFaqForm);
    };

    const handleFaqSubmit = async () => {
        if (!faqForm.question.trim()) {
            toast.error("Question is required.");
            return;
        }

        if (!faqForm.answer.trim()) {
            toast.error("Answer is required.");
            return;
        }

        try {
            setFaqSubmitting(true);

            if (editingFaqId) {
                const response = await axios.post(
                    `${apiUrl}/faq/update`,
                    {
                        faq_id: editingFaqId,
                        question: faqForm.question.trim(),
                        answer: faqForm.answer.trim(),
                    },
                    {
                        headers: getHeaders(),
                    }
                );

                if (response?.data?.success) {
                    toast.success(response?.data?.message || "FAQ updated successfully.");
                    closeFaqModal();
                    fetchKnowledge();
                } else {
                    toast.error(response?.data?.message || "Failed to update FAQ.");
                }
            } else {
                const response = await axios.post(
                    `${apiUrl}/faq/add`,
                    {
                        question: faqForm.question.trim(),
                        answer: faqForm.answer.trim(),
                    },
                    {
                        headers: getHeaders(),
                    }
                );

                if (response?.data?.success) {
                    toast.success(response?.data?.message || "FAQ saved successfully.");
                    closeFaqModal();
                    fetchKnowledge();
                } else {
                    toast.error(response?.data?.message || "Failed to save FAQ.");
                }
            }
        } catch (error: any) {
            console.error("handleFaqSubmit error:", error);
            toast.error(
                error?.response?.data?.message ||
                (editingFaqId ? "Failed to update FAQ." : "Failed to save FAQ.")
            );
        } finally {
            setFaqSubmitting(false);
        }
    };

    const handleFaqDelete = async (faq: FaqItem) => {
        if (!faq?.faq_id) {
            toast.error("faq_id not found for this FAQ.");
            return;
        }

        try {
            const response = await axios.post(
                `${apiUrl}/faq/delete`,
                { faq_id: faq.faq_id },
                {
                    headers: getHeaders(),
                }
            );

            if (response?.data?.success) {
                toast.success(response?.data?.message || "FAQ deleted successfully.");
                fetchKnowledge();
            } else {
                toast.error(response?.data?.message || "Failed to delete FAQ.");
            }
        } catch (error: any) {
            console.error("handleFaqDelete error:", error);
            toast.error(error?.response?.data?.message || "Failed to delete FAQ.");
        }
    };

    const modules = [
        {
            id: "faqs",
            label: "FAQs",
            icon: <IoBookOutline />,
            color: "accent",
            desc: "Frequently asked questions",
        },
        {
            id: "aboutus",
            label: "About Us",
            icon: <IoInformationCircleOutline />,
            color: "primary",
            desc: "Core About Us info",
        },
        {
            id: "service",
            label: "Services",
            icon: <IoBuildOutline />,
            color: "secondary",
            desc: "Operational capabilities",
        },
        {
            id: "importantKnowledge",
            label: "Knowledge",
            icon: <IoFileTrayFullOutline />,
            color: "primary",
            desc: "Bulk knowledge base",
        },
    ];

    const getColorClass = (color: string) => {
        if (color === "primary") return "bg-primary text-white";
        if (color === "secondary") return "bg-secondary text-white";
        return "bg-accent text-white";
    };

    const getButtonClass = (color: string) => {
        if (color === "primary") return "bg-primary text-white hover:bg-primary/90";
        if (color === "secondary") return "bg-secondary text-white hover:bg-secondary/90";
        return "bg-accent text-white hover:bg-accent/90";
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] text-primary font-sans">
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto py-16 px-6">
                <header className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-200 pb-10">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full w-fit">
                            <IoPulseOutline
                                className={fetching ? "animate-pulse text-accent" : "text-secondary"}
                            />
                            <span className="text-[10px] font-black uppercase tracking-widest">
                                {fetching ? "Syncing Modules..." : "Systems Online"}
                            </span>
                        </div>

                        <h1 className="text-5xl font-black tracking-tighter text-primary">
                            <span className="text-secondary">RESOURCES.</span>
                        </h1>
                    </div>

                    <button
                        onClick={fetchKnowledge}
                        className="mt-6 md:mt-0 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors"
                    >
                        <IoCloudDownloadOutline className="text-lg" />
                        Reload Environment
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {modules.map((mod) => (
                        <div
                            key={mod.id}
                            className="group bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all ${getColorClass(
                                            mod.color
                                        )}`}
                                    >
                                        {mod.icon}
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-black tracking-tight text-primary uppercase leading-tight">
                                            {mod.label}
                                        </h3>
                                        <p className="text-xs text-slate-400 font-medium">{mod.desc}</p>
                                    </div>
                                </div>

                                {mod.id === "faqs" && (
                                    <button
                                        onClick={openAddFaqModal}
                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all text-[11px] font-bold uppercase tracking-wider"
                                    >
                                        <IoAdd className="text-base" />
                                        Add FAQ
                                    </button>
                                )}
                            </div>

                            {mod.id === "faqs" ? (
                                <div className="flex-1 flex flex-col">
                                    <div className="flex-1 bg-slate-50/50 border border-slate-100 rounded-3xl p-4 min-h-[220px] max-h-[420px] overflow-y-auto">
                                        {faqList.length === 0 ? (
                                            <div className="h-full flex items-center justify-center text-center text-slate-400 text-sm">
                                                No FAQ added yet. Click <span className="mx-1 font-semibold">Add FAQ</span> to create one.
                                            </div>
                                        ) : (
                                            <div className="space-y-3">
                                                {faqList.map((faq, index) => (
                                                    <div
                                                        key={faq.faq_id ?? index}
                                                        className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm"
                                                    >
                                                        <div className="flex items-start justify-between gap-3">
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="text-sm font-bold text-primary break-words">
                                                                    Q. {faq.question}
                                                                </h4>
                                                                <p className="mt-2 text-sm text-slate-600 leading-relaxed break-words">
                                                                    {faq.answer}
                                                                </p>
                                                            </div>

                                                            <div className="flex items-center gap-2 shrink-0">
                                                                <button
                                                                    onClick={() => openEditFaqModal(faq)}
                                                                    className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition"
                                                                    title="Edit FAQ"
                                                                >
                                                                    <IoCreateOutline className="text-lg" />
                                                                </button>

                                                                <button
                                                                    onClick={() => handleFaqDelete(faq)}
                                                                    className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-600 transition"
                                                                    title="Delete FAQ"
                                                                >
                                                                    <IoTrashOutline className="text-lg" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-6 flex items-center justify-between gap-4">
                                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter italic">
                                            Segment ID: faqs_01
                                        </div>

                                        <button
                                            onClick={fetchKnowledge}
                                            disabled={fetching}
                                            className="flex items-center gap-2 px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all active:scale-95 disabled:opacity-50 bg-accent text-white hover:bg-accent/90"
                                        >
                                            {fetching ? "Syncing..." : <>Refresh FAQ <IoArrowForward className="text-sm" /></>}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <textarea
                                        name={mod.id}
                                        value={formData[mod.id as keyof FormDataType]}
                                        onChange={handleChange}
                                        placeholder={`Inject data into ${mod.label}...`}
                                        className="flex-1 w-full bg-slate-50/50 border border-slate-100 rounded-3xl p-6 text-sm font-mono text-primary placeholder:text-slate-300 focus:bg-white focus:ring-4 focus:ring-accent/10 focus:border-accent/30 transition-all resize-none min-h-[220px]"
                                    />

                                    <div className="mt-6 flex items-center justify-between gap-4">
                                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter italic">
                                            Segment ID: {mod.id}_01
                                        </div>

                                        <button
                                            onClick={() => handleSingleSubmit(mod.id as keyof FormDataType)}
                                            disabled={loadingStates[mod.id] || fetching}
                                            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all active:scale-95 disabled:opacity-50 ${getButtonClass(
                                                mod.color
                                            )}`}
                                        >
                                            {loadingStates[mod.id] ? (
                                                "Syncing..."
                                            ) : (
                                                <>
                                                    Commit Data <IoArrowForward className="text-sm" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {faqModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                            <div>
                                <h3 className="text-xl font-black text-primary uppercase tracking-tight">
                                    {editingFaqId ? "Edit FAQ" : "Add FAQ"}
                                </h3>
                                <p className="text-sm text-slate-400 mt-1">
                                    Set question and answer for this FAQ record
                                </p>
                            </div>

                            <button
                                onClick={closeFaqModal}
                                className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50"
                            >
                                <IoCloseOutline className="text-xl" />
                            </button>
                        </div>

                        <div className="p-6 space-y-5">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                                    Question
                                </label>
                                <input
                                    type="text"
                                    value={faqForm.question}
                                    onChange={(e) =>
                                        setFaqForm((prev) => ({ ...prev, question: e.target.value }))
                                    }
                                    placeholder="Enter FAQ question"
                                    className="w-full h-14 rounded-2xl border border-slate-200 px-4 text-sm text-primary outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent/30"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                                    Answer
                                </label>
                                <textarea
                                    value={faqForm.answer}
                                    onChange={(e) =>
                                        setFaqForm((prev) => ({ ...prev, answer: e.target.value }))
                                    }
                                    placeholder="Enter FAQ answer"
                                    className="w-full min-h-[180px] rounded-2xl border border-slate-200 p-4 text-sm text-primary outline-none resize-none focus:ring-4 focus:ring-accent/10 focus:border-accent/30"
                                />
                            </div>
                        </div>

                        <div className="px-6 pb-6 flex items-center justify-end gap-3">
                            <button
                                onClick={closeFaqModal}
                                className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleFaqSubmit}
                                disabled={faqSubmitting}
                                className="px-6 py-3 rounded-xl bg-accent text-white font-bold text-sm hover:bg-accent/90 disabled:opacity-50"
                            >
                                {faqSubmitting
                                    ? "Please wait..."
                                    : editingFaqId
                                        ? "Update FAQ"
                                        : "Save FAQ"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KnowledgeTerminal;