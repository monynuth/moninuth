import React from 'react'
import { Link } from 'react-router-dom'

const ShopBreadcrumb = () => {
  return (
      <div class="page-notification">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <nav aria-label="breadcrumb">
                          <ol class="breadcrumb justify-content-center">
                              <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                              <li class="breadcrumb-item"><a>Shop</a></li>
                          </ol>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default ShopBreadcrumb