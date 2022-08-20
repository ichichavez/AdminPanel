import { Link } from "react-router-dom"
import "./product.css"
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@mui/icons-material"

export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="Sales Performance" />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src="https://www.cnet.com/a/img/resize/b5d55d17560e2b66c38296584e5b57562c63e554/hub/2016/09/13/1d528046-b515-48e5-a170-b9895ec09e89/apple-airpods-2016-014.jpg?auto=webp&fit=crop&height=675&width=1200" 
                alt="" className="productInfoImg" />
                <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">sales:</span>
                  <span className="productInfoValue">5123</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">active:</span>
                  <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">in stock:</span>
                  <span className="productInfoValue">none</span>
                </div>

            </div>
          </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
              <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder="Apple Airpod"/>
                <label>In Stock</label>
                <select name="inStock" id="idStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img src="https://images.pexels.com/photos/10421387/pexels-photo-10421387.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
                  alt="" className="productUploadImg" />
                  <label for="file">
                    <Publish/>
                  </label>
                  <input type="file" id="file" style={{display:"none"}} />
                </div>
                <button className="productButton">Update</button>
              </div>
            </form>
        </div>
    </div>
  )
}
