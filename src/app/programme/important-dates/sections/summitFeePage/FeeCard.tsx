type FeeCardProps = {
    title: string;
    price: number;
    currency: string;
};

export default function FeeCard({
    title,
    price,
    currency,
}: FeeCardProps) {
    return (
        <div className="bg-secondary text-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between h-full">

        {/* Title */}
        <h4 className="heading-4 mb-4">{title}</h4>

        {/* Price */}
        <div className="mb-6">
            <span className="text-lg opacity-80">{currency}</span>
            <span className="text-5xl font-bold ml-2">{price}</span>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-4"></div>

        {/* Note */}
        <p className="text-small opacity-80">
            Conference registration fee
        </p>

        </div>
    );
}


// dengan features
// type FeeCardProps = {
//   title: string;
//   price: number;
//   currency: string;
//   features: string[];
// };

// export default function FeeCard({
//   title,
//   price,
//   currency,
//   features,
// }: FeeCardProps) {
//     return (
//         <div className="bg-secondary text-white p-6 rounded-2xl shadow-md">
//             <h4 className="heading-4 mb-3">{title}</h4>
//             <p className="text-3xl font-bold text-white mb-4">
//                 {currency} {price}
//             </p>

//             <ul className="text-small space-y-1">
//                 {features.map((feature, i) => (
//                 <li key={i}>✔ {feature}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }