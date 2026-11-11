"use client";
import { useEffect, useState } from "react";
export function ConsentBanner({ locale }: { locale: "es" | "en" }) {
 const [visible,setVisible]=useState(false);
 useEffect(()=>{setVisible(!window.localStorage.getItem("site-consent"));},[]);
 if(!visible)return null;
 const es=locale==="es";
 const save=(choice:string)=>{window.localStorage.setItem("site-consent",choice);setVisible(false);};
 return <aside className="consent-banner" role="dialog" aria-live="polite" aria-label={es?"Preferencias de cookies":"Cookie preferences"}><div><strong>{es?"Tu privacidad importa":"Your privacy matters"}</strong><p>{es?"Usamos cookies necesarias y, si lo autorizas, tecnologías de medición y marketing. Configura tus preferencias.":"We use necessary cookies and, with your permission, measurement and marketing technologies. Choose your preferences."}</p></div><div className="consent-actions"><button onClick={()=>save("essential")}>{es?"Solo necesarias":"Essential only"}</button><button className="button button-dark" onClick={()=>save("all")}>{es?"Aceptar todas":"Accept all"}</button></div></aside>;
}
