import Bottomnav from "@/app/Components/Bottomnav";

export default function Page() {
    const products = [
        { id: 1, name: "Pain Reliever", price: "$10.99", description: "Effective pain relief for headaches and body aches." },
        { id: 2, name: "Cold & Flu Medicine", price: "$8.49", description: "Relief from cold and flu symptoms." },
        { id: 3, name: "Allergy Relief", price: "$12.99", description: "Fast relief from allergy symptoms." },
        { id: 4, name: "Digestive Aid", price: "$9.99", description: "Helps with digestive discomfort." },
        { id: 5, name: "Cough Syrup", price: "$7.99", description: "Soothes cough and throat irritation." },
        { id: 6, name: "Vitamins", price: "$15.99", description: "Daily vitamins for overall health." },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Shop for Medicines</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
                    >
                        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                        <p className="text-lg text-gray-600">{product.price}</p>
                        <p className="text-gray-500 mt-2">{product.description}</p>
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            <Bottomnav/>
        </div>
    );
}

