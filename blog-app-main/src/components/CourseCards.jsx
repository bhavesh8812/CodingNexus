import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'reactstrap';

    const CourseCards = ({ title, description, rating, imageUrl, price}) => {
      const amount = price*100;
      const currency = "INR";
      const receiptId = "qwsaq1";

      const paymentHandler = async (e) => {
        const response = await fetch("http://localhost:5000/order", {
          method: "POST",
          body: JSON.stringify({
            amount,
            currency,
            receipt: receiptId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const order = await response.json();
        console.log(order);
    
        var options = {
          key: "rzp_test_T6GSbIXXIN3Hl4",
          amount,
          currency,
          name: "Acme Corp",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: order.id,
          handler: async function (response) {
            const body = {
              ...response,
            };
    
            const validateRes = await fetch(
              "http://localhost:5000/order/validate",
              {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const jsonRes = await validateRes.json();
            console.log(jsonRes);
          
          },
          prefill: {
            name: "Web Dev Matrix",
            email: "webdevmatrix@example.com",
            contact: "9000000000",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
              });
        rzp1.open();
        e.preventDefault();
      };
      return (
        <Card style={{ width: '18rem'}}>
             <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div style={{ color: 'orange', fontSize: '24px' }}>
              {[...Array(rating)].map((_, index) => (
                <span key={index} style={{ marginRight: '5px' }}>&#9733;</span>
              ))}
            </div>
            <Card.Text>Price: ₹ {price}</Card.Text> {/* Add the Rupees symbol here */}
            <Button color="primary" onClick={paymentHandler}>Buy now</Button>
          </Card.Body>
        </Card>
      );
    };
    const App = () => {
        return (
          <div>
            <CourseCards
              title="Card 1"
              description="This is the description for card 1."
              rating={4}
              price={500}
            />
            <CourseCards
              title="Card 2"
              description="This is the description for card 2."
              rating={3}
              price={500}
            />
            <CourseCards
              title="Card 2"
              description="This is the description for card 2."
              rating={3}
              price={500}
            />
            <CourseCards
              title="Card 2"
              description="This is the description for card 2."
              rating={3}
              price={500}
            />
            <CourseCards
              title="Card 2"
              description="This is the description for card 2."
              rating={3}
              price={500}
            />
            <CourseCards
              title="Card 2"
              description="This is the description for card 2."
              rating={3}
              price={500}
            />
            <CourseCards
              title="Card 2"
              description="This is the description for card 2."
              rating={3}
              price={500}
            />
            <CourseCards
              title="Card 2"
              description="This is the description for card 2."
              rating={3}
              price={500}
            />
            {/* Add more CourseCards components as needed */}
          </div>
        );
      };
      
      export { CourseCards, App }; 
    
   
    
 