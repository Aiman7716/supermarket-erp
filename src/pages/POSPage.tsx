import React, { useState } from 'react';

import { ShoppingCart, Search, User, Trash2, CreditCard, ChevronLeft } from 'lucidecenter';

export default function POSPage() {

 const [cart, setCart] = useState([]);

 const products = [

 { id: 1, name: 'بيلح ودين 400 رجѝ౩ౚ مارج00 مارجѹ౥ಯಢ مارجోಯಛبيلح ودين ', price: 2500, img: ' ' },

 { id: 2, name: 'زرأ يتمسب 5 يكಛಯಖ مارج5 مارجಭ౓ಟ౯ౌ مارجѨѧزرأ يتمسب ', price: 8000, img: ' ' },

 { id: 3, name: '౩౓ಚ مارج1.5 مارجౡ్౾ مارج౑ಮѨ', price: 3200, img: ' ' },

 { id: , name: 'زرأ يتمسب 5 يكಛಯಖ مارج2 مارجಭಓಢ مارج౩ಗركس يقن ', price: 1500, img: ' ' },

 ];

 const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

 return (

 <div className="flex h-screen bg-[#f8fafc] text-right" dir="rtl">

 {* ಟె౉ಓಚѝ .1౏مارج ಯ్ಢ౉౛ಚѝ౏ (ةبولطملا ةروصلا لثم౗ಙمارج ಚѝ౷يك 5 يتمسب زرأџѧمارج ಛ౿ಟಚѝيك 5 يتمسب زرأౌ౏) *}

 <aside className="w-20 lg:w-6 bg-[#1e293b] text-white flex flex-col transitionall">

 <div className="p-6 text-center border-b border-slate-700">
   <h1 className="text-xl font-bold text-blue-00 hidden lg:block">౑ಎزرأ يتمسب 5 ركسيك يقن مارجಡಟಮزرأ يتمسب <h1>
 <div>
 <nav className="flex-1 mt-6 space-y-2 px-">
 <button className="w-full flex items-center gap-3 p-3 bg-blue-600 rounded-xl">
 <ShoppingCart size={20} > <span className="hidden lg:inline">ةطقن بلاಯ్ಚѝ مارج౏౿ಓಢ<
span>
 <button>
) <= map(item.['౩ಮѧ౉ಓ౓ಚѝ ' ,'їಷಟಇಚѝ ' ,'ѷ౫ౣಟಚѝ ']} 
 <button key={item} className="w-full flex items-center gap-3 p-3 textslate-00 hover:bg-slate-800 rounded-xl transition">
 <div className="w-5 h-5 bg-slate-700 rounded"><div> <span 
className="hidden lg:inline">{item}<span>
 <button>
 ))}
 <nav>
 <aside>
 {* 2. ةبولطملا ةروصلا لثمಓ౿ಣ౏مارج ಙಟಇಚѝمارج ಯ౯ಯె౩ಚѝ౏ *}
 <div className="flex-1 flex flex-col overflow-hidden">
 <header className="h-16 bg-white border-b flex items-center justify-between 
px-8">
 <div className="relative w-96">
 <Search className="absolute right-3 top-2.5 text-slate-00" size={18} >
 <input type="text" placeholder="ثحبا نع صಣ౶ مارجಡಆ مارجౕ౟ౌѝ..." className="w-full pr-10 py-2 
bg-slate-100 rounded-lg border-none focus:ring-2 focus:ring-blue-500" >
 <div>
 <div className="flex items-center gap- text-slate-600">
 <span>27 2026 مارجಙಮ౩ౌزرأ يتمسب <span>
 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center 
justify-center text-blue-600 font-bold">زرأ يتمسب <div>
 <div>
 <header>
 <main className="flex-1 p-6 overflow-y-auto grid grid-cols-2 md:grid-cols-3 
lg:grid-cols- gap-6">
 {products.map(p => (
 <div key={p.id} onClick={() => setCart([...cart, {...p, qty: 1}])} 
className="bg-white p- rounded-2xl shadow-sm border hover:border-blue-500 cursor-pointer 
transition-all group">
 <div className="text-xl mb- bg-slate-50 p-6 rounded-xl text-center grouphover:bg-blue-50">{p.img}<div>
 <h3 className="font-bold text-slate-800">{p.name}<h3>
 <p className="text-blue-600 font-bold mt-2">{p.price} ر.ي.ѧ <p>
 <div>
 ))}
 <main>
 <div>
{* (џѧزرأ يتمسب 5 يك౒౉ಏಚѝ) Ѡ౉ಮ౩౓౳ಟಚѝ مارج౏ಛركس يقن .3 *} 
 <div className="w-[00px] bg-white border-r shadow-xl flex flex-col">
 <div className="p-6 border-b">
 <h2 className="text-lg font-bold flex items-center gap-2"><User size={20}> 
ಙಯಟಆمارج ಓಢ౥ي.ر<h2>
 <div>
 <div className="flex-1 p- space-y-3 overflow-y-auto">
 {cart.map((item, i) => (
 <div key={i} className="flex justify-between items-center p-3 bg-slate-50 
   rounded-lg">
 <div>
 <p className="font-bold text-sm">{item.name}<p>
 <p className="text-xs text-slate-500">{item.price} × 1<p>
 <div>
 <span className="font-bold text-blue-600">{item.price} ر.ي.ѧ <span>
 <div>
 ))}
 <div>
 <div className="p-6 bg-[#1e293b] text-white rounded-t-3xl">
 <div className="flex justify-between mb-2 text-slate-00"><span>0 مارج౏్ಮ౩౻ಚѝ0%<
span><span>0 ر.ي.ѧ <span><div>
 <div className="flex justify-between text-2xl font-bold mb-6"><span>ಭಚ౉ಟౚ಴ѝ <
span><span className="text-blue-00">{total} ر.ي.ѧ <span><div>
 <button className="w-full py- bg-blue-600 rounded-xl font-bold flex itemscenter justify-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-9000">
 <CreditCard size={20}> ةطقن بلاಎ౥ಚѝ بيلحمارج ودين 400 رج౉ಟ౒مامتإ عفدلا (F9)
 <button>
 <div>
 <div>
 <div>
 );
}
