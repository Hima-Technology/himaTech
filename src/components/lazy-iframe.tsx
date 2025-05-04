// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function LazyIframe({ url, fallbackImage }) {
//   const [loaded, setLoaded] = useState(false);
//   const [iframeBlocked, setIframeBlocked] = useState(false);

//   useEffect(() => {
//     // Check if iframe is likely to be blocked
//     fetch(url, { mode: 'no-cors' })
//       .catch(() => setIframeBlocked(true));
//   }, [url]);

//   if (iframeBlocked) {
//     return (
//       <div className="border-2 border-gray-200 rounded-lg h-[400px] relative">
//         <Image
//           src={fallbackImage}
//           alt="Website Preview"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/90 text-center">
//           <a 
//             href={url} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-hima-blue hover:underline"
//           >
//             View Live Site
//           </a>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="border-2 border-gray-200 rounded-lg h-[400px] relative">
//       {!loaded && (
//         <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
//       )}
//       <iframe
//         src={url}
//         className={`w-full h-full ${!loaded ? 'opacity-0' : 'opacity-100'}`}
//         onLoad={() => setLoaded(true)}
//         sandbox="allow-same-origin allow-scripts"
//         loading="lazy"
//         title={`${url} Preview`}
//       />
//     </div>
//   );
// }