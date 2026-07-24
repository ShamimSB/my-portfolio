// import React from 'react';

import { addDoc } from "firebase/firestore";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Contact = () => {

  const [data,setData] = useState({name:"", email:"",message:""});
  const [loding,setLoding] = useState(false);
  const [status,setStatus] = useState("");

const handleChange = (e)=>{
  setData({...data,[e.target.name]: e.target.value})
};

const handleSubmit = async (e)=>{
  e.preventDefault();
  setLoding(true);
  setStatus("");

  try{
    await addDoc(collection(db,"contacts"),{
      name: data.name,
      email: data.email,
      message: data.message,
      createdAt: serverTimestamp()
    });
    setStatus("success");
    setData({name:"",email:"",message:""});
  }catch(error){
    console.error('Error adding document: ',error);
    setStatus('error')
  }finally{
    setLoding(false)
  }
}


  return (
    <div className="bg-slate-800 text-white min-h-[86vh] flex flex-col justify-center pt-20 px-8 pb-12">
      <div className="max-w-5xl mx-auto w-full space-y-10">
  {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Get <span className="text-amber-400">Touch</span></h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">Have a project in mind, a question, or just want to say hi? Fell free to send me a message!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {/* Info side */}
          <div className="bg-slate-900 border border-slate-700/60 rounded-2xl p-6 space-y-6 flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <div className="bg-amber-400/10 p-3 rounded-lg text-amber-400 text-xl">
                <FaEnvelope/>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-400">Email Me</h4>
                <p className="text-slate-200 text-sm font-medium break-all">bhuiyanshamim09@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-amber-400/10 p-3 rounded-lg text-amber-400 text-xl">
                <FaMapMarkerAlt/>
              </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-400">Location</h4>
              <p className="text-slate-200 text-sm font-medium break-all">Narsingdi,Dhaka,Bangladesh</p>
            </div>
            </div>
          </div>

    {/* Form side */}
        <div className="md:col-span-2 bg-slate-900 border border-slate-700/60 rounded-2xl p-6 md:p-8 shadow-xl">
          {status === "success" && (
            <div className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 p-3 rounded-lg mb-4 text-sm font-medium">
              Message sent successfully! I will get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="bg-rose-500/10 border border-rose-500/50 text-rose-400 p-3 rounded-lg mb-4 text-sm font-medium">
              Failed to send message. Please try to again!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">Your Name : </label>
              <input type="text" name="name" value={data.name} onChange={handleChange} required placeholder="John Doe" id="name" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2 mt-3">Your Email: </label>
              <input type="email" name="email" value={data.email} onChange={handleChange} required placeholder="john@example.com" id="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2 mt-3">Your Message: </label>
              <textarea name="message" id="message" rows="4" value={data.message} onChange={handleChange} required placeholder="Write your message here..." className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-100 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"></textarea>
            </div>

            <button type="submit" disabled={loding} className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-500/50 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"> <FaPaperPlane className="text-sm"/> {loding ? "Sending" : "Send Message"}</button>

          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;