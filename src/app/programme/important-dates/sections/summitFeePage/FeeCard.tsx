type FeeCardProps = {
  title: string;
  price: number;
  currency: string;
  features: string[];
};

export default function FeeCard({
  title,
  price,
  currency,
  features,
}: FeeCardProps) {
    return (
        <div className="bg-white border rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
            <p className="text-3xl font-bold text-primary mb-6">
                {currency} {price}
            </p>

            <ul className="space-y-2 text-gray-600">
                {features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
                ))}
            </ul>
        </div>
    );
}
