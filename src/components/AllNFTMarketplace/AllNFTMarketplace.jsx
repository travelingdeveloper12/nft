import React, { useState, useEffect } from "react";
import NFTImage from "../NFTImage/NFTImage";
import NFTDetails from "../MyNFTDetails/MyNFTDetails";
import Loading from "../Loading/Loading";

const AllNFTMarketplace = ({
  nfts,
  accountAddress,
  totalTokensMinted,
  changeTokenPrice,
  toggleForSale,
  buyNfts,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (nfts.length !== 0) {
      if (nfts[0].metaData !== undefined) {
        setLoading(loading);
      } else {
        setLoading(false);
      }
    }
  }, [nfts]);

  return (
    <div>
      <div className="card mt-1">
        <div className="card-body align-items-center d-flex justify-content-center">
          <h5>
            Total No. of NFT's Minted On The Platform :{" "}
            {totalTokensMinted}
          </h5>
        </div>
      </div>
      <div className="d-flex flex-wrap mb-2">
        {nfts.map((nft) => {
          return (
            <div
              key={nft.tokenId.toNumber()}
              className="w-50 p-4 mt-1 border"
            >
              {!loading ? (
                <NFTImage
                  colors={
                    nft.metaData !== undefined
                      ? nft.metaData.metaData.colors
                      : ""
                  }
                />
              ) : (
                <Loading />
              )}
              <NFTDetails
                nft={nft}
                accountAddress={accountAddress}
                changeTokenPrice={changeTokenPrice}
                toggleForSale={toggleForSale}
                buyNfts={buyNfts}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllNFTMarketplace;
