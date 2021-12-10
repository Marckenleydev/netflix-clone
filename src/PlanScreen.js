import React, { useEffect, useState } from 'react'
import "./PlanScreen.css"
import db from './firebase'
import { selectUser } from './features/userSlice'
import { loadStripe } from '@stripe/stripe-js' 
import {useDispatch, useSelector} from "react-redux";
import Stripe from 'stripe';

function PlanScreen() {

   const [products, setProducts] =useState([]);
   const user= useSelector(selectUser); 
   const  [subscription, setsubscription]=useState([]);

   useEffect(function(){
       db.collection("customers")
       .doc(user.uid)
       .collection("subscriptions")
       .get()
       .then(querySnapshot=>{
           querySnapshot.forEach(async subscription =>{
               setsubscription({
                   role:subscription.data().role,
                   current_period_end:subscription.data().current_period_end.seconds, 
                   current_period_start:subscription.data().current_period_start.seconds
               })
           })
       })
   },[user.uid ])
 

    useEffect(()=>{
        db.collection("products").where("active", "==", true).get().then((querySnapshot)=>{
        
            const products = {};
            querySnapshot.forEach(async (productDoc)=>{
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection("prices").get();
                priceSnap.docs.forEach((price)=>{
                    products[productDoc.id].prices={
                        priceId:price.id,
                        priceData:price.data(),
                       
                    }
                });
            });
           setProducts(products);

        });
        
    },[]);

    console.log(products)
    console.log(subscription)

    const loadCheckout = async (priceId)=>{
         const docRef = await db
         .collection("customers")
         .doc(user.uid)
         .collection("checkout_sessions")
         .add({
             price:priceId,
             success_url:window.location.origin,
             cancel_url:window.location.origin,
         });
         docRef.onSnapshot(async (snap)=>{
             const {error, sessionId}= snap.data();

             if(error){
                 // show an error to your costomer
                 //inspect your clound function logs in the firebase console.
                 alert(`an error occured:${error.message}`);
             }
             if(sessionId){
                 //we have a session id to checkout
                 // Init Strip
                 const strip = await loadStripe("pk_test_51JoAFhB9HPpweD08i3Zlrvbk9CkoicvtktmTZSJ4j0WDVSovWgyV3GWcLcNodb0RQkjDJNhInoODawBwSDLQ8586001BuPDOrQ");
                 strip.redirectToCheckout({sessionId});
             }
         })
        

    }
    return (
        <div className="planScreen">
        {subscription && (
           <p>Renewal date:{""}
           {new Date(
               subscription?.current_period_end*1000
           ).toLocaleDateString()}
           </p>)}
            {Object.entries(products).map(([productId, productData])=>{
                // chck if the user  active
           
                const isCurrentPackage= productData.name?.includes(subscription?.role);
                console.log(isCurrentPackage)

                return(
                    <div className="plansScreen__plan">
                        <div className="plansScreen__info">
                            <h5>{productData.name}</h5>
                            <h5>{productData.description}</h5>
                        </div>
                        <button onClick={()=> 
                        !isCurrentPackage && loadCheckout(productData.prices.priceId)
                        }>
                        {isCurrentPackage ? "Current Package": "Subscribe"}</button>
                    </div>
                )
            })}
        </div>
    )

}
export default PlanScreen
