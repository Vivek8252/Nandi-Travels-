
import React, { useState } from "react";
import { t } from "./i18n";
import Button from "./components/ui/Button";
import Badge from "./components/ui/Badge";
import { Card, CardHeader, CardContent, CardTitle } from "./components/ui/Card";
import { Input } from "./components/ui/Input";
import { Textarea } from "./components/ui/Textarea";
import Rating from "./components/ui/Rating";
import { Phone, MapPin, Mail } from "lucide-react";

const IMAGES = {
  hero: "https://t3.ftcdn.net/jpg/02/68/99/18/240_F_268991837_FvQbODmbqMoeLWb0ffBxdJpEVAaOHciM.jpg",
  kashi: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop",
  sarnath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyISZScLPbDBhaqlFPJp30VOSrMLfCNVo96A&s",
  prayagraj: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop",
  gallery1: "https://t3.ftcdn.net/jpg/04/73/49/68/240_F_473496862_eyg13ZsTJyrMKekoEjUck0ZMmiZk9j5b.jpg",
  gallery2: "https://t4.ftcdn.net/jpg/09/48/15/85/240_F_948158574_zSB3JZMs5vz5GVTWTRDjKiqEIc9zjhm8.jpg",
  gallery3: "https://t3.ftcdn.net/jpg/05/38/17/02/240_F_538170267_PrUCPdgyLhm2pDPLbFAzCMlQ7jIy5Ran.jpg"
};

export default function App(){
  const [lang, setLang] = useState("hi");
  const L = (k)=> t(lang,k);

  const [form, setForm] = useState({name:'',phone:'',pickup:'',drop:'',date:'',pax:'',notes:'',pkg:''});
  const whatsappNumber = "+917268838241".replace(/\D/g,'');

  const packages = [
    {key:'kashi', title:L('kashiTitle'), desc:L('kashiDesc'), price:1499, img:IMAGES.kashi},
    {key:'sarnath', title:L('sarnathTitle'), desc:L('sarnathDesc'), price:1500, img:IMAGES.sarnath},
    {key:'prayagraj', title:L('prayagrajTitle'), desc:L('prayagrajDesc'), price:3500, img:IMAGES.prayagraj},
    {key:'airport', title:L('airportTitle'), desc:L('airportDesc'), price:1050, img:IMAGES.hero},
  ];

  const makeWhatsApp = () => {
    const msg = `${t(lang,'whatsappText')}\nName: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDrop: ${form.drop}\nDate: ${form.date}\nPax: ${form.pax}\nPackage: ${form.pkg}\nNotes: ${form.notes}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div>
      {/* NAV */}
      <nav className="fixed w-full z-40 header-glass border-b">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-amber-100 grid place-items-center font-bold text-amber-800"><img src='/logo-light.png' alt='Nandi Travels' className='h-10' /></div>
            <div>
              <div className="text-xs text-slate-600">{L('tagline')}</div>
              <div className="font-extrabold text-lg">{L('brand')}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a className="hidden md:inline-block text-sm" href="#packages">{L('packages')}</a>
            <a className="hidden md:inline-block text-sm" href="#fleet">{L('fleet')}</a>
            <a className="hidden md:inline-block text-sm" href="#gallery">{L('gallery')}</a>
            <button onClick={()=>setLang(lang==='hi'?'en':'hi')} className="px-3 py-1 rounded text-sm">{lang==='hi'?'English':'हिन्दी'}</button>
            <a className="px-3 py-2 rounded-full bg-amber-600 text-white" href={`tel:${t(lang,'phone')}`}><Phone className="inline-block mr-2" />{t(lang,'phone')}</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-28 pb-12">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge>{L('tagline')}</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">{L('heroTitle')}</h1>
            <p className="mt-4 text-slate-600 max-w-xl">{L('heroDesc')}</p>
            <div className="mt-6 flex gap-3">
              <a href="#book" className="px-5 py-3 rounded-full bg-primary text-white shadow">{L('bookNow')}</a>
              <a target="_blank" rel="noreferrer" href={`https://wa.me/${whatsappNumber}`} className="px-5 py-3 rounded-full border">{L('viewPackages')}</a>
            </div>
            <div className="mt-6 text-sm text-slate-600 flex gap-4">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />Varanasi • Sarnath • Prayagraj</div>
            </div>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={IMAGES.hero} alt="Ganga Aarti" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* PACKAGES */}
      <section id="packages" className="py-12">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{L('packages')}</h2>
            <div className="text-sm text-slate-600">Transparent pricing • Customizable</div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {packages.map(p=>(
              <div key={p.key} className="flex gap-4 items-center card-elev p-4 rounded-2xl bg-white">
                <img src={p.img} className="w-40 h-28 object-cover rounded-lg" alt={p.title} />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <div className="text-sm text-slate-600 mt-1">{p.desc}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">₹{p.price}</div>
                      <div className="text-sm text-slate-500"> </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button className="px-4 py-2 rounded-full bg-primary text-white" onClick={()=>window.scrollTo({top:document.getElementById('book').offsetTop-80, behavior:'smooth'})}>{L('bookNow')}</button>
                    <a target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(p.title + ' - enquiry')}`}>WhatsApp</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section id="fleet" className="py-12 bg-slate-50">
        <div className="container">
          <h3 className="text-xl font-bold">{L('fleet')}</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <Card>
              <CardTitle>Dzire / Sedan</CardTitle>
              <div className="text-sm text-slate-600 mt-1">AC • 4 seats • Luggage space</div>
            </Card>
            <Card>
              <CardTitle>Innova Crysta</CardTitle>
              <div className="text-sm text-slate-600 mt-1">AC • 6 seats • Comfortable for family</div>
            </Card>
            <Card>
              <CardTitle>Tempo Traveller</CardTitle>
              <div className="text-sm text-slate-600 mt-1">AC • 10-12 seats • Group travel</div>
            </Card>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="py-16">
        <div className="container grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold">{L('bookNow')}</h3>
            <p className="text-slate-600 mt-2">{L('contactTitle')}</p>
            <form className="mt-4 space-y-3" onSubmit={(e)=>{e.preventDefault(); window.open(`https://wa.me/${whatsappNumber}?text=`+encodeURIComponent(JSON.stringify(form)), '_blank');}}>
              <Input placeholder={lang==='hi'?'आपका नाम*':'Your name*'} value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
              <Input placeholder={lang==='hi'?'फोन नंबर*':'Phone*'} value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder={lang==='hi'?'Pickup*':'Pickup*'} value={form.pickup} onChange={(e)=>setForm({...form, pickup:e.target.value})} />
                <Input placeholder={lang==='hi'?'Drop':'Drop'} value={form.drop} onChange={(e)=>setForm({...form, drop:e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Input type="date" value={form.date} onChange={(e)=>setForm({...form, date:e.target.value})} />
                <Input type="number" placeholder="Pax" value={form.pax} onChange={(e)=>setForm({...form, pax:e.target.value})} />
              </div>
              <select className="border rounded px-3 py-2 w-full" value={form.pkg} onChange={(e)=>setForm({...form, pkg:e.target.value})}>
                <option value="">{lang==='hi'?'पैकेज चुनें':'Choose package'}</option>
                {packages.map(p=> <option key={p.key} value={p.title}>{p.title}</option>)}
              </select>
              <Textarea placeholder={lang==='hi'?'नोट्स':'Notes'} value={form.notes} onChange={(e)=>setForm({...form, notes:e.target.value})} />
              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 rounded-full bg-primary text-white">{lang==='hi'?'WhatsApp भेजें':'Send on WhatsApp'}</button>
                <a className="px-4 py-2 rounded-full border" href={`mailto:${t(lang,'email')}?subject=Booking Enquiry`}>{lang==='hi'?'Email भेजें':'Send Email'}</a>
              </div>
            </form>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>{L('contactTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2"><Phone className="mr-2" /> <a href={`tel:${t(lang,'phone')}`} className="text-amber-700">{t(lang,'phone')}</a></div>
                <div className="flex items-center gap-2 mt-2"><Mail className="mr-2" /> <a href={`mailto:${t(lang,'email')}`} className="text-amber-700">{t(lang,'email')}</a></div>
                <div className="mt-3 text-sm text-slate-600">Address: The Lion gym,Hariom Nagar Colony Samneghat Rd Lanka Varanasi 221005, Uttar Pradesh</div>
                <div className="mt-4">
                  <iframe title="map" src="https://www.google.com/maps?q=Nandi Travels Varanasi hariom nagar colony &output=embed" className="w-full h-44 border-0 rounded" />
                </div>
              </CardContent>
            </Card>
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Reviews</h4>
              <div className="mt-3 grid gap-3">
                <div className="p-3 bg-white rounded-2xl card-elev">
                  <div className="flex items-start justify-between"><div><strong>Rahul</strong><div className="text-sm text-slate-600">Driver punctual and polite.</div></div><Rating value={5} /></div>
                </div>
                <div className="p-3 bg-white rounded-2xl card-elev">
                  <div className="flex items-start justify-between"><div><strong>Priya</strong><div className="text-sm text-slate-600">Clean cars and friendly staff.</div></div><Rating value={5} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-12 bg-slate-50">
        <div className="container">
          <h3 className="text-xl font-bold">{L('gallery')}</h3>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <img src={IMAGES.gallery1} className="w-full h-48 object-cover rounded-lg" />
            <img src={IMAGES.gallery2} className="w-full h-48 object-cover rounded-lg" />
            <img src={IMAGES.gallery3} className="w-full h-48 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t mt-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} {L('brand')}</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a className="text-slate-600" href="#">Instagram</a>
            <a className="text-slate-600" href="#">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
