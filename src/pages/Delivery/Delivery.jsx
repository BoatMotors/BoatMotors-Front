import DeliveryPayment from "../../components/Delivery/DeliveryPayment";
import DeliverySDEK from "../../components/Delivery/DeliverySDEK";
import FreeDelivery from "../../components/Delivery/FreeDelivery";
import OwnDeliveryService from "../../components/Delivery/OwnDeliveryService";
import PaymentForGoods from "../../components/Delivery/PaymentForGoods";
import PaymentRequizit from "../../components/Delivery/PaymentRequizit";
import ReviewsForm from "../../components/Reviews/ReviewsForm";
import Header from './../../components/Header/Header'

const Delivery = () => {
  return (
    <>
    <Header BigTxt={'MOTORSBOAT'} SubTxt={'лодки & моторы'} fontStyle={'nordinRegular'} />
    <div className="px-[140px]">
      <DeliveryPayment/>
      <FreeDelivery/>
      <OwnDeliveryService/>
      <DeliverySDEK/>
      <PaymentForGoods/>
      <PaymentRequizit/>
      <ReviewsForm/>
    </div>
  </>
  );
};

export default Delivery;
