import { useEffect, useState } from "react"
import StripeCheckout from "react-stripe-checkout"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const KEY = "pk_test_51PUKIfKnayKXw2WrieUfvRqB6duODF8OgfWcVGtIcSj6FdiAQahlkrsrtNNUcBqTpxnYbCZHu4rxenLvCx9csCA900YfTSIl4t"

const Pay = () =>{

    const [stripeToken , setStripeToken] = useState(null)
    const navigate = useNavigate()
    const onToken = (token)=>{
        console.log(token)
        setStripeToken(token)
    }

    useEffect(()=>{
        const makeRequest = async () =>{
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",{
                        tokenId : stripeToken.id , 
                        amount : 2000
                    }
                )
                console.log(res.data)
                navigate('/success')
            } catch (err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest()
    },[stripeToken , navigate])
    return(
        <div
            style={{
                height:"100vh",
                display:"flex",
                alignItems : "center",
                justifyContent:"center"
            }}
        >
        {stripeToken ? (<span>Processing.Please wait ....</span>) :(

            <StripeCheckout name="Ecommerce Shop" image="https://nitinyad.github.io/portfolio-website/static/media/HeroImage.914a793058e06e8395a3.jpg"
            billingAddress
            shippingAddress
            description="Your total is $20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
            >
        <button
            style={{
                border:"none",
                width:120,
                borderRadius: 5 ,
                padding : "20px",
                backgroundColor:"black",
                color:"white",
                fontWeight:"600",
                cursor:"pointer"
            }}
            >
            Pay now
        </button>
        </StripeCheckout>
            )}
        </div>
    )
}

export default Pay