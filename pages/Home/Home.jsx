import React from 'react'
import Banner from '../../components/Banner'
import ProductCategory from '../../components/ProductCategory'
import Product from '../../components/Product'
import SpecialOffer from '../../components/SpecialOffer'
import SpecialOfferProduct from '../../components/SpecialOfferProduct'
import FooterCom from '../../components/FooterCom'

const Home = () => {
  return (
    <>
        <Banner/>
        <ProductCategory/>
        <Product/>
        <SpecialOffer/>
        <SpecialOfferProduct/>
        <FooterCom/>
    </>
  )
}

export default Home