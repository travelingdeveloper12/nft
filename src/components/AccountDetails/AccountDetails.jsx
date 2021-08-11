import React from "react";

const AccountDetails = ({ accountAddress, accountBalance }) => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">DARS NFT Marketplace</h1>
        <p className="lead">
          This is an NFT marketplace.
        </p>
        <hr className="my-4" />
        <p className="lead">Account Address :</p>
        <h4>{accountAddress}</h4>
        <p className="lead">Account Balance :</p>
        <h4>{accountBalance} Ξ</h4>
      </div>
    </div>
  );
};

export default AccountDetails;
