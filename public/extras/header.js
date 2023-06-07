import Script from "next/script";
export default function ExtraHeaderScripts() {
  return (<>
    {/* <!-- Google tag (gtag.js) --> */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-187520717-1"></Script>
    <script dangerouslySetInnerHTML={{__html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-187520717-1');
    `}} />
    <Script strategy={'beforeInteractive'} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5146054383186265" crossOrigin="anonymous"></Script>
    <Script strategy={'beforeInteractive'} async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></Script>
    <script dangerouslySetInnerHTML={{__html:`
      window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
        googletag.defineSlot('/22901649087/sidebar', [[120, 600], [200, 446], [240, 400], [120, 240]], 'div-gpt-ad-1680994203642-0').addService(googletag.pubads());
        googletag.defineSlot('/22901649087/sidebar2', [[120, 240], [120, 600], [200, 446], [240, 400]], 'div-gpt-ad-1680994309478-0').addService(googletag.pubads());
        googletag.defineSlot('/22901649087/contentButtom', [[250, 250], [300, 250]], 'div-gpt-ad-1680994690027-0').addService(googletag.pubads())
        googletag.defineSlot('/22901649087/contentBottom2', [[250, 250], [300, 250]], 'div-gpt-ad-1681030185439-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
    `}} />
  </>)
}