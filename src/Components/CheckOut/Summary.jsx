import React from "react";
import "./CheckOut.css";

export function Summary(props) {
  const totalTicketPrice =
    Number(props.BookingDetails.price) * Number(props.BookingDetails.noSeats);
  const tax =  (totalTicketPrice * 0.0275).toFixed(2);
  const gst = (totalTicketPrice * 0.0500).toFixed(2);
  return (
    <div className="summary-slip">
      <div className="wraper-div">
        <h2>Summary</h2>
        <h4>{props.BookingDetails.name}</h4>
        <div className="eachTicket">
          <span>Classic Ticket</span>
          <span>&#8377; {props.BookingDetails.price}</span>
        </div>
        <div className="eachTicket">
          <span>Date</span>
          <span>{props.BookingDetails.BookingDate}</span>
        </div>
        <div className="eachTicket">
          <span>Number of tickets</span>
          <span>{props.BookingDetails.noSeats}</span>
        </div>
        <div className="eachTicket">
          <span>Seat Number</span>{" "}
          <span>
            {props.BookingDetails.seats.map((item, index) => {
              return <span key={`seat${index}`}>{item}</span>;
            })}
          </span>
        </div>
        <div className="eachTicket">
          <span>Convenience Fee(2.75%)</span>
          <span>&#8377; {tax}</span>
        </div>
        <div className="eachTicket">
          <span>Gst (5%)</span>
          <span>&#8377; {gst}</span>
        </div>

        <div className="eachTicket">
          <span>Sub total</span>
          <span>&#8377; {Number(totalTicketPrice) + Number(tax) + Number(gst)}</span>
        </div>
      </div>
    </div>
  );
}