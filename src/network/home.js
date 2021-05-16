import instance from './request'

export function getHomeSwiper () {
  return instance.get('lejuClient/home/bannerAds')
}

export function getHomeGoods (type, page) {
  return instance.post(`/lejuClient/product/findProductList/${type}/${page}`)
}

export function getHomeRecommend (){
  return instance.get('/lejuClient/productCategory/findAllCategory')
}