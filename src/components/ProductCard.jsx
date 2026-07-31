const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm">
      {/* Product Image */}
      <div className="h-64 bg-zinc-800 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 space-y-3">
        <h2 className="text-lg font-semibold text-white line-clamp-1">
          {product.title}
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-400">
            ${product.price}
          </span>

          <span className="text-sm text-zinc-400">
            Stock: {product.stock}
          </span>
        </div>

        <button
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2.5 rounded-xl transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;