import React from "react";
import BookModel from "../../models/BookModel";
import { Link } from "react-router-dom";
import { LeaveReview } from "../Utils/LeaveReview";

export const CheckoutAndReviewBox: React.FC<{
	book: BookModel | undefined;
	mobile: boolean;
	currentLoansCount: number;
	isAutenticated: any;
	isCheckedOut: boolean;
	checkoutBook: any;
	isReviewLeft: boolean;
	submitReview: any;
}> = (props) => {
	function buttonRender() {
		if (props.isAutenticated) {
			if (!props.isCheckedOut && props.currentLoansCount < 5) {
				return (
					<button
						onClick={() => props.checkoutBook()}
						className="btn btn-success btn-lg"
					>
						Checkedout
					</button>
				);
			} else if (props.isCheckedOut) {
				return (
					<p>
						<b>Book checkedout. Enjoy!</b>
					</p>
				);
			} else if (!props.isCheckedOut) {
				return (
					<p className="text-danger">Too many books checked out.</p>
				);
			}
		}
		return (
			<Link to={"/login"} className="btn btn-success btn-lg">
				Sign in
			</Link>
		);
	}

	function reviewRender() {
		if (props.isAutenticated && !props.isReviewLeft) {
			return (
				<p>
					<LeaveReview submitReview={props.submitReview} />
				</p>
			);
		} else if (props.isAutenticated && props.isReviewLeft) {
			return (
				<p>
					<b>Thank you for your review!</b>
				</p>
			);
		}
		return (
			<div>
				<hr />
				<p>Sign in to be able to leave a review.</p>
			</div>
		);
	}

	return (
		<div
			className={
				props.mobile
					? "card d-flex mt-5"
					: "card col-3 container d-flex mb-5"
			}
		>
			<div className="card-body container">
				<div className="mt-3">
					<p>
						<b>{props.currentLoansCount}/5 </b>
						books checked out
					</p>
					<hr />
					{props.book &&
					props.book.copiesAvailable &&
					props.book.copiesAvailable > 0 ? (
						<h4 className="text-success">Available</h4>
					) : (
						<h4 className="text-danger">Wait List</h4>
					)}
					<div className="row">
						<p className="col-6 lead">
							<p>{props.book?.copies} copies</p>
						</p>
						<p className="col-6 lead">
							<b>{props.book?.copiesAvailable} </b>
							available
						</p>
					</div>
				</div>
				{buttonRender()}
				<hr />
				<p className="mt-3">
					This number can change until placing order has been
					complete.
				</p>
				{reviewRender()}
			</div>
		</div>
	);
};
