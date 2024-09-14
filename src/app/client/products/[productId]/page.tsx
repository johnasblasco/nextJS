
const productDetails = ({ params }: { params: { productId: string } }) => {
      return (
            <div>{params.productId}</div>
      )
}

export default productDetails