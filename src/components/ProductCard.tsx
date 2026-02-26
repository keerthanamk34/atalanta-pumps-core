import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import ImageSlider from "./ImageSlider";

interface ProductCardProps {
  product: Product;
  onEnquire: (product: Product) => void;
}

const ProductCard = ({ product, onEnquire }: ProductCardProps) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="bg-card border border-border rounded-lg overflow-hidden group hover:border-primary/40 hover:shadow-lg transition-all duration-300"
  >
    <ImageSlider images={product.images} alt={product.name} />
    <div className="p-5">
      <Link to={`/products/${product.category}/${product.slug}`}>
        <h3 className="font-heading text-lg font-bold text-foreground mb-2 hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>
      </Link>
      <div className="flex gap-2 mb-3 flex-wrap">
        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">{product.hp}</span>
        <span className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-full">{product.categoryLabel}</span>
      </div>
      <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground mb-3">
        <span>Head: {product.head}</span>
        <span>Discharge: {product.discharge}</span>
        <span>Material: {product.construction}</span>
        <span>Power: {product.power}</span>
      </div>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.application}</p>
      <div className="flex gap-2">
        <Link
          to={`/products/${product.category}/${product.slug}`}
          className="flex-1 text-center border border-primary text-primary px-3 py-2 rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          View Details
        </Link>
        <button
          onClick={() => onEnquire(product)}
          className="flex-1 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:bg-industrial-dark transition-colors shadow-sm"
        >
          Get Quote
        </button>
      </div>
    </div>
  </motion.div>
);

export default ProductCard;
