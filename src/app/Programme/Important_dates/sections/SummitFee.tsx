// export default function SummitFee() {
//   return (
//     <section id="summit-fee" className="scroll-mt-8">
//       <h2 className="heading-2 text-primary mb-10">Summit Fee</h2>

//       {/* ================= INFORMATION ================= */}
//       <ul className="list-disc pl-6 space-y-3 body-text mb-16">
//         <li>
//           Each SEAMEO Unit will receive 2 quotas to be exempted from summit fee.
//         </li>
//         <li>
//           Kindly note that the summit fees are inclusive of local transportation
//           (only provided to delegates staying at selected hotels), refreshments
//           and tours. Other expenses including airfare, accommodation, and per
//           diem will be borne by the respective organisation.
//         </li>
//         <li>
//           Payment for the summit fees can be made via:
//           <ul className="list-disc pl-6 mt-2 space-y-1">
//             <li>
//               Bank transfer (Bank details: https://bit.ly/45aIF02 and please
//               upload the proof of payment via this link: https://bit.ly/4OVQCTS)
//             </li>
//             <li>
//               Direct payment at the registration counter during the Summit
//             </li>
//           </ul>
//         </li>
//       </ul>

//       {/* ================= INTERNATIONAL FEES ================= */}
//       <h3 className="heading-3 text-primary mb-6">International Category</h3>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
//         {[
//           { title: "SEAMEO Units and Ministries", price: "USD150" },
//           { title: "Education Institutions and Partners", price: "USD200" },
//           { title: "Students", price: "USD75" },
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="bg-secondary text-white p-6 rounded-2xl shadow-md"
//           >
//             <h4 className="heading-4 mb-3">{item.title}</h4>
//             <p className="heading-2 text-white mb-4">{item.price}</p>
//             <ul className="text-small space-y-1">
//               <li>✔ Refreshments and lunch included</li>
//               <li>✔ Access to all summit sessions</li>
//               <li>✔ Networking opportunities</li>
//               <li>✔ Local transportation (for designated hotels)</li>
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* ================= LOCAL FEES ================= */}
//       <h3 className="heading-3 text-primary mb-6">Local Category</h3>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {[
//           {
//             title: "Education Institutions/ Partners/ Ministries",
//             price: "BND150",
//           },
//           { title: "Students", price: "BND75" },
//         ].map((item, i) => (
//           <div
//             key={i}
//             className="bg-secondary text-white p-6 rounded-2xl shadow-md"
//           >
//             <h4 className="heading-4 mb-3">{item.title}</h4>
//             <p className="heading-2 text-white mb-4">{item.price}</p>
//             <ul className="text-small space-y-1">
//               <li>✔ Refreshments and lunch included</li>
//               <li>✔ Access to all summit sessions</li>
//               <li>✔ Networking opportunities</li>
//               <li>✔ Local transportation (for designated hotels)</li>
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// sementara 
export default function SummitFee() {
  return (
    <section id="summit-fee" className="scroll-mt-8">
      <h2 className="heading-2 text-secondary mb-10">Summit Fee</h2>

      <div className="bg-accent-soft-2 border border-dashed border-secondary rounded-2xl p-12 text-center">
        <div className="text-5xl mb-4">💳</div>
        <h3 className="heading-3 text-primary mb-2">Coming Soon</h3>
        <p className="body-text max-w-md mx-auto">
          Information regarding summit fees will be announced soon.
          Please stay tuned for updates.
        </p>
      </div>
    </section>
  );
}
