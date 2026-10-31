import ProductCard, { type ProductData } from './components/ProductCard';

const mockProducts: ProductData[] = [
  { id: 1, name: 'Wireless Headphones', description: 'หูฟังไร้สาย เสียงคมชัด ตัดเสียงรบกวน ใช้งานได้นาน 30 ชั่วโมง', price: 2990, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
  { id: 2, name: 'Smart Watch', description: 'นาฬิกาอัจฉริยะ วัดอัตราการเต้นหัวใจ กันน้ำ พร้อมแจ้งเตือน', price: 4590, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
  { id: 3, name: 'Instant Camera', description: 'กล้องฟิล์มอินสแตนท์ ถ่ายแล้วได้รูปทันที ดีไซน์เรโทรสุดน่ารัก', price: 3290, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500' },
  { id: 4, name: 'Running Shoes', description: 'รองเท้าวิ่งน้ำหนักเบา พื้นนุ่ม รองรับแรงกระแทกได้ดีเยี่ยม', price: 3890, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' },
  { id: 5, name: 'Sunglasses', description: 'แว่นกันแดดกรองแสง UV400 กรอบน้ำหนักเบา ใส่สบายทั้งวัน', price: 1290, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500' },
  { id: 6, name: 'Travel Backpack', description: 'กระเป๋าเป้เดินทางจุได้เยอะ มีช่องใส่โน้ตบุ๊ก ผ้ากันน้ำ', price: 1890, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500' },
  { id: 7, name: 'Perfume', description: 'น้ำหอมกลิ่นหอมละมุน ติดทนนาน เหมาะกับทุกโอกาส', price: 2490, image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500' },
  { id: 8, name: 'Mechanical Keyboard', description: 'คีย์บอร์ดเมคานิคอล ตอบสนองไว มีไฟ RGB สวยงาม', price: 2790, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500' }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">My Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;