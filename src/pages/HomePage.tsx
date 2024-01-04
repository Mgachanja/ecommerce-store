import { Link } from 'react-router-dom'
import { sampleProducts } from '..//data'
import { Row , Col} from "react-bootstrap"

function HomePage() {
  return (
    <div>
        <Row>
            {sampleProducts.map((product)=>(
              <Col key ={product.slug} sm={6} md={4} lg={3}>
                <Link to ={'/product/' +  product.slug}>
                  <img src={product.image}
                  alt={product.name}
                  className='product-image' />
                 <h2>{product.name}</h2>
                 <p>{product.price}</p>
                 </Link>
              </Col>
            ))}
          </Row>
    </div>
  )
}

export default HomePage