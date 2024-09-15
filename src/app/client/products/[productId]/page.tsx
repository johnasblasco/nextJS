
const productDetails = ({ params }: { params: { productId: string } }) => {
      return (
            <div className="bg-red-400">{params.productId}</div>
      )
}

export default productDetails