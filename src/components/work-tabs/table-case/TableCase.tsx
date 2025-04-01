import React, { useState, useEffect, useMemo } from 'react';
import { Table, Form, Button, Modal, Pagination } from 'react-bootstrap';
import './TableCase.scss';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

interface Order {
  id: number;
  customerName: string;
  status: 'pending' | 'completed' | 'cancelled';
  total: number;
  date: string;
}

const initialProducts: Product[] = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 10 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 699.99, stock: 15 },
  { id: 3, name: 'Headphones', category: 'Accessories', price: 99.99, stock: 20 },
  { id: 4, name: 'Mouse', category: 'Accessories', price: 29.99, stock: 30 },
  { id: 5, name: 'Keyboard', category: 'Accessories', price: 59.99, stock: 25 },
];

const initialOrders: Order[] = [
  { id: 1, customerName: 'John Doe', status: 'pending', total: 1099.98, date: '2024-03-15' },
  { id: 2, customerName: 'Jane Smith', status: 'completed', total: 699.99, date: '2024-03-14' },
  { id: 3, customerName: 'Bob Johnson', status: 'cancelled', total: 99.99, date: '2024-03-13' },
  { id: 4, customerName: 'Alice Brown', status: 'pending', total: 29.99, date: '2024-03-12' },
  { id: 5, customerName: 'Charlie Wilson', status: 'completed', total: 59.99, date: '2024-03-11' },
];

const ITEMS_PER_PAGE = 5;

const TableCase: React.FC = () => {
  // Products state
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [productSearch, setProductSearch] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPage, setProductPage] = useState(1);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    category: '',
    price: 0,
    stock: 0,
  });

  // Orders state
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [orderPage, setOrderPage] = useState(1);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [newOrder, setNewOrder] = useState<Omit<Order, 'id'>>({
    customerName: '',
    status: 'pending',
    total: 0,
    date: new Date().toISOString().split('T')[0],
  });

  // Filtered and paginated products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(productSearch.toLowerCase());
      const matchesCategory = !productCategory || product.category === productCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, productSearch, productCategory]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (productPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, productPage]);

  // Filtered and paginated orders
  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      const matchesSearch = order.customerName.toLowerCase().includes(orderSearch.toLowerCase());
      const matchesStatus = !orderStatus || order.status === orderStatus;
      return matchesSearch && matchesStatus;
    });
  }, [orders, orderSearch, orderStatus]);

  const paginatedOrders = useMemo(() => {
    const startIndex = (orderPage - 1) * ITEMS_PER_PAGE;
    return filteredOrders.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredOrders, orderPage]);

  // Product handlers
  const handleAddProduct = () => {
    const newId = Math.max(...products.map(p => p.id), 0) + 1;
    setProducts([...products, { ...newProduct, id: newId }]);
    setShowProductModal(false);
    setNewProduct({ name: '', category: '', price: 0, stock: 0 });
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowProductModal(true);
  };

  const handleUpdateProduct = () => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p));
      setShowProductModal(false);
      setEditingProduct(null);
    }
  };

  const handleDeleteProduct = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // Order handlers
  const handleAddOrder = () => {
    const newId = Math.max(...orders.map(o => o.id), 0) + 1;
    setOrders([...orders, { ...newOrder, id: newId }]);
    setShowOrderModal(false);
    setNewOrder({
      customerName: '',
      status: 'pending',
      total: 0,
      date: new Date().toISOString().split('T')[0],
    });
  };

  const handleEditOrder = (order: Order) => {
    setEditingOrder(order);
    setShowOrderModal(true);
  };

  const handleUpdateOrder = () => {
    if (editingOrder) {
      setOrders(orders.map(o => o.id === editingOrder.id ? editingOrder : o));
      setShowOrderModal(false);
      setEditingOrder(null);
    }
  };

  const handleDeleteOrder = (id: number) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      setOrders(orders.filter(o => o.id !== id));
    }
  };

  return (
    <div className="table-case">
      {/* Products Table */}
      <div className="table-section">
        <div className="table-header">
          <h2>Products</h2>
          <div className="table-controls">
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={productSearch}
              onChange={(e) => setProductSearch(e.target.value)}
              className="search-input"
            />
            <Form.Select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              className="filter-select"
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
            </Form.Select>
            <Button variant="primary" onClick={() => setShowProductModal(true)}>
              Add Product
            </Button>
          </div>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.stock}</td>
                <td>
                  <Button variant="outline-primary" size="sm" onClick={() => handleEditProduct(product)}>
                    Edit
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination className="justify-content-center">
          {Array.from({ length: Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === productPage}
              onClick={() => setProductPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>

      {/* Orders Table */}
      <div className="table-section">
        <div className="table-header">
          <h2>Orders</h2>
          <div className="table-controls">
            <Form.Control
              type="text"
              placeholder="Search orders..."
              value={orderSearch}
              onChange={(e) => setOrderSearch(e.target.value)}
              className="search-input"
            />
            <Form.Select
              value={orderStatus}
              onChange={(e) => setOrderStatus(e.target.value)}
              className="filter-select"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </Form.Select>
            <Button variant="primary" onClick={() => setShowOrderModal(true)}>
              Add Order
            </Button>
          </div>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.status}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>{order.date}</td>
                <td>
                  <Button variant="outline-primary" size="sm" onClick={() => handleEditOrder(order)}>
                    Edit
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDeleteOrder(order.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination className="justify-content-center">
          {Array.from({ length: Math.ceil(filteredOrders.length / ITEMS_PER_PAGE) }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === orderPage}
              onClick={() => setOrderPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>

      {/* Product Modal */}
      <Modal show={showProductModal} onHide={() => {
        setShowProductModal(false);
        setEditingProduct(null);
        setNewProduct({ name: '', category: '', price: 0, stock: 0 });
      }}>
        <Modal.Header closeButton>
          <Modal.Title>{editingProduct ? 'Edit Product' : 'Add Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editingProduct ? editingProduct.name : newProduct.name}
                onChange={(e) => {
                  if (editingProduct) {
                    setEditingProduct({ ...editingProduct, name: e.target.value });
                  } else {
                    setNewProduct({ ...newProduct, name: e.target.value });
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={editingProduct ? editingProduct.category : newProduct.category}
                onChange={(e) => {
                  if (editingProduct) {
                    setEditingProduct({ ...editingProduct, category: e.target.value });
                  } else {
                    setNewProduct({ ...newProduct, category: e.target.value });
                  }
                }}
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Accessories">Accessories</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={editingProduct ? editingProduct.price : newProduct.price}
                onChange={(e) => {
                  if (editingProduct) {
                    setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) });
                  } else {
                    setNewProduct({ ...newProduct, price: parseFloat(e.target.value) });
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                value={editingProduct ? editingProduct.stock : newProduct.stock}
                onChange={(e) => {
                  if (editingProduct) {
                    setEditingProduct({ ...editingProduct, stock: parseInt(e.target.value) });
                  } else {
                    setNewProduct({ ...newProduct, stock: parseInt(e.target.value) });
                  }
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setShowProductModal(false);
            setEditingProduct(null);
            setNewProduct({ name: '', category: '', price: 0, stock: 0 });
          }}>
            Cancel
          </Button>
          <Button variant="primary" onClick={editingProduct ? handleUpdateProduct : handleAddProduct}>
            {editingProduct ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Order Modal */}
      <Modal show={showOrderModal} onHide={() => {
        setShowOrderModal(false);
        setEditingOrder(null);
        setNewOrder({
          customerName: '',
          status: 'pending',
          total: 0,
          date: new Date().toISOString().split('T')[0],
        });
      }}>
        <Modal.Header closeButton>
          <Modal.Title>{editingOrder ? 'Edit Order' : 'Add Order'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                value={editingOrder ? editingOrder.customerName : newOrder.customerName}
                onChange={(e) => {
                  if (editingOrder) {
                    setEditingOrder({ ...editingOrder, customerName: e.target.value });
                  } else {
                    setNewOrder({ ...newOrder, customerName: e.target.value });
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={editingOrder ? editingOrder.status : newOrder.status}
                onChange={(e) => {
                  if (editingOrder) {
                    setEditingOrder({ ...editingOrder, status: e.target.value as Order['status'] });
                  } else {
                    setNewOrder({ ...newOrder, status: e.target.value as Order['status'] });
                  }
                }}
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Total</Form.Label>
              <Form.Control
                type="number"
                value={editingOrder ? editingOrder.total : newOrder.total}
                onChange={(e) => {
                  if (editingOrder) {
                    setEditingOrder({ ...editingOrder, total: parseFloat(e.target.value) });
                  } else {
                    setNewOrder({ ...newOrder, total: parseFloat(e.target.value) });
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={editingOrder ? editingOrder.date : newOrder.date}
                onChange={(e) => {
                  if (editingOrder) {
                    setEditingOrder({ ...editingOrder, date: e.target.value });
                  } else {
                    setNewOrder({ ...newOrder, date: e.target.value });
                  }
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setShowOrderModal(false);
            setEditingOrder(null);
            setNewOrder({
              customerName: '',
              status: 'pending',
              total: 0,
              date: new Date().toISOString().split('T')[0],
            });
          }}>
            Cancel
          </Button>
          <Button variant="primary" onClick={editingOrder ? handleUpdateOrder : handleAddOrder}>
            {editingOrder ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TableCase; 