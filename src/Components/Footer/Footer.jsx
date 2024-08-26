import React from 'react'
import amazonPay from '../../assets/images/Amazon_Pay_logo.png'
import masterCard from '../../assets/images/MasterCard-Logo.png'
import payPal from '../../assets/images/PayPal.png'
import googlePlay from '../../assets/images/get-it-on-google-play-badge.png'
import appleStore from '../../assets/images/get-it-on-apple-store.png'

export default function Footer() {
    return <>
        <div className='w-100 footer py-3'>
            <div className='container my-5'>
                <footer className='row'>
                    <div className='mb-4'>
                        <h5 className='h3'>
                        Subscribe To Our Email Updates for New Products & Special Offers

                        </h5>
                
                    </div>
                    <div className='col-12'>
                        <div className='row justify-content-evenly'>
                            <div className='col-11 col-md-9 col-lg-10 p-0 px-md-2 mb-2'>
                                <input className='form-control py-2' type="text" placeholder='Email ..' />
                            </div>
                            <button className='col-11 col-md-3 col-lg-2 btn bg-main text-white py-2' style={{ height: 'fit-content' }}>Share Offers</button>
                        </div>
                    </div>
                    <div className='line-break'></div>
                    <div className='row d-flex align-items-center justify-content-between'>
                        <div className='col-md-6'>
                            <div className='row d-flex align-items-center'>
                                <div className='col-1 p-0 me-2'>
                                    <img className='w-100' src={amazonPay} alt="" />
                                </div>
                                <div className='col-1 p-0 me-2'>
                                    <img className='w-100' src={masterCard} alt="" />
                                </div>
                                <div className='col-1 p-0 me-2'>
                                    <img className='w-100' src={payPal} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='row d-flex align-items-center flex-row-reverse'>
                                <div className='col-2 p-1 '>
                                    <img className='w-100' src={appleStore} alt="" />
                                </div>
                                <div className='col-2 p-0'>
                                    <img className='w-100' src={googlePlay} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='line-break'></div>

                    <div className='text-center' >
        Copy Right 2024 &copy; By YOUSSEF KHIRALLA All rights
        Reserved
      </div>
                </footer>
            </div>

        </div>
    </>
}
// BENZO  
