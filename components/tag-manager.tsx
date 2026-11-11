"use client";
import { useEffect } from "react";

/**
 * Consent-aware GTM bootstrap. Set NEXT_PUBLIC_GTM_ID only after creating
 * and configuring the container. Configure all vendor tags inside GTM to
 * use Google Consent Mode v2 and consent checks. This is a starter layer,
 * not a substitute for a certified CMP or legal review.
 */
export function TagManager() {
 useEffect(()=>{
  const id=process.env.NEXT_PUBLIC_GTM_ID;
  if(!id || !/^GTM-[A-Z0-9]+$/.test(id)) return;
  const w=window as Window & {dataLayer?:any[];gtag?: (...args:any[])=>void;__gtmStarted?:boolean};
  w.dataLayer=w.dataLayer||[];
  w.gtag=w.gtag||function(){w.dataLayer!.push(arguments);};
  w.gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied",functionality_storage:"granted",security_storage:"granted",wait_for_update:500});
  const load=()=>{
   if(w.__gtmStarted)return;
   if(window.localStorage.getItem("site-consent")!=="all")return;
   w.__gtmStarted=true;
   w.gtag!("consent","update",{ad_storage:"granted",ad_user_data:"granted",ad_personalization:"granted",analytics_storage:"granted"});
   w.dataLayer!.push({ "gtm.start": Date.now(),event:"gtm.js" });
   const script=document.createElement("script");
   script.async=true;script.src="https://www.googletagmanager.com/gtm.js?id="+encodeURIComponent(id);
   document.head.appendChild(script);
  };
  load();
  window.addEventListener("site-consent-updated",load);
  return ()=>window.removeEventListener("site-consent-updated",load);
 },[]);
 return null;
}
