import React, { useEffect, useRef } from 'react';

const PayPalButton = () => {
    const paypalRef = useRef(null);

    useEffect(() => {
        // Load the PayPal SDK script dynamically
        const addPayPalScript = async () => {
            if (window.paypal) {
                renderPayPalButtons();
                return;
            }

            const script = document.createElement('script');
            script.src = "https://www.paypal.com/sdk/js?client-id=AVkWz96gFAr2EU8qwxGitK97bxWbgueLg4te5vaWonFy94OdXgw-cYPnJu7d4sZ5ogH_xhtbz7l_R2gh&currency=USD";
            script.async = true;
            script.onload = renderPayPalButtons;
            document.body.appendChild(script);
        };

        const renderPayPalButtons = () => {
            window.paypal.Buttons({
                // Create an order directly on the client
                createOrder: function (data, actions) {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: '49.99', // Set the transaction amount
                                    currency_code: 'USD', // Currency code
                                },
                                description: 'Order Description', // Order description
                            },
                        ],
                    });
                },
                // Capture the order on approval
                onApprove: function (data, actions) {
                    return actions.order.capture().then(orderData => {
                        // Successful transaction
                        const transaction = orderData.purchase_units[0].payments.captures[0];
                        alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for details`);
                        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                    });
                },
                // Handle cancellation
                onCancel: function () {
                    alert('Payment was cancelled!');
                },
                // Handle errors
                onError: function (err) {
                    console.error('An error occurred during the transaction:', err);
                    alert('An error occurred during the payment process.');
                },
            }).render(paypalRef.current);
        };

        addPayPalScript();
    }, []);

    return (
        <div>
            <div ref={paypalRef}></div>
        </div>
    );
};

export default PayPalButton;
